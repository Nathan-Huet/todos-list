//avec Axios : on peut ajouter des interceptor qui vont dynamiquement modifier une requête
//dans cet interceptor, on ajoute le token sous la forme d'un header : Authorization: Bearer $token

import axios from 'axios';

export function register(store, payload){
    axios
    .post("http://138.68.74.39/api/register?name="+payload.name+"&email="+payload.email+"&password="+payload.password)
    .then(function (response) {
      // handle success
      console.log(response);
      store.commit("register", response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

export function login(store, payload){
    axios
    .post("http://138.68.74.39/api/login?email="+payload.email+"&password="+payload.password)
    .then(function (response) {
      // handle success
      //console.log(response);
      store.commit("login", response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }


//pas dans action apparement
/*
  export function get_user_token(store){
    axios
    .get("http://138.68.74.39/api/user")
    .then(function (response) {
      // handle success
      console.log(response);
      commit("token", response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  */