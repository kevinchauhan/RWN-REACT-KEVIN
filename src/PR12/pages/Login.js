import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/firebase'


const Signup = ({ loggedInUser, setloggedInUser }) => {
    const initialInput = { email: '', password: '' }
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
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, input.email, input.password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user)
                    // ...
                    setInput(initialInput)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrors({ password: 'Invalid email or password' })
                });
        }
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
                console.log(error)
            });
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
        <div className="w-1/3 mx-auto py-16 px-4 text-white">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form onSubmit={handleForm}>
                <div className="mb-4">
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" id="email" name="email" value={input.email} onChange={handleChange} className="block w-full p-2 border-amber-200 border bg-transparent rounded-lg focus:outline-none focus:border-amber-300" />
                    <p className='text-red-400'>{errors.email}</p>
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" id="password" name="password" value={input.password} onChange={handleChange} className="block w-full p-2 border border-amber-200 bg-transparent rounded-lg focus:outline-none focus:border-amber-300" />
                    <p className='text-red-400'>{errors.password}</p>
                </div>
                <div className="mb-6">
                    <input type="submit" defaultValue="Sign Up" className="w-full p-2 bg-amber-200 text-white font-bold rounded-lg cursor-pointer hover:bg-amber-300 focus:outline-none" />
                </div>
                <p className="text-white">Already have an account? <Link to="/signup" className="text-amber-200">Sign Up</Link></p>
            </form>
            <button className='hover:bg-amber-200 hover:text-white border border-amber-200 rounded-lg text-white font-medium w-full mt-3 px-2 py-1.5' onClick={googleLogin}><i className="ri-google-fill text-xl align-middle"></i> Sign in with Google</button>
        </div>

    )
}

export default Signup