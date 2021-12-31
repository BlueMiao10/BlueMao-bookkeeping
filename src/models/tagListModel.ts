const localStorageKeyName = 'tagList';
type TagListModel = {
  data: Record<string, string>
  fetch: () => Record<string, string>
  save: () => void
}
const tagListModel: TagListModel = {
  data: {},
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '{}');
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};

export default tagListModel;