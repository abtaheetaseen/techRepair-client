import React from 'react'
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';

const Shop = () => {

    const [products, refetch, isLoading] = useProducts();

    if(isLoading){
      return <div className='flex items-center justify-center'>
      <div className="loading loading-infinity loading-lg min-h-screen "></div>
  </div> 
    }

  return (
    <div className='flex items-center justify-center mt-[70px]'>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
        {
            products?.map(item => <Product key={item._id} item={item} />)
        }
      </div>
    </div>
  )
}

export default Shop
