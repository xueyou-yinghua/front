import {RouteRecordRaw, useRouter} from "vue-router";
export function wRoutes() {
	const router = useRouter();
	const routes = router.getRoutes();
	const myRoutes:RouteRecordRaw[] = router.getRoutes();
	console.log(routes);
	for(let i = 0;i<routes.length;i++) {
		if (routes[i].meta.childrenNamed) {
			(routes[i].meta.childrenNamed as string[]).forEach(item => {
				for (let j = 0; j < myRoutes.length; j++) {
					if (myRoutes[j].name === item)
						myRoutes.splice(j, 1);
				}
			})
		}
		//去掉别名
		if (routes[i].aliasOf?.name) {
			let name = routes[i].aliasOf?.name;
			for (let j = 0; j < myRoutes.length; j++) {
				if (myRoutes[j].name === name)
					myRoutes.splice(j, 1);
			}
		}
	}
	return myRoutes;
}