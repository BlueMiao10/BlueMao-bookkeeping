<template>
  <div class="notes">
    <Icon name="note"/>
    <input type="text" placeholder="写点备注~">
    <div class="time">2021.11.15<br>今天</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Notes'
};
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