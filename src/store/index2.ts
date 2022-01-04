import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';
import labelListModel from '@/models/labelListModel';

const store = {
  //recordStore
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),
  selectRecord: (number: number) => recordListModel.initLabel(number),
  //tagStore
  tagList: tagListModel.fetch(),
  createTag: (name: string, value: string) => {
    if (labelListModel.fetch() > 8) {
      tagListModel.create(name, value, 0);
    } else {
      tagListModel.create(name, value, 1);
    }
  },
  removeTag: (id: string) => {
    tagListModel.destroy(id);
  },
  //labelStore
  createLabel: () => labelListModel.newIcon(),
  selectLabel: (tag: string) => labelListModel.select(tag),
  saveLabel: (number: number) => labelListModel.save(number)
};

export default store;