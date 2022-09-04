<script lang="ts" setup>
import Homepage from "./homepage.vue";
import {isBoolJudge} from "../../setup/lib/judge";
import HomeHead from "./homeHead.vue";
</script>

<template>
  <HomeHead/>
  <homepage v-if="isBoolJudge($route.path === '/'||$route.path === '/home')" class="sk-main-width sk-top-head"/>
  <router-view v-else class="sk-main-width sk-top-head"/>
</template>
