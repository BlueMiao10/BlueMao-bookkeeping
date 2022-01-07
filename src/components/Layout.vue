<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  props: ['classPrefix'],
  name: 'Layout'
};
</script>

<style scoped lang="scss">
.layout-wrapper {
  display: flex;
  flex-direction: column;
  /*高度是满屏*/
  height: 100vh;
}

.content {
  /*查出部分，只有内容区域会滚动*/
  overflow-x: hidden;
  overflow-y: auto;
  flex-grow: 1;
}
</style>