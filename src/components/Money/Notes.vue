<template>
  <div class="notes">
    <Icon name="note"/>
    <input type="text" placeholder="写点备注~" :value="value" @input="onInput">
    <div class="time">2021.11.15<br>今天</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
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
  }
}
</style>