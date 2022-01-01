<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source="tags" @update:value="onUpdateTags"/>
    <Types :value.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/Numberpad.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/MoneyTags.vue';
import Types from '@/components/Money/Types.vue';
import {Component, Watch} from 'vue-property-decorator';
import recordListModel from '@/models/recordListModel';

const recordList = recordListModel.fetch();
@Component({
  components: {Types, Tags, Notes, NumberPad}
})

export default class Money extends Vue {
  record: RecordItem = {tags: [], notes: '', type: '-', amount: 0};
  recordList = recordList;
  tags = [{
    '一般': 'recreation', '房租': 'rent', '穿衣': 'cloth', '出行': 'transport', '酒水': 'alcohol', '旅游': 'travel', '人情': 'friend',
    '零食': 'snack', '学习': 'study', '吃饭': 'eat'
  }, {'一般': 'recreation', '投资': 'invest', '工资': 'salary', '红包': 'envelope', '报销': 'reimburse', '奖金': 'bonus'}];

  onUpdateTags(value: Record<string, string>) {
    this.record.tags = [];
    this.record.tags.push(value);
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;
  }

  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

  saveRecord() {
    recordListModel.create(this.record);
  }

  @Watch('recordList')
  onRecordListChanged() {
    recordListModel.save();
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
