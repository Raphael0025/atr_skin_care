import React from 'react'

const CardItem = ({data}) => {
    const { image, name, price } = data
    return (
        <div className='card m-3 d-flex align-items-center border border-light border-3' id='item-card'>
            <img src={image} alt='prod' className='p-3' width='60%' />
            <div className='card-body w-100 rounded-2 detail text-light d-flex justify-content-between align-items-center'>
                <h3 className='card-title m-0 fs-4 text-wrap w-100'>{name}</h3>
                <p className='card-text w-50 text-end'>P {price}.00</p>
            </div>
        </div>
    )
}

export default CardItem