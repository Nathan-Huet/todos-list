<template>
  <div class="login">
    <p>Login</p>
  <login-with-acount></login-with-acount>
  <br>
  <create-account></create-account>
  </div>
</template>

<script>
import LoginWithAcount from '../components/LoginWithAcount.vue';
import CreateAccount from '../components/CreateAccount.vue';
export default {
  components: { LoginWithAcount, CreateAccount },
  name: "Login",
};
</script>

<style scoped>
.login{
  display:grid;
  justify-content:center;
}
p{
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size:150%;
}
</style>