<template>
  <Layout class-prefix="layout">
    {{ record }}
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
    'recreation': '一般', 'rent': '房租', 'cloth': '穿衣', 'transport': '出行', 'alcohol': '酒水', 'travel': '旅游', 'friend': '人情',
    'snack': '零食', 'study': '学习', 'eat': '吃饭'
  }, {'recreation': '一般', 'invest': '投资', 'salary': '工资', 'envelope': '红包', 'reimburse': '报销', 'bonus': '奖金'}];

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
    const record2: RecordItem = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChanged() {
    recordListModel.save(this.recordList);
  }

}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
