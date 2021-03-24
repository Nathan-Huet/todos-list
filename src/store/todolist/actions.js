import axios from "axios";

export function createTodolist({ commit }, payload) {

  axios
    .post("http://138.68.74.39/api/todolist", payload)
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
  axios
    .post("http://138.68.74.39/api/todo", payload, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function(response) {
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
export function removeTodo({ commit, rootGetters }, payload) {
    let token = rootGetters["account/getToken"];
  
    axios
      .delete("http://138.68.74.39/api/todo/"+payload.id, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function() {
        // handle success
        commit("remove_todo", payload);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
  }
  export function removeTodolist({ commit, rootGetters }, id) {
    let token = rootGetters["account/getToken"];
  
    axios
      .delete("http://138.68.74.39/api/todolist/"+id, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(function() {
        // handle success
        commit("remove_todolist", id);
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


export function editTodo({ commit, rootGetters }, payload) {
  let token = rootGetters["account/getToken"];

  axios
    .patch("http://138.68.74.39/api/todo/"+payload.todo_id, payload, {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function() {
      // handle success
      commit("edit_todo", payload);
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

  axios
    .get("http://138.68.74.39/api/todolists", {
      headers: { Authorization: "Bearer " + token },
    })
    .then(function(response) {
      // handle success

      commit("load_todolists", response.data);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
}

  
  export function fetchTodos(store, id) {
    axios
      .get("http://138.68.74.39/api/todos/"+ id)
      .then(function (response) {
        // handle success
        store.commit("load_todos", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }




export function completeTodo({ commit, rootGetters }, payload) {
  let token = rootGetters["account/getToken"];
  axios
    .post("http://138.68.74.39/api/completeTodo/"+payload.id, payload, {
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
