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

export function edit_todo(state,todo,edit_todo='TestMut'){
    let i = state.todos.map(item => item.id).indexOf(todo.id);
    console.log('mutation')
    console.log(edit_todo);
    state.todos[i].name = edit_todo;
}