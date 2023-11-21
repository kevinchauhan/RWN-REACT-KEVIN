import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserAction = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>hello {state.data}</h1>
            <button onClick={() => dispatch({ type: 'change', payload: { data: 'niva' } })}>click</button>
        </div>
    )
}

export default UserAction