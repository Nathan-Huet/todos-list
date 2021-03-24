export function load(state, data) {
    //console.log(data);
    state.properties = data
}

export function add_todo(state, response_data){
    //console.log(response_data);
    var todolist = state.todolists.find((todolist) => todolist.id === response_data.todolist_id);
    todolist.todos.push({
        id : response_data.id,
        name : response_data.name,
        completed : response_data.completed
    })
}

//stackOverflow id todolist_id
export function remove_todo(state,payload){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    var i = todolist.todos.map(item => item.id).indexOf(payload.id);
    todolist.todos.splice(i, 1);
}

export function remove_todolist(state,id){
    var i = state.todolists.map(item => item.id).indexOf(id);
    state.todolists.splice(i, 1);
}


export function edit_todo(state,payload){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.find((todo) => todo.id === payload.todo_id).name = payload.name;
}

export function complete_Todo(state,payload){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.find((todo) => todo.id === payload.id).completed = !!payload.completed;
}

export function add_todolist(state,response_data){
    state.todolists.push({
        name: response_data.name,
        id : response_data.id,
        todos : [],
    })
}
