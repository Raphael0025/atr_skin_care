import React from 'react'
import { BsFillHandbagFill } from 'react-icons/bs'
import img from '../../src/assets/extra/DOOR.png'

const Home = () => {
  return (
    <section className='home pt-3 d-flex gap-3'>
      <div>
        <img src={img} alt='' className='atr-img' height='100%' />
      </div>
      <div className='ps-5 pt-5 col-5 text-uppercase '>
        <h1 className='text-light display-4 mb-5' >Discover your Skin's True <span className='highlight'>Potential</span></h1>
        <h4 className='mb-5 text-light'>Elevate Your Skin Care With Us!</h4>
        <button id='orderBtn' className='btn btn-lg text-uppercase btn-outline-light'><BsFillHandbagFill /> Order Now</button>
      </div>
    </section>
  )
}

export default Home