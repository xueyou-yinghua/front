<script lang="ts" setup>
import {computed, reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";

const router = useRouter();
const route = useRoute();
const store = useStore();

const param = reactive({
  route:[
    {path:'/',name:'首页',key:0},
    {path:'/class',name:'课程中心',key:1},
  ],
});
//element类  获取数据的
const refs = ref<HTMLElement[]>();
//给下划线数据用的
const posit = reactive({
  left:0,
  width:0,
})

const getData = ()=>{
  if(refs.value === undefined){
    return;
  }
  posit.left = refs.value[0].offsetLeft;
  posit.width = refs.value[0].clientWidth
}

//这算是下划线的初始化
watch([refs,()=>store.state.width,route.path],() => {
  getData();
});

const getPath = (path:string)=>{
  router.push(path);
}

const underline = computed(()=> {
  return `width:${posit.width}px;left:${posit.left}px`;
})
</script>

<template>
  <header class="sk-home-header">
    <div class="sk-home-head sk-main-width">
      <div class="sk-home-img">
        <router-link to="/">
          <img src="public/img/element-plus-logo.svg" alt="">
        </router-link>
      </div>

      <div class="sk-home-nav">
        <ul>
          <li v-for="item in param.route" class="sk-main-li sk-main-l" ref="refs">
            <el-link @click="getPath(item.path)" type="primary" :underline="false">
              {{item.name}}
            </el-link>
          </li>
        </ul>
      </div>
      <div class="sk-home-underline" :style="underline"/>
    </div>
  </header>
</template>
