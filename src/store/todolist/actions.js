import axios from 'axios';

//headers: { Authorization: `Bearer ${token}` }
export function addTodo(store, payload){
  axios
  .patch("http://138.68.74.39/api/todo/1",payload,{headers:{Token: store.getToken()}})
  .then(function () {
    // handle success
    store.commit("add_todo", payload);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}
//l'api ne fait pas de sens
export function removeTodo(store, payload){
    store.commit('remove_todo',payload)
}

export function editTodo(store, payload){
  axios
  .patch("http://138.68.74.39/api/todo/1", payload,{headers:{Token: store.getToken()}})
  .then(function (response) {
    // handle success
    console.log(response);
    store.commit("edit_todo", payload);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
}

// du coup token pour id?
export function fetchAllTodos(store) {
    axios
      .get("http://138.68.74.39/api/todolists",{headers:{Token: store.getToken()}})
      .then(function (response) {
        // handle success
        //console.log(response);
        store.commit("load", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  /*
  
  export function fetchTodos(store, id) {
    axios
      .get("http://138.68.74.39/api/todos/"+ id,{headers:{Token: store.getToken()}})
      .then(function (response) {
        // handle success
        //console.log(response);
        store.commit("setTodo", response.data);
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

export function completeTodo(store, payload){
    store.commit('complete_Todo',payload)
}

export function addTodolist(store){
    store.commit('add_todolist')
}

