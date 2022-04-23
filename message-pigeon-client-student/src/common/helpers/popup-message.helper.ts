import { Command } from '@tauri-apps/api/shell';
import { openingMessagesActions } from '../../state/slices/opening-messages.slice';
import { store } from '../../state/store';

let state: ReturnType<typeof store.getState>;
store.subscribe(() => {
  state = store.getState();
});

type BaseArgs = {
  message: string;
  teacherName: string;
  delayTime: number;
};

export class PopupMessage {
  static async open(id: number, baseArgs: BaseArgs) {
    const cmd = Command.sidecar('binaries/popup', [
      '--no-debug',
      '--message-start',
      baseArgs.message,
      '--message-end',
      '--delay-time',
      `${baseArgs.delayTime}`,
      '--title',
      `来自 ${baseArgs.teacherName}老师 的消息`,
    ]);
    cmd.on('close', () => {
      store.dispatch(openingMessagesActions.remove({ id }));
    });
    const proc = await cmd.spawn();
    store.dispatch(openingMessagesActions.add({ id, proc }));
  }
  static async close(id: number) {
    await state.openingMessages.openingMessages
      .find(({ id: origId }) => origId === id)
      ?.proc.kill();
    store.dispatch(openingMessagesActions.remove({ id }));
  }
}
