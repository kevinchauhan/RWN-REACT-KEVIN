import React, { useEffect, useState } from 'react'
import Table from './Table'

const Form = () => {
    const initialInput = { name: '', email: '' }
    const [input, setInput] = useState(initialInput)
    const [editId, setEditId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        if (localData) {
            return localData
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('user-data', JSON.stringify(data))
    }, [data])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (isEdit) {
            const oldData = [...data]
            oldData[editId] = input
            setData(oldData)
            setIsEdit(false)
        } else {
            setData([...data, input])
        }
        setInput(initialInput)
    }

    const handleEdit = (id) => {
        setInput({ ...data[id], id })
        setEditId(id)
        setIsEdit(true)
    }

    const handleDelete = (id) => {
        const oldData = [...data]
        oldData.splice(id, 1)
        setData(oldData)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='text-center' >
                <div>
                    <input className='border px-3 py-1 my-2 mx-2' type="text" value={input.name} name='name' onChange={handleChange} />
                </div>
                <div>
                    <input className='border px-3 py-1 my-2 mx-2' type="email" value={input.email} name='email' onChange={handleChange} />
                </div>
                <button className='bg-green-500 px-5 py-1 rounded'>{isEdit ? 'Update' : 'Add'}</button>
            </form >
            <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} isEdit={isEdit} />
        </>
    )
}

export default Form