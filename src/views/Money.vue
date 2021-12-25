<template>
  <Layout>
    <div>
      <ul class="type">
        <li class="selected">收入</li>
        <li>支出</li>
      </ul>
    </div>
    <div>
      100
    </div>
    <div class="tags">
      <div class="current">
        <ul>
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
        </ul>
      </div>
      <div class="new">
        <button>
          <Icon name="add"/>
          新增标签
        </button>
      </div>
    </div>
    <div>
      <input type="text" placeholder="备注">
    </div>
    <div>numberPad</div>
  </Layout>
</template>

<script lang="ts">

export default {
  name: 'Money',
};
</script>

<style scoped lang="scss">

</style>