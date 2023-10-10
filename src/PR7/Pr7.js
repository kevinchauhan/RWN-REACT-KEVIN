import React, { useState } from 'react'
import Form from './components/Form'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import StudentDetails from './pages/StudentDetails'

const Pr7 = () => {
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        if (localData) {
            return localData
        }
        return []
    })

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Form data={data} setData={setData} />} />
                    <Route path='/student/:id' element={<StudentDetails data={data} />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Pr7