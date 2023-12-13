import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase'


const Signup = ({ loggedInUser, setloggedInUser }) => {
    const initialInput = { name: '', email: '', password: '' }
    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        if (loggedInUser) {
            navigate('/')
        }
    }, [loggedInUser])

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
            createUser()
        }
    }

    const createUser = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, input.email, input.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
                setInput(initialInput)
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                // ..
                if (errorCode.includes('email')) {
                    setErrors({ email: 'email already exists' })
                }
            });
    }

    const googleLogin = () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth(app)
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user)
                setloggedInUser(user.uid)
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
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
        } else if (input.password.length < 6) {
            errors.password = 'password must be atleast 6 chars long'
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
            <button className='hover:bg-pink-500 hover:text-white border border-pink-500 rounded text-pink-500 font-medium w-full mt-3 px-2 py-1.5' onClick={googleLogin}><i className="ri-google-fill text-xl align-middle"></i> Sign in with Google</button>
        </div>

    )
}

export default Signup