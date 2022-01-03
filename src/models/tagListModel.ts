const localStorageKeyName = 'tagList';

type innerTag = {
  id: string
  name: string
  icon: string
}
type TagListModel = {
  data: innerTag[][]
  bool: boolean
  fetch: () => innerTag[][]
  init: () => innerTag[][]
  createPay: (name: string, icon: string) => 'success'
  createIncome: (name: string, icon: string) => 'success'
  save: (data: innerTag[][]) => void
}

const tagListModel: TagListModel = {
  data: [],
  bool: true,
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '{}');
    return this.data;
  },
  init() {
    this.data = new Array(2).fill(0).map(() => new Array(1).fill(0))
    // this.data = [...(new Array(2))].map(() => new Array(1));
    return this.data;
  },
  createPay(name: string, icon: string) {
    if (this.bool) {
      this.init();
      this.data[0].push({id: name, name: name, icon: icon});
      this.save(this.data);
      this.bool = false;
      return 'success';
    } else {
      this.data[0].push({id: name, name: name, icon: icon});
      this.save(this.data);
      return 'success';
    }
  },
  createIncome(name: string, icon: string) {
    if (this.bool) {
      this.init()
      this.data[1].push({id: name, name: name, icon: icon});
      this.save(this.data);
      this.bool = false;
      return 'success';
    } else {
      this.data[1].push({id: name, name: name, icon: icon});
      this.save(this.data);
      return 'success';
    }
  },

  save(data: innerTag[][]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }
};

export default tagListModel;