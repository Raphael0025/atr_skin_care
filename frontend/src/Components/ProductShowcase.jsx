import React from 'react'
import { CardItem } from '../Components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProductShowcase = ({productData}) => {
    const settings = {
        dots: false,
        speed: 500,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 3,
    }
    return (
        <div className='container p-3'>
            <Slider {...settings}>
            {productData.map((product, indx) => (
                <CardItem key={indx} data={product} />
            ))}
            </Slider>
        </div>
    )
}

export default ProductShowcase