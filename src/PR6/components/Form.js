import React, { useState } from 'react'

const Form = ({ comments, setComments }) => {
    const [input, setInput] = useState({ name: '', des: '' })

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value
        setInput({ ...input, [key]: value })
    }

    const handleForm = (e) => {
        e.preventDefault()

        const time = getDate()
        setComments([...comments, { ...input, time }])
        setInput({ name: '', des: '' })
    }

    const getDate = () => {
        const month = new Map([
            [0, 'Jan'],
            [1, 'Feb'],
            [2, 'Mar'],
            [3, 'Apr'],
            [4, 'May'],
            [5, 'Jun'],
            [6, 'July'],
            [7, 'Aug'],
            [8, 'Sept'],
            [9, 'Oct'],
            [10, 'Nov'],
            [11, 'Dec'],
        ])
        const date = new Date()
        return `${date.getDate()} ${month.get(date.getMonth())} ${date.getFullYear()}`
    }

    return (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm px-5">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleForm}>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            onChange={handleChange} value={input.name}
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Write your comment
                    </label>
                    <div className="mt-2">
                        <textarea onChange={handleChange} value={input.des} name="des" id="des" cols="30" rows="5" className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 outline-none'></textarea>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Post Comment
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Form