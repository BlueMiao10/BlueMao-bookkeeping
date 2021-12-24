<template>
  <div class="nav-wrapper">
    <div class="content">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Layout'
};
</script>

<style scoped lang="scss">
.nav-wrapper {
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  /*高度是满屏*/
  height: 100vh;
}

.content {
  /*查出部分，只有内容区域会滚动*/
  overflow: auto;
  flex-grow: 1;
}
</style>