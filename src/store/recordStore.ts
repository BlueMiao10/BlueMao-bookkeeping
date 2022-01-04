import clone from '@/lib/clone';

const localStorageKeyName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.recordList?.push(record2);
    recordStore.saveRecords();
  },
  selectRecord: (number: number) => {
    if (number === 0) {
      return [{name: '一般', icon: 'recreation'}, {name: '房租', icon: 'rent'}, {name: '穿衣', icon: 'cloth'}, {
        name: '出行',
        icon: 'transport'
      }, {name: '酒水', icon: 'alcohol'}, {name: '旅游', icon: 'travel'}, {name: '人情', icon: 'friend'}, {
        name: '零食',
        icon: 'snack'
      }, {name: '学习', icon: 'study'}, {name: '吃饭', icon: 'eat'}];
    } else if (number === 1) {
      return [{name: '一般', icon: 'recreation'}, {name: '投资', icon: 'invest'}, {name: '工资', icon: 'salary'}, {
        name: '红包',
        icon: 'envelope'
      }, {name: '报销', icon: 'reimburse'}, {name: '奖金', icon: 'bonus'}];
    }
  }
};

recordStore.fetchRecords();

export default recordStore;