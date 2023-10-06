import React, { useEffect, useState } from 'react'
import Table from './Table'
import DropDown from './DropDown'
import states from './states.json'

const Form = () => {
    const initialInput =
        { name: '', email: '', password: '', confirmPassword: '', mobile: '', course: '', hobbies: '', gender: '', state: '', city: '', address: '' }
    const [input, setInput] = useState(initialInput)
    const [cities, setCities] = useState([])
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

    const handleOption = (e) => {
        const value = e.target.value
        const name = e.target.name

        setInput({ ...input, [name]: value })
        if (name === 'state') {
            getDistricts(value)
        }
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
        setCities([])
        e.target.reset()
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

    useEffect(() => {
        getDistricts(input.state)
    }, [isEdit])

    const getDistricts = (state) => {
        states.states.forEach(e => {
            if (e.state === state) {
                setCities(e.districts)
            }
        })
    }

    return (
        <>
            <div className="container py-10">
                <div className="mb-10 sm:mx-auto sm:w-full px-5">
                    <form className="" onSubmit={handleSubmit} action="#" method="POST">
                        <div className='flex flex-wrap items-end space-y-6'>
                            <div className='w-1/2 px-3'>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input id="name" name="name" type="text" autoComplete="name" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.name} onChange={handleChange} />
                                </div>
                            </div>

                            <div className='w-1/2 px-3'>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className='w-1/2 px-3'>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-3 text px-3-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.password} onChange={handleChange} />
                                </div>
                            </div>

                            <div className='w-1/2 px-3'>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                <div className="mt-2">
                                    <input id="confirm-password" name="confirmPassword" type="password" required className="block w-full rounded-md border-0 py-1.5 px-3 text-g px-3ray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.confirmPassword} onChange={handleChange} />
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile no.</label>
                                <div className="mt-2">
                                    <input id="mobile" name="mobile" type="text" required className="block w-full rounded-md border-0 py-1.5 px-3 text-g px-3ray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.mobile} onChange={handleChange} />
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">Course</label>
                                <div className="mt-2">
                                    <select name='course' className='block w-full rounded-md border-0 py-1.5 px-3 text-g px-3ray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' value={input.course} onChange={handleChange} >
                                        <option value="">--select course--</option>
                                        <option value="be">B.E</option>
                                        <option value="bcom">B.COM</option>
                                        <option value="bca">BCA</option>
                                        <option value="ba">BA</option>
                                    </select>
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                                <div className="mt-2">
                                    Male
                                    <input id="male" name="gender" value='male' type="radio" required className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mx-3" onChange={handleChange} />
                                    Female
                                    <input id="female" name="gender" value='female' type="radio" required className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mx-3" onChange={handleChange} />
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">State</label>
                                <div className="mt-2">
                                    <DropDown input={input.state} handleOption={handleOption} states={states.states} name='state' />
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                <div className="mt-2">
                                    <DropDown input={input.city} handleOption={handleOption} name='city' states={cities} />
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="hobbies" className="block text-sm font-medium leading-6 text-gray-900">Hobbies</label>
                                <div className="mt-2">
                                    <input id="hobbies" name="hobbies" type="text" autoComplete="hobbies" required className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.hobbies} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="w-1/3 px-3">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                <div className="mt-2">
                                    <textarea id="address" name="address" rows="2" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.address} onChange={handleChange}></textarea>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 px-3'>
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">Submit</button>

                            <button type='reset' className="ml-3 rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Reset</button>
                        </div>
                    </form>
                </div>

                <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} isEdit={isEdit} />
            </div>
        </>
    )
}

export default Form