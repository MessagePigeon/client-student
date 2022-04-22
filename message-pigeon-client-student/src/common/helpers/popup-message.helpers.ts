import { Command } from '@tauri-apps/api/shell';

type BaseArgs = {
  message: string;
  teacherName: string;
  delayTime: number;
};
type CloseRequestArgs = {
  baseUrl: string;
  token: string;
  messageId: number;
};

export function popupMessage(
  baseArgs: BaseArgs,
  closeRequestArgs?: CloseRequestArgs,
) {
  const baseArgsArr = [
    '--message-start',
    baseArgs.message,
    '--message-end',
    '--delay-time',
    `${baseArgs.delayTime}`,
    '--teacher-name',
    baseArgs.teacherName,
  ];
  let closeRequestArgsArr: string[] = [];
  if (closeRequestArgs) {
    closeRequestArgsArr = [
      '--close-request',
      '--base-url',
      closeRequestArgs.baseUrl,
      '--token',
      closeRequestArgs.token,
      '--message-id',
      `${closeRequestArgs.messageId}`,
    ];
  }
  Command.sidecar('binaries/popup', [
    '--no-debug',
    ...baseArgsArr,
    ...closeRequestArgsArr,
  ]).execute();
}
