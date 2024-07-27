import React, { useState } from 'react'
import Product from '../components/Product';
import useProducts from '../hooks/useProducts';

const Shop = () => {

    const [products, refetch, isLoading] = useProducts();

    const [search, setSearch] = useState("");

    if(isLoading){
      return <div className='flex items-center justify-center'>
      <div className="loading loading-infinity loading-lg min-h-screen "></div>
  </div> 
    }

  return (
    <>

    {/* search work */}
    <div className='my-[70px] w-5/12 mx-auto'>
                <form>
                    <label className="input input-bordered flex items-center gap-2">
                        <input onChange={(e) => setSearch(e.target.value)} type="text" className="grow" placeholder="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </form>
            </div>

    <div className='flex items-center justify-center mt-[70px]'>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
        {
            products?.filter((item) => {
              if (search == "") {
                  return item;
              } else if (item?.category?.toLowerCase().includes(search?.toLowerCase())) {
                  return item;
              }
          }).map(item => <Product key={item._id} item={item} />)
        }
      </div>
    </div>
    </>
  )
}

export default Shop
