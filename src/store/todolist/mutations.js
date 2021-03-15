export function load(state, data) {
    console.log(data);
    state.properties = data
}

export function add_todo(state, payload){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.push({
        id : todolist.todos.length +1,
        name : payload.name,
        completed : false
    })
}

//stackOverflow
export function remove_todo(state,payload){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    var i = todolist.todos.map(item => item.id).indexOf(payload.id);
    todolist.todos.splice(i, 1);
}

export function edit_todo(state,payload){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.find((todo) => todo.id === payload.todo.id).name = payload.editingTodo;
}