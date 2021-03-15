export function addTodo(store,payload){
    store.commit('add_todo',payload)
}

export function removeTodo(store, payload){
    store.commit('remove_todo',payload)
}

export function editTodo(store, payload){
    store.commit('edit_todo',payload)
}

export function addTodolist(store){
    store.commit('add_todolist')
}