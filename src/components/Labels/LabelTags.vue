<template>
  <ol class="labelTags2">
    <li v-for="tag in type === '-' ? $store.state.tagPay: $store.state.tagIncome" :key="tag.name">
      <div>
        <Icon :name="tag.icon"/>
        <span>{{ tag.name }}</span>
      </div>
      <Icon name="lock"/>
    </li>
    <li v-for="(allTag,index) in (type === '-' ? newArrayTag(0): newArrayTag(1))" :key="index">
      <div>
        <Icon :name="allTag.icon"/>
        {{ allTag.name }}
      </div>
      <div @click="remove(allTag.id)" class="delete">
        <Icon name="delete"/>
      </div>
    </li>
    <li @click="updateTag">
      <router-link to="/labels/edit" class="add">
        <span>点击添加新的标签</span>
        <Icon name="right" class="right"/>
        <Icon name="right" class="right"/>
        <Icon name="right" class="right"/>
      </router-link>
    </li>
  </ol>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import EventBus from '@/eventBus';

@Component
export default class Tags extends Vue {
  type = '-';

  updateTag() {
    let arr = (this.type === '-' ? this.$store.state.tagPay : this.$store.state.tagIncome);
    this.$store.commit('saveLabels', arr.map((item: Record<string, string>) => item.name).length);
  }

  get tagList() {
    return this.$store.state.tagList;
  }

  newArrayTag(number: number) {
    if ((this.tagList)[0] === undefined) {
      return;
    } else {
      return this.tagList[number].slice(1);
    }
  }

  open(id:string) {
    this.$confirm('确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      this.$message({
        type: 'success',
        message: '删除成功!',
        duration:1000
      });
      this.$store.commit('removeTags', id);
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除',
        duration:1000
      });
      return;
    });
  }

  remove(id: string) {
    this.open(id);
  }

  created() {
    EventBus.$on('submitTab', (data: string) => {
      this.type = data;
    });
    this.$store.commit('fetchTags');
  }
}
</script>

<style scoped lang="scss">
.labelTags2 {
  font-size: 16px;
  padding: 0 3px;
  height: 76vh;
  overflow-y: auto;

  li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 10px;

    div {
      display: flex;
      align-items: center;
    }

    .icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    .right {
      width: 16px;
      height: 16px;
      margin: 0
    }
  }
}
</style>