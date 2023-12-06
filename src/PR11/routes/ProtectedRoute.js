import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../authContext'

const ProtectedRoute = ({ Cmp }) => {
    const { authenticate, setIsAuthenticate } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5500/current-user').then((res) => {
            if (Object.keys(res.data).length < 1) {
                navigate('/')
            }
        })
    }, [authenticate])

    return (
        Cmp
    )

}

export default ProtectedRoute