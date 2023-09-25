import React from 'react'
import './style.css'
const Comments = ({ comment }) => {
    return (
        <div className='mx-10 py-10 flex items-start border-b comment-box'>
            <div className='w-12 rounded-full overflow-hidden'>
                <img width={'100%'} src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" alt="" />
            </div>
            <div className='flex-1 ps-3'>
                <h5 className='text-gray-700 font-bold capitalize'>{comment.name} <small className=' ml-2 align-middle text-gray-400 font-normal'>{comment.time}</small></h5>
                <p className='text-gray-500 text-md italic'>{comment.des}</p>
            </div>
        </div>
    )
}

export default Comments