import signUp from './components/signUp/signUp.vue';
import login from './components/shared/loginForm.vue';
export const routes = [
    {
        path : '',
        component : login
    },
    {
        path: '/signup',
        component : signUp
    }
];