import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Cart from './pages/Cart'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AuthContext from './authContext'
import ProtectedRoute from './routes/ProtectedRoute'
import GuestRoute from './routes/GuestRoute'
import axios from 'axios'

const Pr11 = () => {
    const [authenticate, setIsAuthenticate] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:5500/current-user')
            .then((res) => {
                if (Object.keys(res.data).length < 1) {
                    setIsAuthenticate(null)
                } else {
                    setIsAuthenticate(res.data)
                }
            })
    }, [])
    return (
        <>
            <BrowserRouter>
                <AuthContext.Provider value={{ authenticate, setIsAuthenticate }}>
                    <Header />
                    <Routes>
                        <Route path='/' element={<GuestRoute Cmp={<Login />} />} />
                        <Route path='/signup' element={<GuestRoute Cmp={<Signup />} />} />
                        <Route path='/home' element={<ProtectedRoute Cmp={<Home />} />} />
                        <Route path='/cart' element={<ProtectedRoute Cmp={<Cart />} />} />
                    </Routes>
                </AuthContext.Provider>
            </BrowserRouter>
        </>
    )
}

export default Pr11