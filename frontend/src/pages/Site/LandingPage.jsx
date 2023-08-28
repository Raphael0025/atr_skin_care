import React from 'react'
import { Home, Update, Service, Featured, Testimony, About, Contact } from '../../Sections'
import { Footer } from '../../Components'

const LandingPage = () => {
    return (
        <main className='mt-5 landingPage'>
            <Home />
            <Update />
            <Service />
            <Featured />
            <Testimony />
            <About />
            <Contact />
            <Footer />
        </main>
    )
}

export default LandingPage