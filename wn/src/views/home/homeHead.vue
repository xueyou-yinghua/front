<script lang="ts" setup>
import {reactive} from "vue";

const param = reactive({
  index:1,
});


const handleSelect = ()=>{

}
</script>

<template>
  <el-menu
      :default-active="param.index"
      class="el-menu-demo"
      mode = 'horizontal'
      @select="handleSelect"
  >

  </el-menu>
</template>
