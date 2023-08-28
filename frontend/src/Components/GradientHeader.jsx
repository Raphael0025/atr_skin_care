import React from 'react'

const GradientHeader = ({title}) => {
  return (
    <div className='d-flex'>
      <div className='bg px-3 rounded-3 mb-3'>
        <h1 className='text-uppercase text-center p-3 m-0 head'>{title}</h1>
      </div>
    </div>
  )
}

export default GradientHeader