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
        completed : 0
    })
}

//stackOverflow
export function remove_todo(state,id,todolist_id){
    var todolist = state.todolists.find((todolist) => todolist.id === todolist_id);
    var i = todolist.todos.map(item => item.id).indexOf(id);
    todolist.todos.splice(i, 1);
}

export function edit_todo(state,payload,todo_id){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.find((todo) => todo.id === todo_id).name = payload.name;
}

export function complete_Todo(state,payload,todo_id){
    var todolist = state.todolists.find((todolist) => todolist.id === payload.todolist_id);
    todolist.todos.find((todo) => todo.id === todo_id).completed = payload.completed;
}

export function add_todolist(state,response_data){
    state.todolists.push({
        name: response_data.name,
        id : response_data.id,
        todos : [],
    })
}
