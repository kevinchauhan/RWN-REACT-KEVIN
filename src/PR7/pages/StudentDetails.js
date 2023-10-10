import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const StudentDetails = ({ data }) => {
    const [detail, setDetail] = useState({})
    const params = useParams()
    const { id } = params
    useEffect(() => {
        setDetail(...data.filter(e => {
            if (e.id == id) {
                return e
            }
        }))
    }, [])

    return (
        <>
            <h1>{detail.name}</h1>
            <h1>{detail.email}</h1>
            <h1>{detail.password}</h1>
            <h1>{detail.confirmPassword}</h1>
            <h1>{detail.gender}</h1>
            <h1>{detail.mobile}</h1>
            <h1>{detail.course}</h1>
            <h1>{detail.state}</h1>
            <h1>{detail.city}</h1>
            <h1>{detail.hobbies}</h1>
            <h1>{detail.address}</h1>
        </>
    )
}

export default StudentDetails