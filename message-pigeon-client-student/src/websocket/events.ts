import { ask } from '@tauri-apps/api/dialog';
import { message } from 'antd';
import { API } from '../http/apis';
import { teachersActions } from '../state/slices/teachers.slice';
import { store } from '../state/store';

let state: ReturnType<typeof store.getState>;
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
    try {
      if (allowConnect) {
        const { data } = await API.acceptConnectRequest({ requestId });
        store.dispatch(
          teachersActions.add({ id: data.teacherId, name: data.teacherName }),
        );
        message.success(`与 ${teacherName}老师 绑定成功`);
      } else {
        await API.rejectConnectRequest({ requestId });
      }
    } catch (error) {
      message.error('绑定教师出错, 请重新请求');
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
};
