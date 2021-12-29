<template>
  <div class="tags">
    <Output/>
    <ul class="current" v-if="type === '-' ">
      <li v-for="tag in name2" :key="tag" @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">
        <Icon :name="svg2[name2.indexOf(tag)]"/>
        {{ tag }}
      </li>
      <li class="new" @click="create2">
        <Icon name="add"/>
        编辑
      </li>
    </ul>
    <ul class="current" v-else>
      <li v-for="tag in name" :key="tag" @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">
        <Icon :name="svg[name.indexOf(tag)]"/>
        {{ tag }}
      </li>
      <li class="new" @click="create">
        <Icon name="add"/>
        编辑
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EventBus from '@/eventBus';
import Output from '@/components/Money/Output.vue';

@Component({
  components: {Output}
})

export default class Tags extends Vue {
  type = '-';
  selectedTags: string[] = [];
  svg2: string[] = ['recreation', 'rent', 'cloth', 'transport', 'alcohol', 'travel', 'friend', 'snack', 'study', 'eat'];
  name2: string[] = ['一般', '房租', '穿衣', '出行', '酒水', '旅游', '人情', '零食', '学习', '吃饭'];
  svg: string[] = ['recreation', 'invest', 'salary', 'envelope', 'reimburse', 'bonus'];
  name: string[] = ['一般', '投资', '工资', '红包', '报销', '奖金'];

  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  create() {
    const tag = window.prompt('请输入标签名');
    if (tag === '') {
      window.alert('标签名不能为空');
    } else {
      this.name.push(tag as string);
    }
  }

  create2() {
    const tag = window.prompt('请输入标签名');
    if (tag === '') {
      window.alert('标签名不能为空');
    } else {
      this.name2.push(tag as string);
    }
  }

  created() {
    EventBus.$on('value', (data: string) => {
      this.type = data;
    });
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

      .icon {
        width: 40px;
        height: 40px;
      }
    }
  }
}
</style>