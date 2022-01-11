<template>
  <div class="notes">
    <Icon name="note"/>
    <input type="text" placeholder="写点备注~" v-model="value">
    <div class="time">
      <input class="dateTime" type="date" :value="date"
             @input="$emit('update:date',$event.target.value)">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Notes extends Vue {
  value = '';
  @Prop(String) date?: string;

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
    padding: 12px 0;
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

  input {
    display: flex;
    flex-direction: row-reverse;
    width: 124px;
    margin-right: 5px;
  }
}
</style>