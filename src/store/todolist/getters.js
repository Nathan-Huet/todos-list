export function myGetter(state) {
    return state.todos.length;
}

export function todos(state) {
    return state.todos;
}

export const getTodo = (state) => (todoid) => {
    return state.todos.find((todo) => todo.id === todoid);
}