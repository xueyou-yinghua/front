import {createStore} from "vuex";
import {wState} from "./store.type";

const store = createStore<wState>(
	{
		state:{
			width:0,
			height:0,

			isNav:false,
		},
		mutations:{
			update:(state, payload) => {
				if(payload.key in state) {
					// @ts-ignore
					state[payload.key] = payload.value;
				}
			}
		}
		,
		getters:{
			mainNav:state => {
				return state.isNav;
			}
		}
	}
)

export default store;