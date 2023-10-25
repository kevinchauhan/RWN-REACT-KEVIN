import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({ currUser, setCurrUser }) => {
    const [isloggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        if (currUser) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [currUser])

    const handleLogout = () => {
        localStorage.removeItem('curr-user')
        setCurrUser(null)
        setTimeout(() => {
            navigate('/')
        }, 500);
    }

    return (
        <header className="bg-white shadow">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5 font-bold">Logo</Link>
                </div>
                <div className="flex gap-3">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Home</Link>
                    {isloggedIn ? <Link to="/studentdetails" className="text-sm font-semibold leading-6 text-gray-900">StudentDetails</Link> : ''}
                </div>
                <div className=" lg:flex lg:flex-1 lg:justify-end">
                    {!isloggedIn ?
                        <>
                            <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900 mr-3">Log in</Link>
                            <Link to="/signup" className="text-sm font-semibold leading-6 text-gray-900">Sign Up</Link>
                        </>
                        : <button className="text-sm font-semibold leading-6 text-gray-900" onClick={handleLogout}>Logout</button>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header