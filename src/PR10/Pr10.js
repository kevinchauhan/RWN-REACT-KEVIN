import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Pr10_1 from './redux/Action'
import Pr10_2 from './redux/Pr10_2'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'

const Pr10 = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Pr10_1 />} />
                    <Route path='/2' element={<Pr10_2 />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}

export default Pr10