import {RouteRecordRaw} from 'vue-router'

//首页
const home:RouteRecordRaw = {
	path: '/',
	alias: '/home',
  name: 'home',
	meta:{
		name:'首页',
	},
	component:()=>import('../views/home/home.vue'),
	children:[
		{
			name:'class',
			path:'class',
			meta:{
				name:'课程中心'
			},
			component:()=>import('../views/class/cIndex.vue'),
		}
	]
};
const lr:RouteRecordRaw = {
	path:'/lr',
	name:'lr',
	redirect:'/lr/login',
	meta:{
		name:'...加载中'
	},
	component:()=>import('../views/login/uIndex.vue'),
	children:[
		{
			path:'login',
			name:'login',
			meta:{
				name:'登录'
			},
			component:()=>import('../views/login/login.vue'),
		},
		{
			path:'register',
			name:'register',
			meta:{
				name:'注册'
			},
			component:()=>import('../views/register/register.vue'),
		},
	]
};
const notFound:RouteRecordRaw = {
	name:'NotFound',
	path:'/not-found',
	meta:{
		name:'错误'
	},
	component:()=>import('../views/NotFound/notFound.vue'),
};

const routes:RouteRecordRaw[] = [
	home,
	lr,
	notFound,
];


export default routes;