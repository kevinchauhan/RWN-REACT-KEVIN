import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { app } from '../firebase/firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";


const ProtectedRoute = ({ Cmp, loggedInUser, setloggedInUser }) => {
    const navigate = useNavigate()
    useEffect(() => {
        const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                setloggedInUser(uid)
            } else {
                setloggedInUser(null)
            }
        });
    }, [])

    useEffect(() => {
        if (!loggedInUser) {
            navigate('/login')
        }
    }, [loggedInUser])

    return (
        Cmp
    )

}

export default ProtectedRoute