import React from 'react'
import {GradientHeader, ToolTip, Footer} from '../../Components'
import {HiMail} from 'react-icons/hi'
import { BiLogoFacebookCircle, BiSolidPhone } from 'react-icons/bi'
import avatar from '../../assets/extra/Vector.png'

const ContactPage = () => {
    return (
        <main className='container-fluid mt-5 pt-5 p-0 m-0'>
            <header className='ps-5 ms-5'>
                <GradientHeader title={'Contacts'} />
            </header>
            <section className='d-flex flex-column align-items-center w-100 gap-4 pb-5'>
                <div className='d-flex flex-column align-items-center gap-2'>
                    <img src={avatar} alt='avatar' width='50%'/>
                    <h4 className='text-uppercase mt-3 fw-bolder'>Rebecca C. Hidalgo</h4>
                    <hr className='w-100 m-0 border border-warning border-2 opacity-100' />
                    <h5>Contact Person</h5>
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h3 className='text-warning fw-bolder'>Email Us</h3>
                    <span className='text-secondary'>on Gmail</span>
                    <HiMail size={72} data-tooltip-id='tip0' />
                        <ToolTip title={'atrpharmacy@gmail.com'} id={'tip0'} place={'right'} />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h3 className='text-warning fw-bolder'>Call Us</h3>
                    <span className='text-secondary'>on Viber</span>
                    <BiSolidPhone size={72} data-tooltip-id='tip2'/>
                        <ToolTip title={'0917 838 1984'} id={'tip2'} place={'right'} />
                </div>
                <div className='d-flex flex-column align-items-center'>
                    <h3 className='text-warning fw-bolder'>Like our Page</h3>
                    <span className='text-secondary'>on Facebook</span>
                    <BiLogoFacebookCircle size={72} data-tooltip-id='tip1'/>
                        <ToolTip title={'ATR Skin Care & Pharmacy Inc.'} id={'tip1'} place={'right'} />
                </div>
            </section>
            <Footer />
        </main>
    )
}

export default ContactPage