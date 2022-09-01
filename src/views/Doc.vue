<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside v-if="menuVisible">
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
      <main>主内容</main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup(){
    const menuVisible=inject<Ref<Boolean>>('xxx')
    return {menuVisible} //returnd的值要用{}包起来
  }
}

</script>

<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 53px;
  left: 0;

> h2 {
  margin-bottom: 4px;
}

> ol {

> li {
  padding: 4px 0;
}

}
}</style>