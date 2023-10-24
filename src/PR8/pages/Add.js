import React, { useState } from 'react'
import Form from '../components/Form'

const Add = () => {
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        return localData || []
    })

    return (
        <Form data={data} setData={setData} edit={false} />

    )
}

export default Add