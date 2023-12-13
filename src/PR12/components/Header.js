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
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-gray-800"><img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200" className='h-16' alt="" /></Link>
                    <nav className="space-x-4 text-gray-600 text-lg">
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