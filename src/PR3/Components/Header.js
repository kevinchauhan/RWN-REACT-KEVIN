import React from 'react'
import instagram from '../instagram.svg'
import twitter from '../twitter.svg'
import Button from './Button'

const Header = () => {
    return (
        <header>
            <div className="container d-flex justify-between align-items-center py-4">
                <div className="logo col-1"><img src="https://marketifythemes.net/html/3/img/logo/light.png" alt="" width={'100%'} /></div>
                <div className="icons d-flex align-items-center gap-3">
                    <ul className='d-flex align-items-center m-0 gap-2'>
                        <li>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" className="svg replaced-svg"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-6.932 0-5.046 7.85-5.322 9h-3.487v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z" fill="#3b5999"></path></svg></a>
                        </li>
                        <li>
                            <a href=""><img src={twitter} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -77 512.00213 512" width="20" className="svg replaced-svg"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"></path><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff"></path></svg></a>
                        </li>
                        <li>
                            <a href="#"><img src={instagram} alt="" /></a>
                        </li>
                    </ul>
                    <Button />
                </div>
            </div>
        </header>
    )
}

export default Header