import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import {h} from 'vue';
import Markdown from './components/Markdown.vue';

const history = createWebHashHistory();
const md=path=>h(Markdown, {path,key:path})
export const router = createRouter({
    history: history,
    routes: [
        {path: '/', component: Home},
        {path: '/doc', component: Doc, children: [
                {path: '', redirect:'/doc/intro'},
                {path: 'get-start', component:md('../markdown/getStart.md')},
                {path: 'install', component: md('../markdown/install.md')},
                {path: 'intro', component: md('../markdown/intro.md')},
                {path: 'switch', component: SwitchDemo},
                {path: 'button', component: ButtonDemo},
                {path: 'dialog', component: DialogDemo},
                {path: 'tabs', component: TabsDemo}
            ]
        }
    ]
});
