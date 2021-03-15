//avec Axios : on peut ajouter des interceptor qui vont dynamiquement modifier une requête
//dans cet interceptor, on ajoute le token sous la forme d'un header : Authorization: Bearer $token



export function signup(store, payload){
    axios
    .post("http://138.68.74.39/api/register?name="+payload.name+"&email="+payload.email+"&password="+payload.password)
    .then(function (response) {
      // handle success
      console.log(response);
      commit("signup", payload);
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
      console.log(response);
      commit("login", payload);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }

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