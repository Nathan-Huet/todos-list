//avec Axios : on peut ajouter des interceptor qui vont dynamiquement modifier une requête
//dans cet interceptor, on ajoute le token sous la forme d'un header : Authorization: Bearer $token

import axios from 'axios';
import router from '@/router/index';


export function register(store, payload){
  console.log(payload);

    axios
    .post("http://138.68.74.39/api/register",payload)
    .then(function (response) {
      // handle success
      store.commit("register", response.data.token);
      localStorage.setItem('token', response.data.token);
      router.push('/');

    })
    .catch(function (error) {
      // handle error
      console.log(error);
      localStorage.removeItem('token');

    })
    .then(function () {
      // always executed
    });
  }

export function login(store, payload){
    axios
    .post("http://138.68.74.39/api/login",payload)
    .then(function (response) {
      // handle success
      store.commit("login", response.data.token);
      localStorage.setItem('token', response.data.token);
      router.push('/');
    })
    .catch(function (error) {
      // handle error
      localStorage.removeItem('token');
      store.commit("logout");
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
export function logout({commit}){
    commit('logout');
    localStorage.removeItem('token');  
  
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