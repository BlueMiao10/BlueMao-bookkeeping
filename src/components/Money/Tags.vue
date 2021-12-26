<template>
  <div class="tags">
    <ul class="current">
      <li>
        <Icon name="rent"/>
        房租
      </li>
      <li>
        <Icon name="cloth"/>
        穿衣
      </li>
      <li>
        <Icon name="transport"/>
        出行
      </li>
      <li>
        <Icon name="alcohol"/>
        酒水
      </li>
      <li>
        <Icon name="travel"/>
        旅游
      </li>
      <li>
        <Icon name="friend"/>
        人情
      </li>
      <li>
        <Icon name="snack"/>
        零食
      </li>
      <li>
        <Icon name="study"/>
        学习
      </li>
      <li>
        <Icon name="eat"/>
        吃饭
      </li>
      <li>
        <Icon name="recreation"/>
        娱乐
      </li>
      <li class="new">
        <Icon name="add"/>
        编辑
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Tags'
};
</script>

<style scoped lang="scss">
.tags {
  flex-grow: 1;
  .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    li {
      display: flex;
      width: 20%;
      align-items: center;
      flex-direction: column;
      font-size: 13px;
      padding: 10px 0;

      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>