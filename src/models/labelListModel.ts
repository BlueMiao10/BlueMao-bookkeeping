const localStorageKeyName = 'labelList';
const labelListModel = {
  fetch() {
    return JSON.parse(<string>window.localStorage.getItem(localStorageKeyName));
  },
  save(data: number) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default labelListModel;