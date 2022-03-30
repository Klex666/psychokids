import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.sass';

const imgData = [
    {
        id: 1,
        url: 'https://sun9-30.userapi.com/impg/c857536/v857536962/15a660/t8MFb7kjMwo.jpg?size=520x0&quality=95&sign=f2e2775c566153524b6af25cd4f49817'

    },
    {
        id: 2,
        url: 'https://sun2-10.userapi.com/impf/X8eE1ReTKIPbVDp_jX-URfynweVgs9rWBX2ZqQ/1TIeTDlzgc0.jpg?size=520x0&quality=95&sign=e920d6a9c6c57f80575f9bd4fff6f541'
    },
    {
        id: 3,
        url: 'https://sun2-11.userapi.com/impg/xbUJCppKkRhG5vbv0-n8KCG8lhsblnstxmdWYg/l0Iivxi7UhU.jpg?size=520x0&quality=95&sign=42c8bd242264d3d6df4a17c2e2c0b593'
    },
    {
        id: 4,
        url: 'https://sun9-12.userapi.com/impf/c858232/v858232460/9b88c/gkQVyErGPz4.jpg?size=520x0&quality=95&sign=844399f323b8ae40397a5b8ce8bdd7a1'
    },
    {
        id: 5,
        url: 'https://sun2-3.userapi.com/impg/taa19wgf25MjNhXfaBGFvuz7DA4o-5W2MqE_nw/LZ3ZEnIjJBw.jpg?size=520x0&quality=95&sign=a0c887a73a4d58761fa79b3bf909967f'
    }
]



const Slider = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={3}
                >
                { imgData.map((obj) => (
                    <SwiperSlide className='slider__img' key={obj.id}>
                        <img src={obj.url} alt="Img" height={300} width={300}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>

    );
};

export default Slider;