<template>
  <Demo :component="TabsDemo"/>
</template>


<script lang="ts">
import Demo from './Demo.vue'
import TabsDemo from './Tabs1Demo.vue'
export default {
  components:{Demo},
  setup(){
    return{TabsDemo}
  }

}
</script>