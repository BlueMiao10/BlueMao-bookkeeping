import creatorId from '@/lib/creatorId';

const localStorageKeyName = 'tagList';

type innerTag = {
  id: string
  name: string
  icon: string
}
type TagListModel = {
  data: innerTag[][]
  fetch: () => innerTag[][]
  init: () => innerTag[][]
  create: (name: string, icon: string, number: number) => 'success'
  destroy: (id: string) => boolean
  save: (data: innerTag[][]) => void
}

const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '{}');
    return this.data;
  },
  init() {
    this.data = new Array(2).fill(0).map(() => new Array(1).fill(0));
    return this.data;
  },

  create(name: string, icon: string, number: number) {
    let bool = this.data[0] === undefined;
    const id = creatorId().toString();
    if (bool) {
      this.init();
      this.data[number].push({id, name: name, icon: icon});
      bool = false;
    } else {
      this.data[number].push({id, name: name, icon: icon});
    }
      this.save(this.data);
      return 'success';

  },
  destroy(id: string) {
    let index = -1;
    let index2 = -1;
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < this.data[i].length; j++) {
        if (this.data[i][j].id === id) {
          index = i;
          index2 = j;
          break;
        }
      }
    }
    this.data[index].splice(index2, 1);
    this.save(this.data);
    return true;
  },
  save(data: innerTag[][]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default tagListModel;