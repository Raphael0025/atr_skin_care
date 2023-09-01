import React, { useState } from 'react'
import { SideBar, GradientHeader } from '../../Components'
import logo from '../../assets/logo/ATR Skin Care Logo.png'
import { BsFillClockFill } from 'react-icons/bs'

const AboutPage = () => {
    const [select, setSelected] = useState(true)

    const handleItemClick = () => {
        setSelected(!select)
    }

    return (
        <main className='container-fluid con d-flex mt-0 pt-2 p-0 m-0 vh-100'>
            <SideBar props={'pt-5 text-dark user-aside h-100'}>
                <ul className='navbar-nav gap-3 pt-5'>
                    <li className={`nav-item p-2 px-4 ${select ? 'active' : ''}`} onClick={handleItemClick}>About Us</li>
                    <li className={`nav-item p-2 px-4 ${!select ? 'active' : ''}`} onClick={handleItemClick}>Operational Hours</li>
                </ul>
            </SideBar>
            {select ? 
            <section className='container-fluid p-3 mt-5 overflow-y-auto' >
                <GradientHeader title={'About Us'} />
                <div className='row p-3'>
                    <div className='col-6 text-center'>
                        <img src={logo} alt='logo' height='150px'/>
                        <h3>ATR Skin Care</h3> 
                    </div>
                    <div className='text-center col-6 '>
                        <h2 className='text-warning'><strong>History</strong></h2>
                        <p>The Company was established since 2016 but, its operations  temporarily closed due to the COVID 19 pandemic. It was founded first by Dr, Angelita T. Reyes, however, in 2016, Rebecca Hidalgo continue to manage the ATR Skin care & Pharmacy Inc.</p>
                    </div>
                </div>
                <div className='p-3 text-center d-flex flex-column align-items-center'>
                    <h2 className='text-uppercase text-warning'><strong>Mission</strong></h2>
                    <p className='col-7'>The mission of ATR Skin Care and Pharmacy Inc. is to enhance the overall well-being and confidence of our customers by providing high-quality skincare products and pharmaceutical services. We are dedicated to delivering innovative solutions that promote healthy skin, improve beauty, and contribute to a fulfilling and vibrant life.</p>
                </div>
                <div className='p-3 text-center d-flex flex-column align-items-center'>
                    <h2 className='text-uppercase text-warning'><strong>Vision</strong></h2>
                    <p className='col-7'>Our vision at ATR Skin Care and Pharmacy Inc. is to touch hearts and make a meaningful difference in the lives of our customers. We envision a world where self-care is embraced as an essential aspect of overall health, where every individual feels comfortable and confident in their own skin. We aspire to be more than just a skincare and pharmacy company; we aim to be a trusted companion on the path to self-discovery and self-expression. By fostering authentic connections, promoting self-love, and delivering exceptional skincare products and services, we strive to inspire individuals to embrace their natural beauty, unlock their full potential, and live a life of authenticity and joy.</p>
                </div>
            </section>
            :
            <section className='container-fluid p-3 mt-5 overflow-y-auto' >
                <GradientHeader title={'Operational Hours'} />
                <div className='gap-4 d-flex flex-column align-items-center py-4'>
                    <div className='col-5 p-4 rounded-4 d-flex business-hour align-items-center justify-content-center gap-4'>
                        <BsFillClockFill size={62} className='text-warning' />
                        <div className='border-top w-100 border-3 border-warning text-center pt-3'>
                            <h5 className='text-uppercase'><strong>Monday to Friday</strong></h5>
                            <span className='fs-3 text-light'>9:00 AM - 5:00 PM</span>
                        </div>
                    </div>
                    <div className='col-5 p-4 rounded-4 d-flex business-hour align-items-center justify-content-center gap-4'>
                        <BsFillClockFill size={62} className='text-warning' />
                        <div className='border-top w-100 border-3 border-warning text-center pt-3'>
                            <h5 className='text-uppercase'><strong>Saturday</strong></h5>
                            <span className='fs-3 text-light'>9:00 AM - 12:00 PM</span>
                        </div>
                    </div>
                </div>
            </section>
            }
        </main>
    )
}

export default AboutPage