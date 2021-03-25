export function todolists(state) {
    return state.todolists;
}
export function getTodos(state) {
    return state.todos;
}
export function getNumberOfTodoLists(state) {
    return state.todolists.length;
}

export const getTodo = (state) => (todolistid,todoid) => {
   // var todolist = state.todolists.find((todolist) => todolist.id === todolistid);
    var todo = state.todos.find((todo) => todo.id === todoid);
    return todo;
}

export const getTodolist = (state) => (todolistid) => {
    return state.todolists.find((todolist) => todolist.id === todolistid);
}