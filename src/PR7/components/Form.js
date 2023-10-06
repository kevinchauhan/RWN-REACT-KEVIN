import React, { useEffect, useState } from 'react'
import Table from './Table'
import DropDown from './DropDown'
import states from './states.json'

const Form = () => {

    const initialInput = { name: '', email: '', password: '', confirmPassword: '', mobile: '', course: '', hobbies: '', gender: '', state: '', city: '', address: '' }

    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(initialInput)
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

        const verify = validate()
        if (verify.name || verify.email || verify.password || verify.confirmPassword || verify.mobile || verify.course || verify.gender || verify.state || verify.city || verify.address || verify.hobbies) {
            setErrors(verify)
        } else {
            if (isEdit) {
                const oldData = [...data]
                oldData[editId] = input
                setData(oldData)
                setIsEdit(false)
            } else {
                setData([...data, input])
            }
            resetFields()
            e.target.reset()
        }
    }

    const resetFields = () => {
        setInput(initialInput)
        setCities([])
        setIsEdit(false)
    }

    const validate = () => {
        const errors = {}
        if (input.name.length < 1) {
            errors.name = 'please enter name'
        }
        if (input.email.length < 1) {
            errors.email = 'please vaild email'
        }
        if (input.password.length < 1) {
            errors.password = 'please enter password'
        }
        if (input.confirmPassword.length < 1) {
            errors.confirmPassword = 'please confirm your password'
        } else if (input.confirmPassword !== input.password) {
            errors.confirmPassword = 'confirm password must match with password'
        }
        if (input.mobile.length < 1) {
            errors.mobile = 'please enter mobile'
        } else if (input.mobile.length !== 10) {
            errors.mobile = 'mobile number must be 10 digit!'
        }
        if (input.course.length < 1) {
            errors.course = 'please enter course'
        }
        if (input.gender.length < 1) {
            errors.gender = 'select your gender'
        }
        if (input.state.length < 1) {
            errors.state = 'select your state'
        }
        if (input.city.length < 1) {
            errors.city = 'select your city'
        }
        if (input.hobbies.length < 1) {
            errors.hobbies = 'please enter hobbies'
        }
        if (input.address.length < 1) {
            errors.address = 'please enter address'
        }
        return errors
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
                <h1 className='text-2xl px-6 text-gray-800 border-b border-indigo-400 pb-3'>Registration Form</h1>
                <div className="mb-10 sm:mx-auto sm:w-full px-5">
                    <form className="" onSubmit={handleSubmit} action="#" method="POST">
                        <div className='flex flex-wrap items-end space-y-6'>
                            <div className='w-1/2 px-3'>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                                <div className="mt-2">
                                    <input id="name" name="name" type="text" autoComplete="name" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.name} onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.name}</p>
                                </div>
                            </div>

                            <div className='w-1/2 px-3'>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                <div className="mt-2">
                                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.email} onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.email}</p>
                                </div>
                            </div>

                            <div className='w-1/2 px-3'>
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div className="mt-2">
                                    <input id="password" name="password" type="password" autoComplete="current-password" className="block w-full rounded-md border-0 py-1.5 px-3 text px-3-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.password} onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.password}</p>
                                </div>
                            </div>

                            <div className='w-1/2 px-3'>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                                <div className="mt-2">
                                    <input id="confirm-password" name="confirmPassword" type="password" className="block w-full rounded-md border-0 py-1.5 px-3 text-g px-3ray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.confirmPassword} onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.confirmPassword}</p>
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">Mobile no.</label>
                                <div className="mt-2">
                                    <input id="mobile" name="mobile" type="number" className="block w-full rounded-md border-0 py-1.5 px-3 text-g px-3ray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.mobile} onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.mobile}</p>
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
                                    <p className='text-red-400 text-sm'>{errors.course}</p>
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">Gender</label>
                                <div className="mt-2">
                                    Male
                                    <input id="male" name="gender" value='male' type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mx-3" onChange={handleChange} />
                                    Female
                                    <input id="female" name="gender" value='female' type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600 mx-3" onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.gender}</p>
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">State</label>
                                <div className="mt-2">
                                    <DropDown input={input.state} handleOption={handleOption} states={states.states} name='state' />
                                    <p className='text-red-400 text-sm'>{errors.state}</p>
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                                <div className="mt-2">
                                    <DropDown input={input.city} handleOption={handleOption} name='city' states={cities} />
                                    <p className='text-red-400 text-sm'>{errors.city}</p>
                                </div>
                            </div>

                            <div className='w-1/3 px-3'>
                                <label htmlFor="hobbies" className="block text-sm font-medium leading-6 text-gray-900">Hobbies</label>
                                <div className="mt-2">
                                    <input id="hobbies" name="hobbies" type="text" autoComplete="hobbies" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.hobbies} onChange={handleChange} />
                                    <p className='text-red-400 text-sm'>{errors.hobbies}</p>
                                </div>
                            </div>

                            <div className="w-1/3 px-3">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                                <div className="mt-2">
                                    <textarea id="address" name="address" rows="2" className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={input.address} onChange={handleChange}></textarea>
                                    <p className='text-red-400 text-sm'>{errors.address}</p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-6 px-3'>
                            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700">{isEdit ? 'Update' : 'Submit'}</button>

                            <input type='reset' value={isEdit ? 'Cancel' : 'Reset'} onClick={resetFields} className="ml-3 cursor-pointer rounded-md bg-orange-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600" />
                        </div>
                    </form>
                </div>

                <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} isEdit={isEdit} />
            </div>
        </>
    )
}

export default Form