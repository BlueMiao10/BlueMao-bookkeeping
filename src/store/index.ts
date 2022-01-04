import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import creatorId from '@/lib/creatorId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [[], []] as innerTag[][],
    selectedTags: [] as string[],
    combine: 0 as number,
    labels: ['daily', 'donate', 'business', 'interest', 'fuel', 'medicine', 'makeup', 'phone', 'winning'],
    tagPay: [{name: '一般', icon: 'recreation'}, {name: '房租', icon: 'rent'}, {name: '穿衣', icon: 'cloth'}, {name: '出行', icon: 'transport'}, {name: '酒水', icon: 'alcohol'}, {name: '旅游', icon: 'travel'}, {name: '人情', icon: 'friend'}, {name: '零食', icon: 'snack'}, {name: '学习', icon: 'study'}, {name: '吃饭', icon: 'eat'}],
    tagIncome: [{name: '一般', icon: 'recreation'}, {name: '投资', icon: 'invest'}, {name: '工资', icon: 'salary'}, {name: '红包', icon: 'envelope'}, {name: '报销', icon: 'reimburse'}, {name: '奖金', icon: 'bonus'}]
  },
  mutations: {
    createRecords(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList?.push(record2);
      store.commit('saveRecords');
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchRecords(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    fetchTags(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '{}');
    },
    initTags(state) {
      state.tagList = new Array(2).fill(0).map(() => new Array(1).fill(0));
    },
    saveTags(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    getLabels(state) {
      state.combine = JSON.parse(<string>window.localStorage.getItem('labelList'));
    },
    saveLabels(state, data: number) {
      window.localStorage.setItem('labelList', JSON.stringify(data));
    },
    selectLabels(state, tag: string) {
      state.selectedTags.shift();
      state.selectedTags.push(tag);
    },
    createTags(state, newTag) {
      store.commit('getLabels');
      let bool = state.tagList[0] === undefined;
      const id = creatorId().toString();
      if (bool) {
        store.commit('initTags');
        if (state.combine > 8) {
          state.tagList[0].push({id, name: newTag.name, icon: newTag.icon});
        } else {
          state.tagList[1].push({id, name: newTag.name, icon: newTag.icon});
        }
        bool = false;
      } else {
        if (state.combine > 8) {
          state.tagList[0].push({id, name: newTag.name, icon: newTag.icon});
        } else {
          state.tagList[1].push({id, name: newTag.name, icon: newTag.icon});
        }
      }
      store.commit('saveTags');
    },
    removeTags: (state, id) => {
      let index = -1;
      let index2 = -1;
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < state.tagList[i].length; j++) {
          if (state.tagList[i][j].id === id) {
            index = i;
            index2 = j;
            break;
          }
        }
      }
      state.tagList[index].splice(index2, 1);
      store.commit('saveTags');
    }
  }
});

export default store;