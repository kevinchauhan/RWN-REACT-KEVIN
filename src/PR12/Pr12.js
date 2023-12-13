import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './firebase/firebase';
import Home from './pages/Home';
import Login from './pages/Login';
import ProtectedRoute from './routes/ProtectedRoute';
import './pr12.css'

const Pr12 = () => {
    const [loggedInUser, setloggedInUser] = useState(null)

    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const uid = user.uid;
                setloggedInUser(uid)
                // ...
            } else {
                // User is signed out
                // ...
                setloggedInUser(null)
            }
        });
    }, [])

    useEffect(() => {
        // if (loggedInUser) {
        //     navigate('/')
        // } else {
        //     navigate('/login')
        // }
    }, [loggedInUser])

    return (
        <BrowserRouter>
            <Header loggedInUser={loggedInUser} setloggedInUser={setloggedInUser} />
            <Routes>
                <Route path='/' element={<ProtectedRoute loggedInUser={loggedInUser} setloggedInUser={setloggedInUser} Cmp={<Home />} />} />
                <Route path='/login' element={<Login loggedInUser={loggedInUser} setloggedInUser={setloggedInUser} />} />
                <Route path='/signup' element={<Signup loggedInUser={loggedInUser} setloggedInUser={setloggedInUser} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pr12