<demo>一键打开Dialog</demo>
<template>
  <Button @click="showDialog">show</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {
    Button,
  },
  setup() {
    const showDialog = () => {
      openDialog({title:'标题',content:'你好',ok(){console.log('ok')},cancel(){
          console.log('cancel')
        }});
    };
    return { showDialog};
  }

};
</script>