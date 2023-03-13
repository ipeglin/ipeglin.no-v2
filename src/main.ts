import { createApp } from 'vue';
import { createPinia } from 'pinia';
import SvgIcon from 'vue3-icon';
import VueAgile from 'vue-agile';

import App from './App.vue';
import router from './router';

import '@/assets/styles/main.scss';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAgile);
app.component('svg-icon', SvgIcon);

app.mount('#app');
