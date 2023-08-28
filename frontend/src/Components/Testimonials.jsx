import React from 'react'
import { SliderCard } from '../Components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = ({contents}) => {
    const settings = {
        dots: false,
        speed: 500,
        arrows: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
    }
    return (
        <div className='container'>
            <Slider {...settings}>
            {
                contents.map((content, indx) => (
                    <SliderCard key={indx} data={content}/>
                ))
            }
            </Slider>
        </div>
    ) 
}

export default Testimonials