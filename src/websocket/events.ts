import { ask } from '@tauri-apps/api/dialog';
import { message } from 'antd';
import dayjs from 'dayjs';
import { popupMessage } from '../common/helpers/popup-message.helper';
import { API } from '../http/apis';
import { messagesActions } from '../state/slices/messages.slice';
import { openingMessagesActions } from '../state/slices/opening-messages.slice';
import { teachersActions } from '../state/slices/teachers.slice';
import { RootState, store } from '../state/store';

let state: RootState;
store.subscribe(() => {
  state = store.getState();
});

export const websocketEvents = {
  'connect-request': async ({
    requestId,
    teacherName,
  }: {
    requestId: string;
    teacherName: string;
  }) => {
    const allowConnect = await ask(`是否绑定 ${teacherName}老师`, '绑定请求');
    if (allowConnect) {
      const { data } = await API.acceptConnectRequest({ requestId });
      store.dispatch(
        teachersActions.add({ id: data.teacherId, name: data.teacherName }),
      );
      message.success(`与 ${teacherName}老师 绑定成功`);
    } else {
      await API.rejectConnectRequest({ requestId });
    }
  },
  'teacher-connect-by-admin': (data: {
    teacherId: string;
    teacherName: string;
  }) => {
    store.dispatch(
      teachersActions.add({ id: data.teacherId, name: data.teacherName }),
    );
    message.success(`与 ${data.teacherName}老师 绑定成功`);
  },
  'teacher-name-changed': ({
    teacherId,
    newName,
  }: {
    teacherId: string;
    newName: string;
  }) => {
    const oldName = state.teachers.teachers.find(
      ({ id }) => id === teacherId,
    )?.name;
    store.dispatch(teachersActions.changeName({ id: teacherId, newName }));
    message.info(`教师 ${oldName} 更名为 ${newName}`);
  },
  'teacher-disconnect': ({ teacherId }: { teacherId: string }) => {
    const name = state.teachers.teachers.find(
      ({ id }) => id === teacherId,
    )?.name;
    store.dispatch(teachersActions.remove({ id: teacherId }));
    message.info(`与 ${name}老师 断开绑定`);
  },
  logout: () => {
    localStorage.removeItem('token');
    location.reload();
  },
  message: async (data: {
    messageId: number;
    message: string;
    teacherName: string;
    closeDelay: number;
    tts: number;
  }) => {
    await popupMessage(
      {
        id: data.messageId,
        message: data.message,
        closeDelay: data.closeDelay,
        teacherName: data.teacherName,
      },
      { sendRequestOnClose: true },
    );
    if (localStorage.getItem('playMessageSound') === 'true') {
      await new Audio('/message.wav').play();
    }
    store.dispatch(
      messagesActions.unshift({
        id: data.messageId,
        message: data.message,
        teacherName: data.teacherName,
        createdAt: dayjs().format(),
      }),
    );
  },
  'close-message': async ({ messageId }: { messageId: number }) => {
    store.dispatch(openingMessagesActions.setCloseByTeacher({ id: messageId }));
    await state.openingMessages.openingMessages
      .find(({ id }) => id === messageId)
      ?.proc.kill();
  },
};
