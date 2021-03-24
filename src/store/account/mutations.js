/*export function load(state, data) {
    console.log(data);
    state.properties = data
}
*/



export function register(state, token){
    state.token = token;
}


export function login(state, token){
    state.token = token;

}

export function logout(state){
    state.token = "null";

}