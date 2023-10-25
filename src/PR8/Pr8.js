import React, { useState } from 'react'
import StudentDetails from './pages/StudentDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit'
import Add from './pages/Add'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Header from './components/Header'

const Pr8 = () => {
    const [currUser, setCurrUser] = useState(() => {
        const curr = JSON.parse(localStorage.getItem('curr-user'))
        return curr || null
    })

    return (
        <BrowserRouter>
            <Header currUser={currUser} setCurrUser={setCurrUser} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login setCurrUser={setCurrUser} />} />
                <Route path='/signup' element={<Signup setCurrUser={setCurrUser} />} />
                <Route path='/studentdetails' element={<StudentDetails />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pr8