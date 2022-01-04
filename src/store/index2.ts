import recordStore from '@/store/recordStore';
import tagStore from '@/store/tagStore';
import labelStore from '@/store/labelStore';

const store = {
  ...recordStore,
  ...tagStore,
  ...labelStore
};


export default store;