<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo.png" />
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