const localStorageKeyName = 'labelList';
const labelListModel = {
  data: {},
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '{}') as Record<string, string>;
    return this.data;
  },
  save(data:Record<string, string>) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default labelListModel;