<template>
    <div>
        <!--<img src="https://gravatar.com/avatar/e8cfcc6cc29fdf33a961651f5b98cec8?s=200" alt="batman">-->
        <v-gravatar :email="this.email" />
        <div>
            <h3>Nome: </h3>
            <p>{{ user.name }}</p>
            <h3>UserName</h3>
            <p>{{ user.username }}</p>
            <h3>E-mail</h3>
            <p>{{ user.email }}</p>
            <h3>Ativo</h3>
            <p>{{ active }}</p>
        </div>
        <a v-on:click="logout($event)" href="">Sair</a>
    </div>
</template>
<script>
    import User from '../../domain/User';

    export default {
        data() {
            return {
                user : new User(),
                active : 'Não',
                email : ''
            }
        },

        created () {
            let token = 'Bearer ' + localStorage.getItem('token');
            if (!token) {
                this.$router.push('/');
            }
            console.log(token);
            this.$http
                .get('user')
                .then(
                    res => {
                        let body = res.body;
                        this.user.name = body.name;
                        this.user.username = body.username;
                        this.user.email = body.email;
                        this.email = body.email;
                        this.user.active = body.active;
                        this.active = this.user.accountStatus();
                    },
                    err => {
                        localStorage.clear();
                        this.$router.push('/');
                    });
        },

        methods: {
            logout(event) {
                event.preventDefault();
                localStorage.clear();
                this.$router.push('/');
            }

        }
    }
</script>
<style scoped>

    div {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    }

    h3 {
        text-align: left;
        margin-bottom: 3px;
    }

    p {
        text-align: left;
        margin-top: 0px;
    }

    img {
        border-radius: 50%;
        border: 5px solid #42b983;
        width: 13%;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    a {
        font-size: 1.6em;
    }
</style>

