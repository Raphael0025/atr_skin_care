import React, { useState } from 'react'
import icon from '../assets/logo/ATR Skin Care Logo.png'
import { BsFillHandbagFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [select, setSelected] = useState('home')

    const handleItemClick = (state) => {
        setSelected(state)
    }

    return (
        <nav className='navbar navbar-expand-lg bg-dark px-5 fixed-top' data-bs-theme='dark'>
            <div className='container-fluid'>
                <Link className='navbar-brand' to='/'>
                    <img src={icon} alt='logo' width='30' height='30' className='d-inline-block align-text-center me-2' />
                    ATR Skin Care
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div id='navbarSupportedContent' className='collapse navbar-collapse'>
                    <ul className='navbar-nav gap-2 text-center ms-auto'>
                        {/* nav items */}
                        <li className={`nav-item ${select === 'home' ? 'active' : ''}`} onClick={() => handleItemClick('home')}>
                            <Link className={`nav-link ${select === 'home' ? 'active' : ''}`} to='/'>Home</Link>
                        </li>
                        <li className={`nav-item ${select === 'feed' ? 'active' : ''}`} onClick={() => handleItemClick('feed')}>
                            <Link className={`nav-link ${select === 'feed' ? 'active' : ''}`} to='/newsfeed'>Updates</Link>
                        </li>
                        <li className={`nav-item ${select === 'service' ? 'active' : ''}`} onClick={() => handleItemClick('service')}>
                            <Link className={`nav-link ${select === 'service' ? 'active' : ''}`} to='/service'>Services</Link>
                        </li>
                        <li className={`nav-item ${select === 'feature' ? 'active' : ''}`} onClick={() => handleItemClick('feature')}>
                            <Link className={`nav-link ${select === 'feature' ? 'active' : ''}`} to='/featured'>Featured</Link>
                        </li>
                        <li className={`nav-item ${select === 'testimony' ? 'active' : ''}`} onClick={() => handleItemClick('testimony')}>
                            <Link className={`nav-link ${select === 'testimony' ? 'active' : ''}`} to='/testimony'>Testimonials</Link>
                        </li>
                        <li className={`nav-item ${select === 'about' ? 'active' : ''}`} onClick={() => handleItemClick('about')}>
                            <Link className={`nav-link ${select === 'about' ? 'active' : ''}`} to='/about'>About Us</Link>
                        </li>
                        <li className={`nav-item ${select === 'contact' ? 'active' : ''}`} onClick={() => handleItemClick('contact')}>
                            <Link className={`nav-link ${select === 'contact' ? 'active' : ''}`} to='/contact'>Contact Us</Link>
                        </li>
                    </ul>
                    {/* Buttons */}
                    <form className='d-flex justify-content-center gap-3 p-2'>
                        <Link id='bag' to='/auth/forgot-password' className='btn btn-sm px-3 bag'><BsFillHandbagFill size={24}/></Link>
                        <Link to='/auth/register' id='navBtn-primary' className='btn px-3 rounded-3 btn-sm'>Register</Link>
                        <Link to='/auth/user-login' id='navBtn-dark' className='btn px-4 rounded-3 btn-sm'>Login</Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar