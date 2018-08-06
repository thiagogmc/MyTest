<template>
    <div class="form-div">
        <h2>Login</h2>
        <transition name="error-transition">
            <p class="error" v-show="visible"> {{ msg }} </p>
        </transition>
        <form @submit.prevent="loginUser()">
            <input type="text" name="email" placeholder="Digite seu nome de usuario" v-model="user.email">
            <input type="password" name="password" placeholder="Digite sua senha" v-model="user.password">
            <button type="submit">Login</button>
        </form>
        <router-link to="/signup">Ainda não possui uma conta? Cadastre-se!</router-link>
    </div>
</template>

<script>
    import User from '../../domain/User';

    export default {
        data() {
            return {
                user : new User(),
                msg : 'Erro',
                visible : false
            }
        },

        methods: {
            loginUser() {
                this.$http
                    .post('login', this.user)
                    .then(
                    res => {
                        let body = res.body;
                        localStorage.token = body.access_token;
                        this.$router.push('profile');
                    },
                    err => {
                        let errorBody = err.body;
                        if (errorBody.message == 'Unauthorized') {
                            this.visible = true;
                            this.msg = 'Wrong email or password.';
                        }
                    })


            }
        }
    }
</script>
<style>
    .form-div {
        width: 50%;
        margin: auto;
    }
    form input {
        width: 50%;
        padding: 7px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;
        border-radius: 5px;
        border: 1px solid #35ac69;
    }
    form button {
        background: #35ac69;
        border: none;
        border-radius: 5px;
        width: 50%;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 10px;
        color: white;
        font-size: 1em;
    }

    .error {
        padding: 15px;
        background-color: rgba(255, 0, 0, 0.5);
        border: 1px solid red;
        border-radius: 5px;
        color: white;
    }

    .error-transition-enter, .error-transition-leave-active {
        opacity: 0;
    }

    .error-transition-enter-active, .error-transition-leave-active {
        transition: opacity .2s;
    }
</style>
