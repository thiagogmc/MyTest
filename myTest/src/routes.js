import signUp from './components/signUp/signUp.vue';
import login from './components/login/loginForm.vue';
import profile from './components/profile/profile.vue';
export const routes = [
    {
        path : '',
        component : login
    },
    {
        path: '/signup',
        component : signUp
    },
    {
        path: '/profile',
        component : profile
    }
];