import React from 'react'
import Title from '../Components/Title'
import { data } from '../Data'
import CircularProgressBar from '../Components/CircularProgressBar'

const Resume = () => {
  const titleStyle = { fontSize: '36px', fontWeight: 700 }

  return (
    <div>
      <div className="w-50">
        <Title subtitle='Resume' title='Combination of Skill & Experience' />
      </div>
      <div className="row mt-5">
        <div className="col-6 pe-5">
          <h3 style={titleStyle}> <span className='text-primary fs-3'><i class="ri-record-circle-line"></i></span> Education</h3>

          {
            data.education.map((e, i) => {

              return <div className='edu-card mt-5'>
                <div className="card-title d-flex">
                  <div className='col-6 ps-0'>
                    <h5 className='fw-semibold'>{e.field}</h5>
                    <p className='text-medium-light'>{e.university}</p>
                  </div>
                  <div className="col pe-0 text-end">
                    <span className="text-primary py-1 px-4 rounded-pill border">
                      {e.year}
                    </span>
                  </div>
                </div>
                <p className='text-light'>{e.description}</p>
              </div>

            })
          }

          <h3 style={titleStyle} className='mt-5'> <span className='text-primary fs-3'><i class="ri-record-circle-line"></i></span> Experience</h3>

          {
            data.experience.map((e, i) => {

              return <div className='edu-card mt-4'>
                <div className="card-title d-flex">
                  <div className='col-6 ps-0'>
                    <h5 className='fw-semibold'>{e.post}</h5>
                    <p className='text-medium-light'>{e.company}</p>
                  </div>
                  <div className="col pe-0 text-end">
                    <span className="text-primary py-1 px-4 rounded-pill border">
                      {e.year}
                    </span>
                  </div>
                </div>
                <p className='text-light'>{e.description}</p>
              </div>

            })
          }
        </div>

        <div className="col-6 ps-5">
          {/* personal skills */}
          <div className='mb-5'>
            <h3 style={titleStyle}> <span className='text-primary fs-3'><i class="ri-record-circle-line"></i></span> Personal Skills</h3>

            <div className='mt-5'>
              <h5>Time Mangement</h5>
              <div style={{ width: '90%', height: '5px', marginBottom: '2px' }} className='rounded-3 bg-primary position-relative'><span className='text-primary position-absolute bottom-0 end-0'>90%</span></div>
              <p className='rounded-3 py-1' style={{ backgroundColor: '#777a7f' }}></p>
            </div>
            <div className='mt-4'>
              <h5>Efficiency</h5>
              <div style={{ width: '70%', height: '5px', marginBottom: '2px' }} className='rounded-3 bg-primary position-relative'><span className='text-primary position-absolute bottom-0 end-0'>70%</span></div>
              <p className='rounded-3 py-1' style={{ backgroundColor: '#777a7f' }}></p>
            </div>
            <div className='mt-4'>
              <h5>Intigrity</h5>
              <div style={{ width: '80%', height: '5px', marginBottom: '2px' }} className='rounded-3 bg-primary position-relative'><span className='text-primary position-absolute bottom-0 end-0'>80%</span></div>
              <p className='rounded-3 py-1' style={{ backgroundColor: '#777a7f' }}></p>
            </div>
          </div>
          <h3 style={titleStyle} className='my-5'> <span className='text-primary fs-3'><i class="ri-record-circle-line"></i></span> Software Skills</h3>
          <CircularProgressBar />

        </div>
      </div>
    </div>
  )

}
export default Resume