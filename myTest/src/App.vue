<template>
  <div id="app">
    <img src="./assets/logoMT.png">
    <transition name="main-content">
      <router-view>
      </router-view>
    </transition>
  </div>
</template>

<script>
import signUpForm from './components/signUp/signUp.vue';
import loginForm from './components/login/loginForm.vue';
export default {

  components: {
      'form-login' : loginForm,
      'sign-up-form' : signUpForm
  },
  name: 'app',
  data () {
    return {
      msg: 'Bem Vindo ao MyTest!'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

  .main-content-enter, .main-content-leave-active {
    opacity: 0;
  }

  .main-content-enter-active, .main-content-leave-active {
    transition: opacity .2s;
  }
</style>
