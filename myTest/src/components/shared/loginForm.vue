<template>
    <div class="form-div">
        <h2>Login</h2>
        <form action="">
            <input type="text" name="username" placeholder="Digite seu nome de usuario">
            <input type="password" name="password" placeholder="Digite sua senha">
            <button type="submit">Login</button>
        </form>
        <router-link to="/signup">Ainda não possui uma conta? Cadastre-se!</router-link>
    </div>
</template>

<script>
    export default {

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
</style>
