import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Reviews = () => {

    const axiosPublic = useAxiosPublic();

    const {data: reviews = []} = useQuery({
        queryKey: ["reviews"],
        queryFn: async() => {
            const res = await axiosPublic.get("/reviews");
            return res.data;
        }
    })

  return (
    <>
          <div className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Customer Reviews</h1>
        <p>Best solutions for your PC needs. Prompt, Reliable Service. Your computer doctor, technologically speaking. We talk to computers so you don't have to.</p>
    </div>

    <div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {
            reviews?.map(review => <SwiperSlide key={review._id}>
                <div className='w-9/12 mx-auto flex flex-col gap-3 items-center'>
                <Rating style={{maxWidth: 150}} value={review.rating} readOnly />
                    <h2 className='font-semibold text-xl'>{review.name.toUpperCase()}</h2>
                    <p className='text-center'>{review.description}</p>
                </div>
            </SwiperSlide>)
        }
      </Swiper>
    </div>
    </>
  )
}

export default Reviews
