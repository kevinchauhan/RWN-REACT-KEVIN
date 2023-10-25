import React, { useEffect, useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

const Login = ({ setCurrUser }) => {
    const initialInput = { email: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState('')
    const [users, setUsers] = useState(() => {
        const userAuth = JSON.parse(localStorage.getItem('user-auth'))
        return userAuth || []
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleForm = (e) => {
        e.preventDefault()
        if (users.length > 0) {
            const checkEmail = users.some(user => {
                if (user.email === input.email && user.password === input.password) {
                    return true
                }
            })
            if (checkEmail) {
                localStorage.setItem('curr-user', JSON.stringify(input))
                setCurrUser(true)
                setTimeout(() => {
                    navigate('/studentdetails')
                }, 500);
            } else {
                setErrors('Invalid email or password')
            }

        } else {
            setErrors('Invalid email or password')
        }
    }

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleForm}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                        <div className="mt-2">
                            <input id="email" name="email" type="email" required autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.email} onChange={handleChange} />
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        </div>
                        <div className="mt-2">
                            <input id="password" name="password" required type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.password} onChange={handleChange} />
                            <p className='text-red-400 text-sm'>{errors}</p>
                        </div>

                    </div>
                    <div>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login