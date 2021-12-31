<template>
  <ol class="label">
    <li v-for="tag in Object.keys(newTag[1])" :key="tag" :class="tag" class="labelAdd">
      <div>
        <Icon :name="tag"/>
        {{ newTag[1][tag] }}
      </div>
      <div>
        <Icon name="delete" class="delete"/>
      </div>
    </li>
    <li>
      <router-link to="/labels/edit">
        <span>添加新的标签</span>
        <Icon name="right" class="right"/>
      </router-link>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class LabelTagIncome extends Vue {
}
</script>

<style scoped lang="scss">

</style>