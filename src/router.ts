import { createRouter, createWebHistory } from 'vue-router';
import AuthForm from './components/AuthForm.vue';
import NotFound from './components/NotFound.vue';
import MainPage from './components/MainPage.vue';
import type { RouteRecordRaw } from 'vue-router';
// import NewGame from './components/NewGame.vue';

const routes: RouteRecordRaw[] = [
    { path: '/', component: AuthForm },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/games', component: MainPage },
    // { path: '/games/new', component: NewGame },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
