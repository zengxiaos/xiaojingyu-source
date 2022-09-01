<template>
<div>导航栏</div>|<router-link to="/">点我</router-link>
|<router-link to="/xxx">再点我</router-link>
  <hr>
  <router-view/>
</template>

<script>

export default {
  name: 'App',

}
</script>
