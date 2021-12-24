<template>
  <div>
    <svg class="icon">
      <use :xlink:href=" '#' + name "></use>
    </svg>
  </div>
</template>

<script lang="ts">
//导入一个目录，记住就行了
// eslint-disable-next-line no-undef
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (err) {console.log(err);}


export default {
  name: 'Icon',
  props: ['name']
};
</script>

<style scoped lang="scss">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>