import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const style = {
        backgroundColor: '#222'
    }
    return (
        <header className='flex justify-center py-2'>
            <ul className='flex gap-3'>
                <li className='hover:border-b'><Link to="/">PR-10.1</Link></li>
                <li className='hover:border-b'><Link to="/2">PR-10.2</Link></li>
            </ul>
        </header>
    )
}

export default Header