<template>
  <div>
  <div class="topnavAndBanner">
    <TopNav/>
    <div class="banner">
      <h1>Z-UI</h1>
      <h2>一个自用的UI 框架</h2>
      <p class="actions">
        <a href="//">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
    <div class="features">
    <svg class="icon" >
      <use xlink:href="#icon-Vue"></use>
    </svg>
    <svg class="icon" >
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon" >
      <use xlink:href="#icon-light"></use>
    </svg>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>
<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 4px;
$color:#28d1c9;
.topnavAndBanner {
  background: radial-gradient(circle, rgba(183, 233, 230, 1) 0%, rgba(188, 251, 247, 1) 100%);
}
.features{
  > svg{
    height: 64px;
    width: 64px;
  }
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      border-radius: $border-radius;
      padding: 8px 24px;
      //&:hover{
      //  text-decoration: none;
      //}
    }
  }
}
</style>