import { Command } from '@tauri-apps/api/shell';

export function testMessageFontSize(fontSize: number) {
  Command.sidecar('bin/popup', [
    '--no-debug',
    '--message-start',
    '测试消息',
    '--message-end',
    '--close-delay',
    '0',
    '--font-size',
    `${fontSize}`,
    '--title',
    `测试消息`,
  ]).execute();
}
