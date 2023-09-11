import React from 'react'

const CircularProgressBar = () => {
    return (
        <div className='row'>
            <div className='col-6 mb-5'>
                <div className="circular-bar circle-1">
                    <svg height="200" width="200" className='circle-svg'>
                        <circle className='circle' cx="100" cy="100" r="90" stroke-width="5" />
                        <circle cx="100" cy="100" r="80" stroke-width="5" fill='none' stroke='#777a7f' />
                    </svg>
                    <span>80%</span>
                </div>
                <h5 className='text-center mt-2'>Illustrator</h5>
            </div>
            <div className='col-6 mb-5'>
                <div className="circular-bar circle-2">
                    <svg height="200" width="200" className='circle-svg'>
                        <circle className='circle' cx="100" cy="100" r="90" stroke-width="5" />
                        <circle cx="100" cy="100" r="80" stroke-width="5" fill='none' stroke='#777a7f' />
                    </svg>
                    <span>75%</span>
                </div>
                <h5 className='text-center mt-2'>Figma</h5>
            </div>
            <div className='col-6 mb-5'>
                <div className="circular-bar circle-3">
                    <svg height="200" width="200" className='circle-svg'>
                        <circle className='circle' cx="100" cy="100" r="90" stroke-width="5" />
                        <circle cx="100" cy="100" r="80" stroke-width="5" fill='none' stroke='#777a7f' />
                    </svg>
                    <span>90%</span>
                </div>
                <h5 className='text-center mt-2'>Ms Office</h5>
            </div>
            <div className='col-6 mb-5'>
                <div className="circular-bar circle-4">
                    <svg height="200" width="200" className='circle-svg'>
                        <circle className='circle' cx="100" cy="100" r="90" stroke-width="5" />
                        <circle cx="100" cy="100" r="80" stroke-width="5" fill='none' stroke='#777a7f' />
                    </svg>
                    <span>65%</span>
                </div>
                <h5 className='text-center mt-2'>Photoshop</h5>
            </div>
        </div>
    )
}

export default CircularProgressBar