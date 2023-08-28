import React from 'react'
import {GradientHeader} from '../Components'
import filler from '../assets/extra/blog.png'
import { BsClockFill, BsBookFill } from 'react-icons/bs'
import { BiShare } from 'react-icons/bi'

const Services = () => {
  return (
    <section className='p-5 gap-5 container'>
      <GradientHeader title={'Services'} />
      <div className='p-3 gap-5 d-flex rounded-4 transparent-container border border-warning border-4'>
        <div className='rounded-3 p-4 bg-warning d-flex justify-content-center align-items-center '>
          <img src={filler} alt='blog' />
        </div>
        <div className='py-3 pe-3'>
          <div className='border-top border-bottom border-warning border-3 py-2'>
            <h2 className='mb-3 fw-medium'>Sample Title</h2>
            <p className='fs-6'><BsClockFill className='text-warning'/> Monday, May 17, 2021</p>
            <p className='trunc'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className='gap-3 d-flex pt-4'>
            <button className='btn btn-outline-warning'><BsBookFill /> Read</button>
            <button className='btn btn-outline-warning'><BiShare className='flip' /> Share</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services