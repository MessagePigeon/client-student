/**
 * Set local storage if not exist
 */
function setDefaultLocalStorage(key: string, value: string) {
  if (!Reflect.has(localStorage, key)) {
    localStorage.setItem(key, value);
  }
}

export function initSettingsStorage() {
  setDefaultLocalStorage('fontSize', '100');
  setDefaultLocalStorage('playMessageSound', 'true');
}
