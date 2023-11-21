import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Action from './redux/Action'

const Pr10 = () => {
    return (
        <Provider store={store}>
            <Action />
        </Provider>
    )
}

export default Pr10