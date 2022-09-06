<template>
  <div>
    <h1>Switch 组件示例 </h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './Switch1Demo.vue'
import Switch2Demo from './Switch2Demo.vue'
import Demo from './Demo.vue'
import {
  ref
} from 'vue'
export default {
  components: {
  Demo
  },
  setup() {
    const bool = ref(false)
    return {
      Switch1Demo,
      Switch2Demo,
    }
  }
}
</script>
