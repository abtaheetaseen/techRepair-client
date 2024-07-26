import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner-bg flex items-center justify-center'>
    <div data-aos="fade-right" className='text-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-widest'>Fast, Reliable & Affordable</h1>
        <p className='text-white w-9/12 mx-auto my-5'>We'll have your phone looking and working like new. Trust our team to restore your phone's functionality</p>
        <div className='flex items-center justify-center gap-5'>
            <div>
                <Link to="/ourServices">
                    <button className='btn btn-sm bg-blue-600 text-white hover:bg-blue-500 border-none'>Fix It</button>
                </Link>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner
