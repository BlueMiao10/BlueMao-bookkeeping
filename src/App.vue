<template>
  <div id="app">
    <!-- 在router中，我们定义了访问的路径，显示的内容，在这里我们定义显示的位置 -->
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body{
  font-family: $font-hei;
  line-height: 1.5;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}

#app{
  max-width: 500px;
  margin: 0 auto;
}
</style>
