import React from 'react'

const Table = ({ data, handleEdit, handleDelete, isEdit }) => {
    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left ">
                <thead className="text-xs  uppercase border-b dark:border-gray-700">
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((e, i) =>
                        <tr className="bg-white border-b" key={i}>
                            <td className="px-6 py-4">{e.name}</td>
                            <td className="px-6 py-4">{e.email}</td>
                            <td className="px-6 py-4">
                                <button className='bg-blue-500 px-3 py-1 rounded' onClick={() => handleEdit(i)}>Edit</button>
                                <button disabled={isEdit} className='bg-red-500 disabled:opacity-75 disabled:cursor-not-allowed px-3 py-1 rounded ml-2' onClick={() => handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default Table