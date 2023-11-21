const userReducer = (state = { data: 'kevin' }, action) => {
    if (action.type === 'change') {
        state = action.payload
    }
    return state
}
export default userReducer