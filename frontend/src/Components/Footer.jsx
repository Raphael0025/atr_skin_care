import React from 'react'
import logo from '../assets/logo/ATR Skin Care Logo.png'
import { BsCCircle } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='p-3 d-flex gap-2 align-items-center footer text-light justify-content-end'>
      <BsCCircle className='footer fw-bold ic' />2023 <strong> ATR Skin Car & Pharmacy Inc. </strong>
      <img src={logo} alt='ATR logo' width='30px'/>
    </footer>
  )
}

export default Footer