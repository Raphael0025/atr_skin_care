import React from 'react'
import { SideBar, GradientHeader } from '../../Components'

const AboutPage = () => {


    return (
        <main className='container-fluid con d-flex mt-0 pt-2 p-0 m-0'>
            <SideBar props={'bg-secondary col-2 pt-5 text-light user-aside position-fixed h-100'}>
                <ul className='navbar-nav gap-3 pt-5'>
                    <li className='nav-item p-2 px-4' >About Us</li>
                    <li className='nav-item p-2 px-4' >Operational Hours</li>
                </ul>
            </SideBar>
            <section className='container-fluid bg-warning p-3 mt-5' style={{marginLeft: '16.5%'}}>
                <GradientHeader title={'About Us'} />
                
            </section>
        </main>
    )
}

export default AboutPage