<script lang="ts" setup>
import {ref} from "vue";
import Login from "./login.vue";
import Register from "../register/register.vue";

const value = ref(0);

const update = ()=>value.value = value.value===0?1:0;
</script>

<template>
  <el-button @click="update">
    点击我
  </el-button>
  <login v-if="value===1"/>
  <register v-else/>
</template>
