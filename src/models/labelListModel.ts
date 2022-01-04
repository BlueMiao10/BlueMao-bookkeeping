const localStorageKeyName = 'labelList';
const labelListModel = {
  newIcon(){
    return ['daily', 'donate', 'business', 'interest', 'fuel', 'medicine', 'makeup', 'phone', 'winning']
  },
  select(tag: string) {
    const selectedTags: string[] = [];
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      selectedTags.splice(index, 1);
      return selectedTags
    } else {
      selectedTags.shift();
      selectedTags.push(tag);
      return selectedTags
    }
  },
  fetch() {
    return JSON.parse(<string>window.localStorage.getItem(localStorageKeyName));
  },
  save(data: number) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default labelListModel;