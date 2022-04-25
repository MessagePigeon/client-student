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

### Message Popup Window (windows only)

Use Visual Studio open `/src-popup/windows/MessagePigeonClientStudentPopup.sln`
