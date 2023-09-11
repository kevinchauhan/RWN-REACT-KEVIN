import React, { useState } from 'react'
import hero from '../hero.jpg'
import Nav from './NavTabs'
import About from '../pages/About'
import Resume from '../pages/Resume'

const Hero = () => {
  const [isActive, setIsActive] = useState(false)
  const [selectedTab, setSelectedTab] = useState('')

  return (
    <div className='container py-4'>
      <div className="row mb-5">
        <div className="col-6">
          <span className='text-primary subtitle'>I'm</span>
          <h1 className='heading'>Jessica <br /> Parker</h1>
          <p>A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
          <button className='btn btn-warning text-white rounded-circle hero-play-btn text-center'><i class="ri-play-fill fs-3 vertical-middle"></i></button>
          <span className='fw-bold fs-5 ms-3'>Play Video</span>
        </div>

        <div className="col-6 hero-img">
          <div className="ms-auto">
            <img className='rounded-4' src={hero} alt="" width={'100%'} />
          </div>
        </div>
      </div>
      <Nav setTabs={setSelectedTab} setActive={setIsActive} />
      <div className={`bg-secondary rounded-4 ${isActive ? 'p-6' : ''}`}>
        {selectedTab === 'about' ? <About /> : ''}
        {selectedTab === 'resume' ? <Resume /> : ''}
      </div>
    </div >
  )
}

export default Hero