import creatorId from '@/lib/creatorId';
import labelStore from '@/store/labelStore';

const localStorageKeyName = 'tagList';

let data: innerTag[][] = [];

const fetchTags = function () {
  data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '{}');
  return data;
};
const saveTags = function (data: innerTag[][]) {
  window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
};

const tagStore = {
  tagList: fetchTags(),
  fetchTags: fetchTags,
  saveTags: saveTags,
  init() {
    data = new Array(2).fill(0).map(() => new Array(1).fill(0));
    return data;
  },
  create(name: string, icon: string, number: number) {
    let bool = data[0] === undefined;
    const id = creatorId().toString();
    if (bool) {
      tagStore.init();
      data[number].push({id, name: name, icon: icon});
      bool = false;
    } else {
      data[number].push({id, name: name, icon: icon});
    }
    saveTags(data);
    return 'success';
  },
  createTag: (name: string, value: string) => {
    if (labelStore.fetchLabels() > 8) {
      tagStore.create(name, value, 0);
    } else {
      tagStore.create(name, value, 1);
    }
  },
  removeTag: (id: string) => {
    let index = -1;
    let index2 = -1;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < data[i].length; j++) {
        if (data[i][j].id === id) {
          index = i;
          index2 = j;
          break;
        }
      }
    }
    data[index].splice(index2, 1);
    saveTags(data);
    return true;
  }
};

export default tagStore;