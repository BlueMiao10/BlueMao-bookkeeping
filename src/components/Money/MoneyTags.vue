<template>
  <div class="tags">
    <Output/>
    <ul class="current">
      <li v-for="tag in type === '-' ? $store.state.tagPay: $store.state.tagIncome" :key="tag.name"
          @click="toggle(tag.name,tag.icon)"
          :class="{selected:arr.indexOf(tag.name)>=0}">
        <Icon :name="tag.icon"/>
        {{ tag.name }}
      </li>
      <li v-for="(allTag,index) in (type === '-' ? newArrayTag(0): newArrayTag(1))" :key="index"
          @click="toggle(allTag.name,allTag.icon)"
          :class="{selected:arr.indexOf(allTag.name)>=0}">
        <Icon :name="allTag.icon"/>
        {{ allTag.name }}
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
import {Component} from 'vue-property-decorator';
import EventBus from '@/eventBus';
import Output from '@/components/Money/Output.vue';
import store from '@/store';

@Component({
  components: {Output}
})
export default class MoneyTags extends Vue {
  type = '-';
  selectedTags = {name: '一般', icon: 'recreation'};
  arr: string[] = ['一般'];
  newTag = store.state.tagList;

  get tagList() {
    return this.$store.state.tagList;
  }

  toggle(tag: string, icon: string) {
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
    this.selectedTags.name = tag;
    this.selectedTags.icon = icon;
    this.$emit('update:value', this.selectedTags);
  }

  newArrayTag(number: number) {
    if ((this.newTag)[0] === undefined) {
      return;
    } else {
      return this.newTag[number].slice(1);
    }
  }

  created() {
    this.$store.commit('fetchTags');
    EventBus.$on('submitTab', (data: string) => {
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