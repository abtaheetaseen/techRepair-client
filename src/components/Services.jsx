import React from 'react'
import { IoHardwareChip } from "react-icons/io5";
import { BsVirus } from "react-icons/bs";
import { GiComputerFan } from "react-icons/gi";

const Services = () => {
  return (
<>
    <div className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>Services We Offer</h1>
        <p>Best solutions for your PC needs. Prompt, Reliable Service. Your computer doctor, technologically speaking. We talk to computers so you don't have to.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto my-[50px] md:gap-10 lg:gap-10'>

        <div className='p-5 shadow-2xl border-white border-2 hover:border-b-blue-500 mb-10'>
        <div className='flex items-center justify-center'>
        <GiComputerFan className='text-[100px] text-white border-2 rounded-full p-5 mb-3 bg-blue-500' />
        </div>
        <h1 className='text-xl font-medium text-center mb-3'>Professional Computer Repair</h1>
        <p className='text-center'>Macintosh. It Does More. It Costs Less. Itss that Simple. Why call a geek, When you can call a professional? Your computer doctor, technologically speaking.</p>
        </div>

        <div className='p-5 shadow-2xl border-white border-2 hover:border-b-blue-500 mb-10'>
        <div className='flex items-center justify-center'>
        <BsVirus className='text-[100px] text-white border-2 rounded-full p-5 mb-3 bg-blue-500' />
        </div>
        <h1 className='text-xl font-medium text-center mb-3'>Virus & Spyware Removal</h1>
        <p className='text-center'>Macintosh. It Does More. It Costs Less. Itss that Simple. Why call a geek, When you can call a professional? Your computer doctor, technologically speaking.</p>
        </div>

        <div className='p-5 shadow-2xl border-white border-2 hover:border-b-blue-500 mb-10'>
            <div className='flex items-center justify-center'>
        <IoHardwareChip className='text-[100px] text-white border-2 rounded-full p-5 mb-3 bg-blue-500'/>
        </div>
        <h1 className='text-xl font-medium text-center mb-3'>Hardware & Software Installation</h1>
        <p className='text-center'>Macintosh. It Does More. It Costs Less. Itss that Simple. Why call a geek, When you can call a professional? Your computer doctor, technologically speaking.</p>
        </div>

    </div>
    </>
  )
}

export default Services
