<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Notes @update:value="onUpdateNotes" :date.sync="record.createdAt"/>
    <MoneyTags @update:value="onUpdateTags"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/Money/Numberpad.vue';
import Notes from '@/components/Money/Notes.vue';
import {Component} from 'vue-property-decorator';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';
import MoneyTags from '@/components/Money/MoneyTags.vue';
import dayjs from 'dayjs';

@Component({
  components: {MoneyTags, Notes, NumberPad, Tabs}
})

export default class Money extends Vue {
  record: RecordItem = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0,
    createdAt: dayjs(new Date().toISOString()).format('YYYY-MM-DD')
  };
  recordTypeList = recordTypeList;

  created() {
    this.$store.commit('fetchRecords');
    this.$store.commit('fetchTags');
  }

  get recordList() {
    return this.$store.state.recordList;
  }

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
    this.$store.commit('createRecords', this.record);
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
