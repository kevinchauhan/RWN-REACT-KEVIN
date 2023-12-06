import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../authContext'

const Signup = () => {
    const initialInput = { name: '', email: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState({})

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
            sendData()
            setInput(initialInput)
        }
    }

    const sendData = async () => {
        try {
            const checkEmail = await axios.get(`http://localhost:5500/users?email=${input.email}`)
            if (checkEmail.data.length > 0) {
                setInput({ ...checkEmail.data[0], id: undefined })
                setErrors({ ...errors, email: 'Email is already exists' })
                return
            }
            setErrors({})
            const res = await axios.post('http://localhost:5500/users', input)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    const validate = () => {
        const errors = {}
        if (input.name.length < 1) {
            errors.name = 'please enter name'
        }
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
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <form onSubmit={handleForm}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">Name</label>
                    <input type="text" id="name" name="name" value={input.name} onChange={handleChange} className="block w-full p-2 border rounded focus:outline-none focus:border-pink-500" />
                    <p className='text-red-400'>{errors.name}</p>
                </div>
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
                <p className="text-gray-500">Already have an account? <Link to="/login" className="text-pink-500">Log In</Link></p>
            </form>
        </div>

    )
}

export default Signup