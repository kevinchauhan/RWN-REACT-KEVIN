import React, { useEffect, useState } from 'react'

const Form = () => {
    const [input, setInput] = useState({ name: '', email: '' })
    const [data, setData] = useState([])
    console.log(data)

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('user-data'))
        if (local) {
            setData(local)
        }
        console.log('first local')
    }, [])

    useEffect(() => {
        console.log('render when data changed')
        // console.log(data)
    }, [data])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setData([input])
    }

    return (
        <form onSubmit={handleSubmit} className='text-center' >
            <div>
                <input className='border px-3 py-1 my-2 mx-2' type="text" value={input.name} name='name' onChange={handleChange} />
            </div>
            <div>
                <input className='border px-3 py-1 my-2 mx-2' type="email" value={input.email} name='email' onChange={handleChange} />
            </div>
            <button className='bg-green-500 px-5 py-1 rounded'>Submit</button>
        </form >
    )
}

export default Form