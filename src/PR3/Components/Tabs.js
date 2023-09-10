import React from 'react'

const Tabs = () => {
  return (
    <nav>
      <ul className='nav-menu d-flex align-items-center ps-0 gap-2'>
        <li>
          <a href="#">
            <i className="ri-file-list-3-line"></i>
            <span className='text-white'>About me</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-contacts-book-line"></i>
            <span className='text-white'>Resume</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-briefcase-3-line"></i>
            <span className='text-white'>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-settings-5-line"></i>
            <span className='text-white'>Service</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-chat-check-line"></i>
            <span className='text-white'>Testimonial</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-article-line"></i>
            <span className='text-white'>Blog</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="ri-mail-line"></i>
            <span className='text-white'>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Tabs