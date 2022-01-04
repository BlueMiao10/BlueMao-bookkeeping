const localStorageKeyName = 'labelList';

const labelStore = {
  createLabel: () => {
    return ['daily', 'donate', 'business', 'interest', 'fuel', 'medicine', 'makeup', 'phone', 'winning'];
  },
  selectLabel: (tag: string) => {
    const selectedTags: string[] = [];
    selectedTags.shift();
    selectedTags.push(tag);
    return selectedTags;
  },
  fetchLabels() {
    return JSON.parse(<string>window.localStorage.getItem(localStorageKeyName));
  },
  saveLabels(data: number) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};
labelStore.fetchLabels();
export default labelStore;