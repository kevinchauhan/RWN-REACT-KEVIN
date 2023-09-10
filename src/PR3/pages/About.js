import React from 'react'
import image from '../me.jpg'
import Title from '../Components/Title'
import Button from '../Components/Button'

const About = () => {
    return (
        <div id='about' className='row'>
            <div className="col-6 position-relative" style={{ paddingBottom: "100px" }}>
                <div className="about-img">
                    <img src={image} className='img-fluid rounded-4' alt="" />
                </div>
                <div class="about-details bg-primary">
                    <ul className='ps-0 mb-0'>
                        <li>
                            <span>Name</span>
                            <h6>Jessica Parker</h6>
                        </li>
                        <li>
                            <span>Birthday</span>
                            <h6>April 22, 1990</h6>
                        </li>
                        <li>
                            <span>Mail</span>
                            <h6>hello@jessica.com</h6>
                        </li>
                        <li>
                            <span>Phone</span>
                            <h6>+123 456 7890</h6>
                        </li>
                        <li>
                            <span>Address</span>
                            <h6>20, Bardeshi, Dhaka</h6>
                        </li>
                        <li>
                            <span>Nationality</span>
                            <h6>Bangladeshi</h6>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-6 pe-5 about-des">
                <Title subtitle='About Me' title='World leading UI/UX designer' />
                <p className='fw-medium' style={{ color: '#d3d7df', fontSize: '20px' }}>A passionate UI/UX Designer and Web Developer based In NYC, USA</p>
                <p className='text-light'>Hi! My name is Jessica Parker. I am UI/UX designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                <Button />
            </div>
        </div>
    )
}

export default About