const signUp = () => System.import('./components/signUp/signUp.vue');
const login = () => System.import('./components/login/loginForm.vue');
const profile = () => System.import('./components/profile/profile.vue');

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