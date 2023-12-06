import axios from 'axios'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../authContext'

const Header = () => {
    const { authenticate, setIsAuthenticate } = useContext(AuthContext)

    const handleLogout = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5500/current-user`, {})
            .then(res => setIsAuthenticate(null))
    }

    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-gray-800"><img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200" className='h-16' alt="" /></Link>
                    <nav className="space-x-4 text-gray-600 text-lg">
                        <Link to="/">Home</Link>
                        <Link to="/product">Products</Link>
                        {!authenticate ? <> <Link to="/login">Login</Link>
                            <Link to="/signup">SignUp</Link> </> :
                            <a href='#' onClick={handleLogout} to="/logout">Logout</a>}
                        <Link to="/cart" className='relative'>Cart <span className='bg-pink-700 text-white w-5 h-5 rounded-full flex items-center absolute translate-x-3/4 -translate-y-1/3 top-0 right-0 justify-center block'>0</span> </Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header