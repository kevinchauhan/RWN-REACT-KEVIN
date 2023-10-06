import React from 'react'

const Table = ({ data, handleEdit, handleDelete, isEdit }) => {
    return (

        <div className="relative overflow-x-auto flex flex-wrap px-3">
            <table className="table-fixed text-sm text-left whitespace-nowrap flex-1 text-center">
                <thead className="text-xs  uppercase border-b dark:border-gray-700 bg-indigo-500">
                    <tr>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Name</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Email</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Password</th>
                        <th scope="col" className="px-6 py-3 border-r border-gray-500">Confirm Password</th>
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
                            <td className="px-6 py-4 border-r border-gray-400">{e.name}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.email}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.password}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.confirmPassword}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.gender}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.mobile}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.course}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.state}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.city}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.hobbies}</td>
                            <td className="px-6 py-4 border-r border-gray-400">{e.address}</td>
                            <td className="px-6 py-4">
                                <button className='text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded' onClick={() => handleEdit(i)}>Edit</button>
                                <button disabled={isEdit} className='text-white bg-red-600 hover:bg-red-700 disabled:opacity-75 disabled:cursor-not-allowed px-3 py-1 rounded ml-2' onClick={() => handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            {data.length < 1 ? <h3 className='text-lg text-gray-600 text-center mt-3'>No data found</h3> : ''}
        </div>

    )
}

export default Table