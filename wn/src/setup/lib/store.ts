import {useStore} from "vuex";
import {computed} from "vue";

export function skStore() {
	const store= useStore();

	const isWidth = computed(()=>store.state.width>=800);

	return {
		isWidth,

	}
}
