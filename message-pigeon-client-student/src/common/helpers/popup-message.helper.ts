import { Command } from '@tauri-apps/api/shell';
import { API } from '../../http/apis';
import {
  closeByTeacherMessageIdsSelector,
  openingMessagesActions,
} from '../../state/slices/opening-messages.slice';
import { RootState, store } from '../../state/store';

let state: RootState;
store.subscribe(() => {
  state = store.getState();
});

type Args = {
  id: number;
  message: string;
  teacherName: string;
  closeDelay: number;
};
type Options = { sendRequestOnClose?: boolean };

export async function popupMessage(args: Args, options?: Options) {
  const cmd = Command.sidecar('binaries/popup', [
    '--no-debug',
    '--message-start',
    args.message,
    '--message-end',
    '--delay-time',
    `${args.closeDelay}`,
    '--title',
    `来自 ${args.teacherName}老师 的消息`,
  ]);
  cmd.on('close', async () => {
    const closeByTeacherMessageIds = closeByTeacherMessageIdsSelector(state);
    // if message is closed by teacher, don't send close request
    if (
      options?.sendRequestOnClose &&
      !closeByTeacherMessageIds.includes(args.id)
    ) {
      await API.closeMessage({ messageId: args.id });
    }
    store.dispatch(openingMessagesActions.remove({ id: args.id }));
  });
  const proc = await cmd.spawn();
  store.dispatch(
    openingMessagesActions.add({ id: args.id, proc, closeByTeacher: false }),
  );
}
