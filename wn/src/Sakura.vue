<script lang="ts" setup>
//获取长宽高
import {useStore} from "vuex";
import {onMounted,onBeforeUnmount} from "vue";

const store = useStore();

const update = () =>{
  const [width, height] = [document.documentElement.clientWidth,document.documentElement.clientHeight];
  store.commit('update',{key:'width',value:width});
  store.commit('update',{key:'height',value:height});
}

onMounted(()=>{
  update();
  window.addEventListener('resize', update);
});

onBeforeUnmount(()=>{
  window.removeEventListener('resize', update);
})

</script>

<template>
  <el-scrollbar>
    <router-view/>
  </el-scrollbar>
</template>
