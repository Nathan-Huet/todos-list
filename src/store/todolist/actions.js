export function addTodo(store,name){
    store.commit('add_todo',name)
}

export function removeTodo(store, todo){
    store.commit('remove_todo',todo)
}

export function editTodo(store, todo, edit_todo){
    console.log('action')
    console.log(todo)
    console.log(edit_todo)
    store.commit('edit_todo',todo, edit_todo)
}