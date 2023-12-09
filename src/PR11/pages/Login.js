import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../authContext'

const Login = () => {

    const initialInput = { email: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState({})
    const { authenticate, setAuthenticate } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleForm = (e) => {
        e.preventDefault()
        const checkValidate = validate()
        if (Object.keys(checkValidate).length > 0) {
            setErrors(checkValidate)
        } else {
            setErrors({})
            axios.get(`http://localhost:5500/users?email=${input.email}`)
                .then(res => {
                    if (res.data.length < 1 || res.data[0].password !== input.password) {
                        setErrors({ ...errors, password: 'Invalid email or password' })
                    } else {
                        setErrors({})
                        setInput(initialInput)
                        axios.post(`http://localhost:5500/current-user`, res.data[0])
                            .then(res => { })
                            .catch(err => console.log(err))
                        setAuthenticate(res.data[0])
                    }
                })
                .catch(err => console.log(err))
        }
    }

    const validate = () => {
        const errors = {}
        if (input.email.length < 1) {
            errors.email = 'please enter an email'
        }
        if (input.password.length < 1) {
            errors.password = 'please enter a password'
        }
        return errors
    }

    return (
        <div className="w-1/3 mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form onSubmit={handleForm}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email</label>
                    <input type="email" id="email" name="email" value={input.email} onChange={handleChange} className="block w-full p-2 border rounded focus:outline-none focus:border-pink-500" />
                    <p className='text-red-400'>{errors.email}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input type="password" id="password" name="password" value={input.password} onChange={handleChange} className="block w-full p-2 border rounded focus:outline-none focus:border-pink-500" />
                    <p className='text-red-400'>{errors.password}</p>
                </div>
                <div className="mb-6">
                    <input type="submit" defaultValue="Sign Up" className="w-full p-2 bg-pink-500 text-white font-bold rounded cursor-pointer hover:bg-pink-600 focus:outline-none" />
                </div>
                <p className="text-gray-500">Don't have an account? <Link to="/signup" className="text-pink-500">create an account</Link></p>
            </form>
        </div>
    )
}

export default Login