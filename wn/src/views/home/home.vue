<script lang="ts" setup>
import Homepage from "./homepage.vue";
import {isBoolJudge} from "../../setup/lib/judge";
import HomeHead from "./homeHead.vue";
</script>

<template>
  <HomeHead/>
  <el-divider />
  <homepage v-if="isBoolJudge($route.path === '/'||$route.path === '/home')"/>
  <router-view v-else/>
</template>
