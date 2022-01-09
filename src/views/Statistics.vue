<template>
  <Layout>
    <el-empty :image-size="200" v-if="groupList.length === 0"></el-empty>
    <ol v-else>
      <li v-for="(group,index) in groupList" :key="index">
        <h3 class="title">
          <span class="timeNow">{{ beautify(group.title) }}</span>
          <span class="income">收入：{{ group.income }}元</span>
          <span>支出：{{ group.pay }} 元</span>
        </h3>
        <ol>
          <li v-for="item in group.items" :key="item.id" class="record">
            <div class="iconTags">
              <Icon :name="item.tags[0].icon"/>
              <span>{{ item.tags[0].name }}</span>
            </div>
            <div class="notes">
              <span class="notes" :style="{marginRight:'auto'}">{{ item.notes }}</span>
            </div>
            <span class="moneyCount">{{ item.amount }}</span>
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
  value = '';
  type = '-';
  interval = 'day';
  recordTypeList = recordTypeList;

  get recordList() {
    return this.$store.state.recordList;
  }

  get groupList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}
    type Result = { title: string, total?: number, income?: number, pay?: number, items: RecordItem[] }[]
    const newList = clone(recordList).sort((a: RecordItem, b: RecordItem) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf());
    if (newList.length === 0) {return [];}
    newList.map((item: RecordItem) => {
      if (item.type === '-') {
        item.amount = -item.amount;
      }
    });
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
      group.income = group.items.filter(item => item.type === '+').reduce((sum, item) => sum + item.amount, 0);
      group.pay = -(group.items.filter(item => item.type === '-').reduce((sum, item) => sum + item.amount, 0));
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

.block {
  margin: 10px 15px;

  .el-input__suffix {
    display: none;
  }

  .el-date-editor.el-input.el-input--prefix.el-input--suffix {
    width: 130px;
  }
}

.title {
  @extend %item;
  background-color: white;
  font-size: 12px;
  color: #999;
  border-bottom: 1px solid rgba(175, 173, 173, 0.3);

  .timeNow {
    flex-grow: 1;
  }

  .income {
    display: inline-block;
    margin-right: 15px;
  }
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
  max-width: 50%;
  overflow: auto;
  white-space: nowrap;
  align-self: center;
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