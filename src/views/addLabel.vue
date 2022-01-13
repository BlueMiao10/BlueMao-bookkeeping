<template>
  <Layout>
    <div class="EditHead">
      <router-link to="/labels">
        <Icon name="left"/>
      </router-link>
      <span>新建标签</span>
    </div>
    <div class="notes">
      <Icon name="addItem"/>
      <input type="text" placeholder="请输入标签名">
    </div>
    <div class="current">
      <div v-for="tag in tags" :key="tag" @click="toggle(tag)"
           :class="[{selected:selectedTags.indexOf(tag)>=0},'currentTag']">
        <Icon :name="tag"/>
      </div>
    </div>
    <div class="sure">
      <button @click="sure">确定</button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import store from '@/store';
import tagIncomeList from '@/constants/tagIncomeList';
import tagPayList from '@/constants/tagPayList';

@Component
export default class EditLabel extends Vue {
  tags = store.state.labels;
  selected: string[] = [];
  tagList = store.state.tagList;

  created() {
    this.$store.commit('fetchTags');
  }

  get selectedTags() {
    return this.$store.state.selectedTags;
  }

  toggle(tag: string) {
    this.$store.commit('selectLabels', tag);
  }

  sure() {
    const name = document.getElementsByTagName('input')[0].value;
    const tagIncomeName = tagIncomeList.map(item => item.name);
    const tagPayName = tagPayList.map(item => item.name);
    const tagNewName1 = this.tagList[0].map(item => item.name);
    const tagNewName2 = this.tagList[1].map(item => item.name);
    if (name) {
      if (tagIncomeName.indexOf(name) >= 0 || tagPayName.indexOf(name) >= 0 || tagNewName1.indexOf(name) >= 0 || tagNewName2.indexOf(name) >= 0) {
        this.$message({
          message: '标签名重复',
          type: 'warning',
          duration: 1000
        });
        return;
      }
      if (name.length > 5) {
        this.$message({
          message: '最多输入五个字符哦',
          type: 'warning',
          duration: 1000
        });
        return;
      }
      if (this.selectedTags.length > 0) {
        this.$store.commit('createTags', {name: name, icon: this.selectedTags[0]});
      } else {
        this.$message({
          message: '请选择图标',
          type: 'warning',
          duration: 1000
        });
        return;
      }
    } else {
      this.$message({
        message: '请填写标签',
        type: 'warning',
        duration: 1000
      });
      return;
    }
    this.$router.replace('/labels');
  }
}
</script>

<style scoped lang="scss">
.EditHead {
  text-align: center;
  position: relative;
  padding-top: 10px;

  .icon {
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translateY(-50%);
  }

  span {
    display: block;
    padding-bottom: 6px;
  }
}

.notes {
  display: flex;
  font-size: 14px;
  background-color: #f5f5f5;
  align-items: center;

  input {
    padding: 16px 0;
    background-color: transparent;
    border: none;
    outline: 0;
    flex-grow: 1;

    &::placeholder {
      color: #000;
      font-size: 16px;
    }
  }

  .icon {
    width: 36px;
    height: 36px;
    margin-left: 10px;
    margin-right: 5px;
  }
}

.current {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
  flex-wrap: wrap;
  text-align: center;

  .currentTag {
    width: 33.333%;
    margin-bottom: 15px;

    &.selected {
      .icon {
        border-radius: 50%;
        border: 1px solid red;
      }
    }
  }

  .icon {
    width: 40px;
    height: 40px;
  }
}

.sure {
  text-align: center;
  margin-top: 10px;

  button {
    padding: 5px 100px;
    border-radius: 10px;
    border: 1px solid #e6e6e6;
    background-color: #B2D5F5;

    &:active {
      background-color: #92c4f6;
    }
  }
}
</style>