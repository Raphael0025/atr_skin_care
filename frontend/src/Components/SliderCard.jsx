import React from 'react'
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi'

const SliderCard = ({data}) => { 
    return (
        <div className='rounded-4 p-5 mx-3 gap-3 transparent-bg border border-dark border-2 d-flex'>
            {data.icon}
            <div className='justify-content-center  d-flex flex-column'>
                <div>
                    <BiSolidQuoteLeft size={32}/> 
                    <p className='fs-5'><span className='pe-4 text-dark'>{data.review}</span> <BiSolidQuoteRight size={32}/></p>
                </div>
                <figcaption className='text-end blockquote-footer mt-3 text-dark'>{data.name}</figcaption>
            </div>
        </div>
    )
}

export default SliderCard