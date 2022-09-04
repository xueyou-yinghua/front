export type wState = {
	//页面宽
	width:number
	//页面高
	height:number
	//导航页
	isNav:boolean
}

import 'vuex'
declare module 'vuex'{
	interface GetterTree<S,R> {
		mainNav:(state: S, getters: any, rootState: R, rootGetters: any)=>boolean
	}
	interface MutationTree<S> {
		update: (state: S,payload:{key:keyof wState,value:wState[keyof wState]})=>any
	}
}
