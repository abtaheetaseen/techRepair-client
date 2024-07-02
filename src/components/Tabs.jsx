import React from 'react'
import '../App.css';
import { FaCamera, FaFan, FaKeyboard, FaMicrophone, FaMobileScreenButton, FaPowerOff } from "react-icons/fa6";
import { RiBattery2ChargeFill } from 'react-icons/ri';
import { IoRadioButtonOnSharp } from 'react-icons/io5';
import { HiComputerDesktop, HiSpeakerWave } from 'react-icons/hi2';
import { FiBatteryCharging } from 'react-icons/fi';
import { MdCleaningServices, MdOutlineScreenshotMonitor, MdPowerOff } from 'react-icons/md';

const Tabs = () => {
  return (
    <>

<div className='text-center w-10/12 mx-auto my-[50px]'>
        <h1 className='text-3xl font-extrabold mb-3'>We Fix All Devices</h1>
        <p>Best solutions for your PC needs. Prompt, Reliable Service. Your computer doctor, technologically speaking. We talk to computers so you don't have to.</p>
    </div>

<div role="tablist" className="tabs tabs-bordered w-10/12 mx-auto">

    {/* tab 1 */}
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="PHONE" />
  <div role="tabpanel" className="tab-content p-10 bg-tab1 mt-5">
    <div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaMobileScreenButton className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>CRACKED SCREEN</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <RiBattery2ChargeFill className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>BROKEN CHARGING PORT</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaMicrophone className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>MICROPHONE DOESN'T WORK</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <IoRadioButtonOnSharp className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>FAULTY HOME BUTTON</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <HiSpeakerWave className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD EAR SPEAKER</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaCamera className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD CAMERA</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaPowerOff className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>FAULTY POWER BUTTON</h1>
        </div>

        <div className='flex flex-row gap-2'>
            <div className=''>
        <FiBatteryCharging className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD BATTERY</h1>
        </div>

    </div>
  </div>

    {/* tab 2 */}
  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="TABS"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-10 bg-tab3 mt-5">
    <div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaMobileScreenButton className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>CRACKED SCREEN</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <RiBattery2ChargeFill className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>BROKEN CHARGING PORT</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaMicrophone className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>MICROPHONE DOESN'T WORK</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <IoRadioButtonOnSharp className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>FAULTY HOME BUTTON</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <HiSpeakerWave className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD EAR SPEAKER</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaCamera className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD CAMERA</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaPowerOff className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>FAULTY POWER BUTTON</h1>
        </div>

        <div className='flex flex-row gap-2'>
            <div className=''>
        <FiBatteryCharging className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD BATTERY</h1>
        </div>

    </div>
  </div>

    {/* tab 3 */}
  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="COMPUTER" />
  <div role="tabpanel" className="tab-content p-10 bg-tab2 mt-5">
    <div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <HiComputerDesktop className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DIAGONOSING YOUR DEVICE</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <MdOutlineScreenshotMonitor className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>SCREEN REPAIR</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <MdPowerOff className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>POWER JACK REPLACEMENT</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaKeyboard className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>KEYBOARD REPLACEMENT</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <MdCleaningServices className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>CLEANING SERVICE</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaCamera className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>DEAD CAMERA</h1>
        </div>

        <div className='flex flex-row gap-2 mb-10'>
            <div className=''>
        <FaFan className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>FAN REPLACEMENT</h1>
        </div>

        <div className='flex flex-row gap-2'>
            <div className=''>
        <FiBatteryCharging className='text-[35px] text-white border-none rounded-full p-1 bg-blue-500' />
        </div>
        <h1 className='flex items-center justify-center text-white'>BATTERY REPLACEMENT</h1>
        </div>

    </div>
  </div>


</div>
</>
  )
}

export default Tabs
