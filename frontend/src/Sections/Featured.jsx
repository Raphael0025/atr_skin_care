import React from 'react'
import { GradientHeader, ProductShowcase } from '../Components'
import img1 from '../assets/products/MOISTURING_BAR_SOAP.png'
import img2 from '../assets/products/WHITENING_BAR_SOAP.png'
import img3 from '../assets/products/TETRINOIN_0.025_CREAM.png'

const Featured = () => {
  const products = [
    {
      id: 1,
      name: 'MOISTURING BAR SOAP',
      image: img1,
      price: 150
    },
    {
      id: 2,
      name: 'WHITENING BAR SOAP',
      image: img2,
      price: 150
    },
    {
      id: 3,
      name: 'TETRINOIN 0.025 CREAM',
      image: img3,
      price: 150
    },
    {
      id: 4,
      name: 'TETRINOIN 0.025 CREAM',
      image: img3,
      price: 150
    }
  ]
  return (
    <section className='p-5 gap-5 container'>
      <GradientHeader title={'Best Sellers'} />
      <div className='p-3 gap-5 container '>
        <ProductShowcase productData={products}/>
      </div>
    </section>
  )
}

export default Featured