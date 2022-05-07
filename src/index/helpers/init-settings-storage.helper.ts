/**
 * Set local storage if not exist
 */
function setDefaultLocalStorage(key: string, value: string) {
  const isExist = localStorage.getItem(key);
  if (!isExist) localStorage.setItem(key, value);
}

export function initSettingsStorage() {
  setDefaultLocalStorage('fontSize', '100');
  setDefaultLocalStorage('playMessageSound', 'true');
}
