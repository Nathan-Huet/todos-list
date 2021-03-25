export function load_todolists(state, data) {
    //console.log(data);

    state.todolists = data
}
export function load_todos(state, data) {
    state.todos = data;
    
}
export function add_todo(state, response_data){
    //console.log(response_data);
    //var todolist = state.todolists.find((todolist) => todolist.id === response_data.todolist_id);
    state.todos.push({
        response_data
    })
}

//stackOverflow id todolist_id
export function remove_todo(state,payload){
    //var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    var i = state.todos.map(item => item.id).indexOf(payload.id);
    state.todos.splice(i, 1);
}

export function remove_todolist(state,id){
    var i = state.todolists.map(item => item.id).indexOf(id);
    state.todolists.splice(i, 1);
}


export function edit_todo(state,payload){
    //var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    state.todos.find((todo) => todo.id === payload.todo_id).name = payload.name;
}

export function complete_Todo(state,payload){
    //var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    state.todos.find((todo) => todo.id === payload.id).completed = !!parseInt(payload.completed);
}

export function add_todolist(state,response_data){
    state.todolists.push({
        response_data
    })
}
