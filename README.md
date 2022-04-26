# Message Pigeon Student Client

> The software of Message Pigeon for student

## Notice

> PRs Welcome

- **Chinese Only** Need translation
- **Windows Only** The popup window is written in winforms
- **TTS Unavailable** Windows Edge webview (tauri built-in browser) doesn't support Web Speech API

## Installation

```sh
pnpm i
```

## Development

### Main Window

After start [backend](https://github.com/MessagePigeon/server)

```sh
pnpm run tauri dev
```

### Message Popup Window

#### Windows

1. Use Visual Studio open `/src-popup/windows/MessagePigeonClientStudentPopup.sln`
2. Rename compiled exe to `popup-x86_64-pc-windows-msvc.exe`
3. Copy the compiled exe to `/src-tauri/bin`

#### Other System

Not yet. To develop, we use arguments to pass popup message data.

```
<popup binary file> --no-debug --title <Title> --message-start <Message Body> --message-end --close-delay <Close Delay Time (second)>
```

Then, see [Tauri Sidecar](https://tauri.studio/docs/building/sidecar/) rename and move the binary file to `/src-tauri/bin`
