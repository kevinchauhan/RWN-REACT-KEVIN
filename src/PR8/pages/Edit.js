import React, { useEffect, useState } from 'react'
import Form from '../components/Form'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        return localData || []
    })

    const params = useParams()
    console.log(params)
    return (
        <Form id={params.id} data={data} setData={setData} edit={true} />
    )
}

export default Edit