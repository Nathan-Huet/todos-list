export function getToken(state) {
    return state.token;
}

export function isLoggedIn(state){
    console.log(state.token)
    return (state.token !== "null")
}