import axios from 'axios';
export function addTodo(store,payload){
    store.commit('add_todo',payload)
}

export function removeTodo(store, payload){
    store.commit('remove_todo',payload)
}

export function editTodo(store, payload){
  axios
  .patch("http://138.68.74.39/api/todo/1?name="+payload.name+"&completed="+payload.completed+"&todolist_id="+payload.id)
  .then(function (response) {
    // handle success
    console.log(response);
    commit("edit_todo", payload);
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
export function fetchAllTodos({ commit }) {
    axios
      .get("http://138.68.74.39/api/todolists")
      .then(function (response) {
        // handle success
        //console.log(response);
        commit("setTodo", response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }
  
  export function fetchTodos(id) {
    axios
      .get("http://138.68.74.39/api/todos/"+ id)
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


