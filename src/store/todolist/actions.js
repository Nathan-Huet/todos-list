import axios from "axios";

export function createTodolist({ commit, rootGetters }, payload) {
  let token = rootGetters["account/getToken"];

  axios
    .post("http://138.68.74.39/api/todolist", payload, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function(response) {
      // handle success
      commit("add_todolist",response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

//http://138.68.74.39/api/todo?name=todo 1&completed=0&todolist_id=111

export function addTodo({ commit, rootGetters }, payload) {
  let token = rootGetters["account/getToken"];
  console.log(payload);
  axios
    .post("http://138.68.74.39/api/todo", payload, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function(response) {
      console.log(response);
      // handle success
      commit("add_todo", response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}
//http://138.68.74.39/api/todo/1

export function removeTodo({ commit, rootGetters }, id, todolist_id) {
    let token = rootGetters["account/getToken"];
  
    axios
      .delete("http://138.68.74.39/api/todo/"+id, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function() {
        // handle success
        commit("remove_Todo", id,todolist_id);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }
  export function removeTodolist({ commit, rootGetters }, payload) {
    let token = rootGetters["account/getToken"];
  
    axios
      .delete("http://138.68.74.39/api/todolist", payload, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function() {
        // handle success
        commit("removeTodolist", payload);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }

//name completed todolist_id


export function editTodo({ commit, rootGetters }, payload, todo_id) {
  let token = rootGetters["account/getToken"];

  axios
    .patch("http://138.68.74.39/api/todo/"+todo_id, payload, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function(response) {
      // handle success
      console.log(response);
      commit("edit_todo", payload, todo_id);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

export function fetchAllTodos({ commit, rootGetters }) {
  let token = rootGetters["account/getToken"];
  console.log(token);

  axios
    .get("http://138.68.74.39/api/todolists", {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function(response) {
      // handle success
      //console.log(response);
      commit("load", response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
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


export function completeTodo({ commit, rootGetters }, payload) {
  let token = rootGetters["account/getToken"];
  console.log(payload);
  axios
    .post("http://138.68.74.39/api/todolist", payload, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function() {
      // handle success
      commit("complete_Todo",payload);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}


// http://138.68.74.39/api/user get user pas de param (mais token)
