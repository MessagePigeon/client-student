#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]
extern crate single_instance;

use single_instance::SingleInstance;
use tauri::{
  CustomMenuItem, Manager, RunEvent, SystemTray, SystemTrayEvent, SystemTrayMenu, WindowEvent,
};

fn main() {
  let instance = SingleInstance::new("message-pigeon-student-client-jsun969").unwrap();
  if instance.is_single() {
    run()
  } else {
    std::process::exit(0);
  }
}

fn run() {
  let tray_menu = SystemTrayMenu::new()
    .add_item(CustomMenuItem::new("show".to_string(), "显示主界面"))
    .add_item(CustomMenuItem::new("quit".to_string(), "退出"));
  let system_tray = SystemTray::new().with_menu(tray_menu);

  let app = tauri::Builder::default()
    .system_tray(system_tray)
    .on_system_tray_event(|app_handle, e| match e {
      SystemTrayEvent::LeftClick { .. } => {
        let window = app_handle.get_window("main").unwrap();
        window.show().unwrap();
        window.set_focus().unwrap();
      }
      SystemTrayEvent::MenuItemClick { id, .. } => match id.as_str() {
        "show" => {
          let window = app_handle.get_window("main").unwrap();
          window.show().unwrap();
          window.set_focus().unwrap();
        }
        "quit" => app_handle.exit(0),
        _ => {}
      },
      _ => {}
    })
    .build(tauri::generate_context!())
    .expect("error while running tauri application");

  app.run(|app_handle, e| match e {
    RunEvent::WindowEvent {
      label,
      event: WindowEvent::CloseRequested { api, .. },
      ..
    } => {
      api.prevent_close();
      app_handle.get_window(&label).unwrap().hide().unwrap();
    }
    _ => {}
  })
}
