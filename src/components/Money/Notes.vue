<template>
  <div class="notes">
    <Icon name="note"/>
    <input type="text" placeholder="写点备注~" v-model="value">
    <div class="time">{{ now }}<br>今天</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import dayjs from 'dayjs';

@Component
export default class Notes extends Vue {
  value = '';
  now = dayjs(new Date().toISOString()).format('YYYY-MM-DD');

  @Watch('value')
  onValueChanged(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style scoped lang="scss">
.notes {
  display: flex;
  font-size: 14px;
  background-color: #f5f5f5;
  align-items: center;

  input {
    padding: 16px 0;
    background-color: transparent;
    border: none;
    outline: 0;
    flex-grow: 1;
  }

  .icon {
    width: 24px;
    height: 24px;
    margin-left: 16px;
    margin-right: 5px;
  }

  .time {
    padding-right: 16px;
    text-align: center;
    margin-left: 10px;
  }
}
</style>