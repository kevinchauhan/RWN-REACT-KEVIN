import React, { useState } from 'react'
import { Link } from "react-router-dom";

const StudentDetails = () => {

    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        return localData || []
    })

    const handleDelete = (id) => {
        const oldData = [...data]
        oldData.splice(id, 1)
        setData(oldData)
    }

    return (

        <div className="relative overflow-x-auto flex flex-wrap px-3 my-10">
            <div className='w-full'>
                <Link to={'/add'} className='text-white bg-green-600 hover:bg-green-700 px-3 py-1 rounded'>+ Add new data</Link>
            </div>
            <table className="table-fixed text-sm text-left whitespace-nowrap flex-1 text-center mt-3">
                <thead className="text-xs  uppercase border-b dark:border-gray-700 bg-indigo-500">
                    <tr>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Name</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Email</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Gender</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Mobile</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Course</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">State</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">City</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Hobbies</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Address</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) =>
                        <tr className="bg-white border-b" key={i}>
                            {/* <td className="px-6 py-4 border-r border-gray-400"><Link to={`/student`} >{e.name}</Link></td> */}
                            <td className="px-6 py-4 border-r border-gray-400">{e.name}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.email}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.gender}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.mobile}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.course}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.state}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.city}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.hobbies}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.address}</td>
                            <td className="px-6 py-4">
                                {/* <Link to={'/view'} className='text-white bg-orange-600 hover:bg-red-700 px-3 py-1 rounded'>View</Link> */}
                                <Link to={`/edit/${i}`} className='text-white bg-blue-600 hover:bg-blue-700 ml-2 px-3 py-1 rounded' >Edit</Link>
                                <button className='text-white bg-red-600 hover:bg-red-700 disabled:opacity-75 disabled:cursor-not-allowed px-3 py-0.5 rounded ml-2' onClick={() => handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >

    )
}

export default StudentDetails