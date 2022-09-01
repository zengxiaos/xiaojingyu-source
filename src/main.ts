import {createApp} from 'vue';
import App from './App.vue';
import './index.css';
import {createWebHashHistory, createRouter} from 'vue-router';
import z from './components/z.vue'
import z2 from './components/z2.vue'
const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: z2},
        {path: '/xxx', component: z}
    ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');
