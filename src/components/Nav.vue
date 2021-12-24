<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <div class="circle"></div>
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <div class="circle"></div>
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <div class="circle"></div>
      <Icon name="statistics"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';

export default {
  name: 'Nav',
  component: {Icon}
};
</script>

<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  font-size: 12px;
  > .item {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 3px 0;
    position: relative;
    .icon{
      width: 32px;
      height: 32px;
    }
    .circle{
      width: 20px;
      height: 20px;
      background-color: #ee6407;
      border-radius: 20px;
      opacity: 0.8;
      position: absolute;
      top:25%;
      left: 50%;
      transform:translate(-10%,0);
      display: none;
    }
  }
  .item.selected{
    color: #c66821;
    .circle{
      display: block;
    }
  }
}

</style>