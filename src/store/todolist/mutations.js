export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function add_todo(state, name){
    state.todos.push({
        id : state.todos.length +1,
        name : name,
        completed : false
    })
}

//stackOverflow
export function remove_todo(state,todo){
    let i = state.todos.map(item => item.id).indexOf(todo.id);
    state.todos.splice(i, 1);
}

export function edit_todo(state,payload){
    let i = state.todos.map(item => item.id).indexOf(payload.todo.id);
    state.todos[i].name = payload.editingTodo;
}