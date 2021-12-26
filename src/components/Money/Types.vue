<template>
  <div>
    <ul class="types">
      <li>收入</li>
      <li class="selected">支出</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Types'
};
</script>

<style scoped lang="scss">
@import "~@/assets/style/helper.scss";
.types {
  display: flex;
  font-size: 16px;
  justify-content: center;

  li {
    margin: 5px 16px;

    &.selected {
      color: $color-highlight;
    }
  }
}
</style>