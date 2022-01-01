<template>
  <div class="tags">
    <Output/>
    <ul class="current">
      <li v-for="tag in Object.keys(type === '-' ? dataSource[0]: dataSource[1])" :key="tag" @click="toggle(tag)"
          :class="{selected:arr.indexOf(tag)>=0}">
        <Icon :name="(type === '-' ? dataSource[0] : dataSource[1])[tag]"/>
        {{ tag }}
      </li>
      <li class="new">
        <router-link to="/labels" class="item" active-class="selected">
          <Icon name="add"/>
          编辑
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import EventBus from '@/eventBus';
import Output from '@/components/Money/Output.vue';


@Component({
  components: {Output}
})

export default class Tags extends Vue {
  type = '-';
  selectedTags: Record<string, string> = { '一般':'recreation'};
  arr: string[] = ['一般'];
  @Prop(Array) dataSource: Record<string, string>[] | undefined;

  toggle(tag: string) {
    const index = this.arr.indexOf(tag);
    if (index >= 0) {
      this.arr.splice(index, 1);
      if (this.arr.length === 0) {
        this.arr.push('一般');
      }
    } else {
      this.arr.shift();
      this.arr.push(tag);
    }
    if (this.dataSource) {
      this.selectedTags = {};
      Vue.set(this.selectedTags, this.arr[0], (this.type === '-' ? (this.dataSource)[0] : (this.dataSource)[1])[this.arr[0]]);
    }
    this.$emit('update:value', this.selectedTags);
  }

  created() {
    EventBus.$on('value', (data: string) => {
      this.type = data;
    });
    this.$emit('update:value', this.selectedTags);
  }

}
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

      &.selected {
        .icon {
          border-radius: 50%;
          border: 1px solid red;
        }
      }

      .item {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .icon {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>