"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { serviceData } from '@/data';

const SliderServices = () => {
    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 15
                }
            }}
            freeMode={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-[280px] md:h-[340px] w-[270px] md:w-[550px]"
        >
            {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                    <div className="flex flex-col px-6 py-8 rounded-lg bg-[rgba(65,47,123,0.15)] hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 border-2 hover:border-secondary">
                        <div className="mb-4 text-4xl text-secondary">{item.icon}</div>
                        <div>
                            <h3 className="mb-4 text-lg">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderServices;
