<template>
    <div class="form-div">
        <h2>Cadastre-se</h2>
        <transition name="error-transition">
            <div v-show="visible" class="error">
                <p v-for="msg of msgs"> {{ String(msg) }} </p>
            </div>
        </transition>
        <form @submit.prevent="registerUser()">
            <input type="text" name="name" placeholder="Digite seu nome completo" v-model="user.name">
            <input type="text" name="username" placeholder="Digite seu nome de usuario" v-model="user.username">
            <input type="email" name="email" placeholder="Digite seu email" v-model="user.email">
            <input type="password" name="password" placeholder="Digite sua senha" v-model="user.password">
            <button type="submit">Cadastrar</button>
        </form>
        <router-link to="/">Já possui uma conta? Efetue login!</router-link>
    </div>
</template>
<script>
    import User from '../../domain/User';

    export default {
        data() {
            return {
                user: new User(),
                msgs : [],
                visible : false
            }
        },

        methods: {
            registerUser() {
                console.log('clicou');
                this.$http
                    .post('signup', this.user)
                    .then(
                        res => {
                            let body = res.body;
                            localStorage.token = body.access_token;
                            this.$router.push('/');
                        },
                        err => {
                            let errorBody = err.body;
                            console.log(errorBody);
                            if (errorBody.errors) {
                                this.msgs = errorBody.errors;
                                this.visible = true;
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
</style>