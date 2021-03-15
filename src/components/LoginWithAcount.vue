<template>
  <label for="email">Email:</label>
  <input type="email" v-model="email" id="email" name="email" />
  <label for="password">password:</label>
  <input type="password" id="password" name="password" v-model="password" />

  <button v-on:click="loginWithAcount()">login</button>
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
        this.login({email:this.email,password:this.password});
    },

  },
};
</script>