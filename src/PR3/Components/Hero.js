import React from 'react'
import hero from '../hero.jpg'
import Tabs from './Tabs'

const Hero = () => {
  return (
    <div className='container py-4'>
      <div className="row">
        <div className="col-6">
          <span className='text-primary subtitle'>I'm</span>
          <h1 className='heading'>Jessica <br /> Parker</h1>
          <p>A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
          <button className='btn btn-warning text-white rounded-circle hero-play-btn'>play</button>
          <span className='fw-bold fs-5 ms-3'>Play Video</span>
        </div>

        <div className="col-6 hero-img">
          <div className="ms-auto">
            <img className='rounded-4' src={hero} alt="" width={'100%'} />
          </div>
        </div>
      </div>
      <Tabs/>
    </div>
  )
}

export default Hero