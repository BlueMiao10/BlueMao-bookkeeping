<template>
  <Layout class="chart">
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <div class="chart-wrapper" ref="chartWrapper">
      <chart class="chart" :options="chartOptions"/>
    </div>
    <p class="rankName">排行榜</p>
    <ol v-if="groupList.length>0" class="group">
      <li v-for="(rank,index) in rankList" :key="index" class="record">
        <div class="iconTags">
          <Icon :name="rank.icon"/>
          <div class="percent">
            <div class="rankAmount">
              <div>
                <span>{{ rank.name }}</span>
                <span>{{ ((rank.amountTotal / siTotal) * 100).toFixed(1) }}%</span>
              </div>
              <span class="moneyCount">{{ rank.amountTotal.toFixed(2) }}</span>
            </div>
            <el-progress :percentage="((rank.amountTotal / siTotal).toFixed(1)) * 100"></el-progress>
          </div>
        </div>
      </li>
    </ol>
    <el-empty :image-size="200" v-else></el-empty>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import _ from 'lodash';
import day from 'dayjs';
import Tabs from '@/components/Tabs.vue';
import recordTypeList from '@/constants/recordTypeList';
import clone from '@/lib/clone';
import dayjs from 'dayjs';
import Chart from '@/views/chart.vue';

@Component({components: {Chart, Tabs}})
export default class charts extends Vue {
  type = '-';
  recordTypeList = recordTypeList;
  siTotal = 0;

  mounted() {
    const div = (this.$refs.chartWrapper as HTMLDivElement);
    div.scrollLeft = div.scrollWidth;
  }

  get groupList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}

    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const newList = clone(recordList).filter((r: RecordItem) => r.type === this.type).sort((a: RecordItem, b: RecordItem) => b.amount - a.amount);
    if (newList.length === 0) {return [];}
    const result: Result = [{
      title: dayjs(newList[0].createdAt).format('YYYY-MM-DD'),
      items: [newList[0]]
    }];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.createdAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.createdAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    let array: number[] = [];
    result.forEach(group => {
      group.total = group.items.reduce((sum, item) => sum + item.amount, 0);
      array.push(group.total);
    });
    this.siTotal = array.reduce((v1, v2) => v1 + v2);
    return result;
  }

  get rankList() {
    type Rank = { name: string, icon: string, amountTotal: number }[]
    const rankList: Rank = [];
    for (let i = 0; i < this.groupList.length; i++) {
      for (let j = 0; j < this.groupList[i].items.length; j++) {
        const nameArray = rankList.map(item => item.name);
        if (nameArray.indexOf(this.groupList[i].items[j].tags[0].name) >= 0) {
          rankList[nameArray.indexOf(this.groupList[i].items[j].tags[0].name)].amountTotal += this.groupList[i].items[j].amount;
        } else {
          rankList.push({
            name: this.groupList[i].items[j].tags[0].name,
            icon: this.groupList[i].items[j].tags[0].icon,
            amountTotal: this.groupList[i].items[j].amount
          });
        }
      }
    }
    return rankList;
  }

  created() {
    this.$store.commit('fetchRecords');
  }

  get recordList() {
    return this.$store.state.recordList;
  }

  get keyValueList() {
    const today = new Date();
    const array = [];
    for (let i = 0; i <= 29; i++) {
      const dateString = day(today)
          .subtract(i, 'day').format('YYYY-MM-DD');
      const found = _.find(this.groupList, {
        title: dateString
      });
      array.push({
        key: dateString, value: found ? found.total : 0
      });
    }
    array.sort((a, b) => {
      if (a.key > b.key) {
        return 1;
      } else if (a.key === b.key) {
        return 0;
      } else {
        return -1;
      }
    });
    return array;
  }

  get chartOptions() {
    const keys = this.keyValueList.map(item => item.key);
    const values = this.keyValueList.map(item => item.value);
    return {
      grid: {
        left: 0,
        right: 0,
        bottom: 30
      },
      xAxis: {
        type: 'category',
        data: keys,
        axisTick: {alignWithLabel: true},
        axisLine: {lineStyle: {color: '#666'}},
        axisLabel: {
          formatter: function (value: string) {
            return value.substr(5);
          }
        }
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        symbol: 'circle',
        symbolSize: 12,
        itemStyle: {borderWidth: 1, color: '#666', borderColor: '#666'},
        data: values,
        type: 'line'
      }],
      tooltip: {
        show: true, triggerOn: 'click',
        position: 'top',
        formatter: '{c}'
      }
    };
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

.chart {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;

  .chart {
    width: 420%;

    &-wrapper {
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
}

.group {
  height: 45vh;
  overflow-y: auto;
  overflow-x: hidden;
  .record {
    @extend %item;

    .iconTags {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        align-self: center;
        min-width: 32px;
        min-height: 32px;
      }

      .percent {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .rankAmount {
          display: flex;
          justify-content: space-between;

          span {
            display: inline-block;
            margin-left: 8px;
          }
        }
      }
    }
  }
}

.rankName {
  font-weight: 800;
  font-size: 20px;
  padding-left: 20px;
  margin: 10px 0
}

::v-deep .type--tabs-item {
  &.selected {
    background-color: #B2D5F5;
  }
}
</style>