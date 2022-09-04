import { createApp } from 'vue';
import Sakura from './Sakura.vue';
import router from './router'
import store from "./store";
import './layout/index.scss';

const app = createApp(Sakura);
app.use(router);
app.use(store);
app.mount('#sk');
