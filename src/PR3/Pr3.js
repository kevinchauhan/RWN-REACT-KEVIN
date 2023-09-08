import React from 'react'
import './custom-css/style.css'
import Header from './Components/Header'
import Hero from './Components/Hero'

const Pr3 = () => {
    return (
        <>
            <div className="background_shape"></div>
            <div className='position-relative'>
                <Header />
                <Hero />
            </div>
        </>
    )
}

export default Pr3