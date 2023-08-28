import React from 'react'
import icon from '../assets/logo/ATR Skin Care Logo.png'
import { BsFillHandbagFill } from 'react-icons/bs'

const Navbar = () => {
    return (
        <nav className='navbar container-fluid navbar-expand-lg bg-dark px-5 fixed-top' data-bs-theme='dark'>
            <div className='container-fluid'>
                <a className='navbar-brand' href='#home'>
                    <img src={icon} alt='logo' width='30' height='30' className='d-inline-block align-text-center me-2' />
                    ATR Skin Care
                </a>
                <div className='collapse navbar-collapse d-flex justify-content-end'>
                    <ul className='navbar-nav gap-2'>
                        {/* nav items */}
                        <li className='nav-item'>
                            <a className='nav-link' href='#home'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#updates'>Updates</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#services'>Services</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#featured'>Featured</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#testimony'>Testimonials</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#about'>About Us</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href='#contact'>Contact Us</a>
                        </li>
                    </ul>
                    {/* Buttons */}
                    <form className='d-flex gap-3 ps-3'>
                        <button id='bag' className='btn btn-sm px-3 bag'>< BsFillHandbagFill size={24}/></button>
                        <button id='navBtn-primary' className='btn btn-sm px-3 rounded-3'>Register</button>
                        <button id='navBtn-dark' className='btn btn-sm px-3 rounded-3'>Login</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar