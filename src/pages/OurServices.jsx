import React from 'react'
import OurServicesTab from '../components/OurServicesTab';
import useServices from '../hooks/useServices';

const OurServices = () => {

    const [services] = useServices();

    const tabletServices = services.filter(item => item.category === "Tablet");
    
    const smartphoneServices = services.filter(item => item.category === "Smartphone");

    const laptopServices = services.filter(item => item.category === "Laptop");

    const desktopServices = services.filter(item => item.category === "Desktop");

  return (
<div role="tablist" className="tabs tabs-bordered lg:w-10/12 lg:mx-auto md:w-10/12 md:mx-auto mt-[70px]">



  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="SMARTPHONE" />
  <div role="tabpanel" className="tab-content p-10">
    <div className='flex items-center justify-center'>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
    {
        smartphoneServices?.map(item => <OurServicesTab item={item} key={item._id} />)
    }
    </div>
  </div>
  </div>



  <input
    type="radio"
    name="my_tabs_1"
    role="tab"
    className="tab"
    aria-label="TABLET"
    defaultChecked />
  <div role="tabpanel" className="tab-content p-10">
  <div className='flex items-center justify-center'>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
    {
        tabletServices?.map(item => <OurServicesTab item={item} key={item._id} />)
    }
    </div>
  </div>
  </div>



  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="LAPTOP" />
  <div role="tabpanel" className="tab-content p-10">
  <div className='flex items-center justify-center'>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
    {
        laptopServices?.map(item => <OurServicesTab item={item} key={item._id} />)
    }
    </div>
  </div>
  </div>


  <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="DESKTOP" />
  <div role="tabpanel" className="tab-content p-10">
  <div className='flex items-center justify-center'>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
    {
        desktopServices?.map(item => <OurServicesTab item={item} key={item._id} />)
    }
    </div>
  </div>
  </div>



</div>
  )
}

export default OurServices
