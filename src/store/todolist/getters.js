export function todolists(state) {
    return state.todolists;
}

export const getTodo = (state) => (todolistid,todoid) => {
    var todolist = state.todolists.find((todolist) => todolist.id === todolistid);
    var todo = todolist.todos.find((todo) => todo.id === todoid);
    return todo;
}

export const getTodolist = (state) => (todolistid) => {
    return state.todolists.find((todolist) => todolist.id === todolistid);
}