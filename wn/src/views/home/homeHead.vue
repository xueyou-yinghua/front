<script lang="ts" setup>
import {computed, reactive, ref, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useStore} from "vuex";
//@ts-ignore
import {Fold} from '@element-plus/icons-vue'


const router = useRouter();
const route = useRoute();
const store = useStore();

type p = {
  route: {path: string, name: string, key: number}[]
}

const param = reactive<p>({
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
  index:0,
})
//下划线
const getData = (value:number=0)=>{
  if(refs.value === undefined||refs.value?.length===0){
    return;
  }
  posit.left = refs.value[value].offsetLeft;
  posit.width = refs.value[value].clientWidth
}

//这算是下划线的初始化
watch([refs,()=>store.state.width,()=>route.path],() => {
  if(store.state.width<800)return;
  let obj = param.route.filter(item=>item.path===route.path);
  if(obj.length!==0){
    posit.index = obj[0].key;
    getData(posit.index);
  }
})
//跳转路由
const getPath = (path:string)=>{
  router.push(path);
}
//下划线样式
const underline = computed(()=> {
  return `width:${posit.width}px;left:${posit.left}px`;
})

//抽屉
const drawer = ref(false);

function cancelClick() {
  drawer.value = false
}

</script>

<template>
  <header class="sk-home-header">
    <div class="sk-home-head sk-main-width">
      <div class="sk-home-img">
        <router-link to="/">
          <img src="public/img/element-plus-logo.svg" alt="">
        </router-link>
      </div>

      <div class="sk-home-nav" v-if="store.state.width>=800">
        <ul>
          <li v-for="item in param.route" class="sk-main-li sk-main-l" ref="refs">
            <el-link @click="getPath(item.path)" type="primary" :underline="false">
              {{item.name}}
            </el-link>
          </li>
          <li class="sk-home-lr sk-main-li sk-main-l">
            <el-link  @click="getPath('/lr/login')" :underline="false">
              登录
            </el-link>
            <el-divider direction="vertical" />
            <el-link  @click="getPath('/lr/register')" :underline="false">
              注册
            </el-link>
          </li>
        </ul>
      </div>
      <div class="sk-home-underline" :style="underline" v-if="store.state.width>=800"/>

      <div class="sk-home-nav-small" v-else>
        <el-button :icon="Fold" @click="drawer = true"/>
      </div>
    </div>
  </header>

  <el-drawer v-model="drawer" direction="ltr" size="75%">
    <template #header>
    </template>
    <template #default>
      <el-space direction="vertical">
        <el-card v-for="i in 2" :key="i" class="box-card" style="width: 250px">
          <div v-for="o in 4" :key="o" class="text item">
            {{ 'List item ' + o }}
          </div>
        </el-card>
      </el-space>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
      </div>
    </template>
  </el-drawer>
</template>
