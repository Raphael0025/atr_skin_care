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
          <ToolTip title={'GMail'} id={'tip0'} />
        <BiLogoFacebookCircle size={72} data-tooltip-id='tip1'/>
          <ToolTip title={'Facebook'} id={'tip1'} />
        <BiSolidPhone size={72} data-tooltip-id='tip2'/>
          <ToolTip title={'Contact'} id={'tip2'} />
      </div>
    </section>
  )
}

export default Contact