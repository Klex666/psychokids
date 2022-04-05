import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.sass';

const Slider = ({obj}) => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={3}
                >
                { obj.map((obj) => (
                    <SwiperSlide key={obj.id}>
                        <img className='slider__img' src={obj.url} alt="Img" height={300} width={300}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default Slider;