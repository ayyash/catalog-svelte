import { authGuard } from './utils/guard';

export default [
    { path: '/', component: 'index.svelte' },
    { path: '/posts', component: 'Posts/index.svelte', meta: { protected: true }, middleware: [authGuard] },
    { path: '/login', component: 'Login.svelte' }
];
