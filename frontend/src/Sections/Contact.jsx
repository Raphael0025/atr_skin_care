import React from 'react'
import {GradientHeader, ToolTip} from '../Components'
import {HiMail} from 'react-icons/hi'
import { BiLogoFacebookCircle, BiSolidPhone } from 'react-icons/bi'

const Contact = () => {
  return (
    <section className='p-5 gap-5 d-flex justify-content-center align-items-center flex-column'>
      <GradientHeader title={'Contact Us'} />
      <div className='gap-5 d-flex '>
        <HiMail size={72} data-tooltip-id='tip0' />
          <ToolTip title={'atrpharmacy@gmail.com'} id={'tip0'} place={'bottom'} />
        <BiLogoFacebookCircle size={72} data-tooltip-id='tip1'/>
          <ToolTip title={'ATR Skin Care & Pharmacy Inc.'} id={'tip1'} place={'bottom'} />
        <BiSolidPhone size={72} data-tooltip-id='tip2'/>
          <ToolTip title={'0917 838 1984'} id={'tip2'} place={'bottom'} />
      </div>
    </section>
  )
}

export default Contact