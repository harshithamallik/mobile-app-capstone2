function saveData(key, value) {
  localStorage.setItem(key, value);
}

function getData(key) {
  return localStorage.getItem(key);
}
