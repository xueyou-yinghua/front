<script lang="ts" setup>

import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {skStore} from "../../setup/lib/store";

const {isWidth} = skStore();
const route = useRoute();
const name = ref('')
name.value = route.meta.name;

watch(()=>route.path,(value)=>{
  if(value==='/lr/login'|| value==='/lr/register')
    name.value = route.meta.name;
})
</script>

<template>
  <div class="sk-lr-index">
    <header class="sk-lr-header">
      <div class="sk-home-img sk-lr-img">
        <router-link to="/">
          <img src="../../../public/img/element-plus-logo.svg" alt="">
        </router-link>
      </div>
      <h1 v-if="isWidth">{{name}}中心</h1>
    </header>
    <router-view class="sk-lr-container sk-main-width"/>
  </div>
</template>
