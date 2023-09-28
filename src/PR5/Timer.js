import React, { useState } from 'react'
import './style.css'

const Timer = () => {
    const [count, setCount] = useState(0)
    const [isActive, setIsActive] = useState(false)
    if (isActive && count > 0) {
        setInterval(() => {
            setCount(count - 1)
        }, 1000)
    }

    const handleTimer = () => {
        if (!isActive && count > 0) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }

    return (
        <div className='h-screen flex justify-center items-center bg-gray-900'>
            <div className='m-5 w-fit'>
                <input onChange={(e) => setCount(e.target.value)} value={count} type="number" className='mx-auto focus-visible:border-green-500 text-center border-2 text-gray-600 w-10 block rounded-md' />
                <div className='mt-3'>
                    <button onClick={handleTimer} className='bg-green-600 text-white px-4 py-1 rounded-md mr-3' >{isActive ? 'pause' : 'start'}</button>
                    <button className='bg-red-600 text-white px-4 py-1 rounded-md'>stop</button>
                </div>
            </div>
        </div>
    )
}

export default Timer