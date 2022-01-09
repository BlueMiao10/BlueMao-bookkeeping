<template>
  <ol :data-source="recordTypeList" class="xxx">
    <li v-for="(group,index) in groupList" :key="index">
      <div class="title"> ￥{{ group.total }}</div>
      <div v-for="item in group.items" :key="item.id" class="record" :class="{selected:item.type==='+'}">
        <div class="iconTags">
          <Icon :name="item.tags[0].icon"/>
          <span>{{ item.tags[0].name }}</span>
        </div>
        <span class="moneyCount">￥{{ item.amount }}</span>
      </div>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import clone from '@/lib/clone';
import dayjs from 'dayjs';
import recordTypeList from '@/constants/recordTypeList';

@Component
export default class display extends Vue {
  interval = 'day';
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  get groupList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const newList = clone(recordList).sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    const result: Result = [{title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
    });
    return result;
  }

  created() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style scoped lang="scss">
.xxx {
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: column;

  .title {
    padding-left: 15px;
    font-size: 14px;
    color: rgba(170, 165, 165, 0.5);
    text-align: left;
    opacity: 0;
  }

  .record {
    display: flex;
    flex-direction: row;
    margin: 20px -13px;
    text-align: center;
    padding-left: -10px;
    align-items: center;

    .iconTags {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 5px;

      .icon {
        width: 26px;
        height: 26px;
        margin-right: 10px;
      }
    }
  }

  .selected.record {
    opacity: 0;
  }
}
</style>