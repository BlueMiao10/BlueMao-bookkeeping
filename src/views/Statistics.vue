<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <ol>
      <li v-for="(group,index) in result" :key="index">
        <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <div class="iconTags">
              <Icon :name="item.tags[0].icon"/>
              <span>{{ item.tags[0].name }}</span>
            </div>
            <span class="notes" :style="{marginRight:'auto'}">{{ item.notes }}</span>
            <span class="moneyCount">￥{{ item.amount }}</span>
          </li>
        </ol>
      </li>
    </ol>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  intervalList = intervalList;
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  get result() {
    const {recordList} = this;
    type HashTableValue = { title: string, items: RecordItem[] }
    const hashTable: { [key: string]: HashTableValue } = {};
    for (let i = 0; i < recordList.length; i++) {
      const [date, time] = recordList[i].createdAt?.split('T');
      hashTable[date] = hashTable[date] || {title: date, items: []};
      hashTable[date].items.push(recordList[i]);
    }
    return hashTable;
  }

  created() {
    this.$store.commit('fetchRecords');
  }
}
</script>

<style scoped lang="scss">
%item {
  padding: 8px 16px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-content: center;
}

.title {
  @extend %item
}

.record {
  background-color: white;
  @extend %item;
}

.iconTags {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .icon {
    align-self: center;
    min-width: 28px;
    min-height: 28px;
  }

  span {
    display: inline-block;
    min-width: 50px;
    padding-left: 8px;
  }
}

.notes {
  margin-right: auto;
  margin-left: 18px;
  color: #999;
  display: block;
  overflow: auto;
}

.moneyCount {
  display: inline-block;
  align-self: center;
}

::v-deep .type--tabs-item {
  &.selected {
    background-color: #B2D5F5;
  }
}
</style>