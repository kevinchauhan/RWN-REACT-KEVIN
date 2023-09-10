import React from 'react'
import { Nav } from 'react-bootstrap';

const NavTabs = ({ setTabs, setActive }) => {
    const handleTab = (selectedKey) => {
        setTabs(selectedKey)
        setActive(true)
    }
    return (
        <>
            <Nav className='mb-5' variant="pills" onSelect={(selectedKey) => handleTab(selectedKey)}>
                <Nav.Item>
                    <Nav.Link href='#about' eventKey="about" className='nav-menu'>
                        <i className="ri-file-list-3-line"></i>
                        <span className='text-white'>About me</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="resume" className='nav-menu'>
                        <i className="ri-contacts-book-line"></i>
                        <span className='text-white'>Resume</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="portfolio" className='nav-menu'>
                        <i className="ri-briefcase-3-line"></i>
                        <span className='text-white'>Portfolio</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="service" className='nav-menu'>
                        <i className="ri-settings-5-line"></i>
                        <span className='text-white'>Service</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="testimonial" className='nav-menu'>
                        <i className="ri-chat-check-line"></i>
                        <span className='text-white'>Testimonial</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="blog" className='nav-menu'>
                        <i className="ri-article-line"></i>
                        <span className='text-white'>Blog</span>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="contact" className='nav-menu'>
                        <i className="ri-mail-line"></i>
                        <span className='text-white'>Contact</span>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default NavTabs