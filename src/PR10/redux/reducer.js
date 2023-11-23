
const initial = {
    data: [],
    todo: []
}

const reducer = (state = initial, action) => {
    if (action.type === 'data') {
        return { ...state, data: action.payload }
    }
    if (action.type === 'add') {
        return { ...state, todo: [...state.todo, { data: action.payload }] }
    }
    if (action.type === 'update') {
        const oldTodo = [...state.todo]
        oldTodo[action.payload.editId].data = action.payload.input
        return { ...state, todo: oldTodo }
    }
    if (action.type === 'delete') {
        const oldTodo = [...state.todo]
        oldTodo.splice(action.payload, 1)
        return { ...state, todo: oldTodo }
    }
    return state
}

export default reducer