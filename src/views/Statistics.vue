<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <el-empty :image-size="200" v-if="groupList.length === 0"></el-empty>
    <ol>
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title">{{ beautify(group.title) }}<span>总计：￥{{ group.total }}</span></h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">

            <div class="iconTags">
              <Icon :name="item.tags[0].icon"/>
              <span>{{ item.tags[0].name }}</span>
            </div>
            <div class="notes">
              <span class="notes" :style="{marginRight:'auto'}">{{ item.notes }}</span>
            </div>
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
import recordTypeList from '@/constants/recordTypeList';
import dayjs from 'dayjs';
import clone from '@/lib/clone';

@Component({
  components: {Tabs},
})
export default class Statistics extends Vue {
  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  get groupList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const newList = clone(recordList).filter((r: RecordItem) => r.type === this.type).sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if(newList.length === 0){return []}
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

  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, 'day')) {
      return '今天';
    } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
      return '昨天';
    } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
      return '前天';
    } else if (day.isSame(now, 'year')) {
      return day.format('M月DD日');
    } else {
      return day.format('YYYY年M月DD日');
    }
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
  @extend %item;
  background-color: white;
}

.record {
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
  margin-left: 5px;
  color: #999;
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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