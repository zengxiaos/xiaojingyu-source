<template>
  <div class="layout">
    <TopNav :toggle-menu-button-visible="true" class="nav"/>
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">
              介绍
            </router-link>
          </li>
          <li>
            <router-link to="/doc/install">
              安装
            </router-link>
          </li>
          <li>
            <router-link to="/doc/get-start">
              使用
            </router-link>
          </li>

        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">
              Switch 组件
            </router-link>
          </li>
          <li>
            <router-link to="/doc/button">
              Button 组件
            </router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">
              Dialog 组件
            </router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">
              Tabs 组件
            </router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible');
    return {menuVisible}; //return的值要用{}包起来
  }
};

</script>
<style lang="scss" scoped>

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > .nav {
    flex-shrink: 0;
  }

  > .content {
    flex-grow: 1;
    padding-top: 70px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
  }

  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}

aside {
  background: #f5f5f5;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 70px;
  left: 0;
  height: 100%;
  z-index: 1;

  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }

  > ol {
    > li {
      >a{
        padding: 4px 16px;
        display: block;
      }
      .router-link-active{
        background: white;
        border-right: 2px solid #b3d4fc;
      }
    }
  }
}

main {
  overflow: auto;
}
</style>