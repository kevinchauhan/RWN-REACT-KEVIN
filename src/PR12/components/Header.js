import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../firebase/firebase'
import { getAuth, signOut } from 'firebase/auth'

const Header = ({ loggedInUser, setloggedInUser }) => {

    const handleLogout = (e) => {
        e.preventDefault()
        const auth = getAuth(app);

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('User signed out');
                setloggedInUser(null)
                // Perform any other actions after logout if needed.
            })
            .catch((error) => {
                // An error happened.
                console.error('Error signing out:', error);
            });
    }

    return (
        <header className="bg-transparent border-b border-amber-100 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-amber-200">PR-12</Link>
                    <nav className="space-x-4 text-white text-lg">
                        <Link to="/">Home</Link>
                        {!loggedInUser ? <> <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link> </> :
                            <a href='#' onClick={handleLogout} to="/logout">Logout</a>}
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header