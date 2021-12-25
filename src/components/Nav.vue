<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
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
    .icon{
      width: 32px;
      height: 32px;
    }
  }
  .item.selected{
    color: #8d430b;
  }
}

</style>