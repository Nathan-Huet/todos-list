<template>
  <label for="email">Email:</label>
  <input type="email" v-model="email" id="email" name="email" />
  <label for="password">Mot de passe:</label>
  <input type="password" id="password" name="password" v-model="password" />

  <button v-on:click="loginWithAcount()">Login</button>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  
  methods: {
    ...mapActions("account", { login: "login" }),
    
    loginWithAcount() {
        this.login({email:this.email,password:this.password}) ;

    },

  },
};
</script>
<style scoped>
label{
  margin:15px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-size:120%;
}

input{
  height:120%;
}

button{
  margin:30px 5px;
}
</style>