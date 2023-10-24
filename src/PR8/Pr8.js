import React from 'react'
import StudentDetails from './pages/StudentDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Edit from './pages/Edit'
import Add from './pages/Add'

const Pr8 = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<StudentDetails />} />
                <Route path='/edit/:id' element={<Edit />} />
                <Route path='/add' element={<Add />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pr8