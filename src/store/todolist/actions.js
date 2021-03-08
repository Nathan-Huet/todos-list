export function addTodo(store,name){
    store.commit('add_todo',name)
}

export function removeTodo(store, todo){
    store.commit('remove_todo',todo)
}

export function editTodo(store, payload){
    store.commit('edit_todo',payload)
}