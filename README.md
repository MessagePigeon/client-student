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

1. Open `/src-popup/windows/MessagePigeonClientStudentPopup.sln` with Visual Studio
2. DEVELOPING
3. Compile the project in release mode
4. Rename compiled exe to `popup-x86_64-pc-windows-msvc.exe`
5. Copy the compiled exe to `/src-tauri/bin`

#### Other System

Not yet. To develop, we use arguments to pass popup message data

```
<popup binary file> --arg [arg value]
```

> The following arguments must all be used

| Name        | Value Description                                                                                 | Usage                                     |
| ----------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| No Debug    | No value, but must be added to avoid opening debug window.                                        | `--no-debug`                              |
| Title       | Window title to display teacher name (and close delay countdown).                                 | `--title <title>`                         |
| Message     | The message content, may contain spaces and line breaks (`\r`).                                   | `--message-start <message> --message-end` |
| Close Delay | The window cannot be closed during this time. A countdown needs to be displayed. Unit in seconds. | `--close-delay <time>`                    |
| Font Size   | The message content's font size. Default is 100. Minimum is 10.                                   | `--font-size <size>`                      |

Then, see [Tauri Sidecar](https://tauri.studio/docs/building/sidecar/) rename and move the binary file to `/src-tauri/bin`
