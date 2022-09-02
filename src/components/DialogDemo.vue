<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">切换</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="false" :ok="f1"
  :camcel="f2">
    <template v-slot:title>标题</template>
    <template v-slot:content>内容</template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue';
import {ref} from 'vue'
export default {
  components:{
    Button,
    Dialog
},
  setup(){
    const x=ref(false)
    const toggle=()=>{
      x.value=!x.value
    }
    const f1=()=>{
      return false
    }
    const f2=()=>{}
    return{x,toggle,f1,f2}
  }

}
</script>