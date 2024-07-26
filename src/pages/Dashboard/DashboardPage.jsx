import React from 'react'
import useAdmin from '../../hooks/useAdmin'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { CiDollar, CiUser } from 'react-icons/ci';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa6';
import { LiaProductHunt } from 'react-icons/lia';
import { TbBrandBooking, TbHexagonLetterS } from 'react-icons/tb';

const DashboardPage = () => {

    const axiosSecure = useAxiosSecure();

    const [isAdmin] = useAdmin();

    const {data: stats} = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async() => {
            const res = await axiosSecure("/admin-stats");
            return res.data;
        }
    })

  return (
    <div>
      {
        isAdmin && 
        <>
            <div>
                <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                    
                    {/* total users */}
                    <div className='shadow-lg p-5 rounded-xl'>
                    <CiUser className='text-blue-500 bg-gray-100 text-[50px] p-2 rounded-full' />
                    <h1 className='text-2xl font-bold mt-1'>{stats?.users}</h1>
                    <div className='flex items-center justify-between'>
                    <p>Total Users</p>
                    <div className='flex items-center justify-center gap-2 text-green-500'>
                    <p>0.43%</p>
                    <FaArrowUp />
                    </div>
                    </div>
                    </div>

                    {/* total services */}
                    <div className='shadow-lg p-5 rounded-xl'>
                    <TbHexagonLetterS className='text-blue-500 bg-gray-100 text-[50px] p-2 rounded-full' />
                    <h1 className='text-2xl font-bold mt-1'>{stats?.services}</h1>
                    <div className='flex items-center justify-between'>
                    <p>Total Services</p>
                    <div className='flex items-center justify-center gap-2 text-red-500'>
                    <p>0.12%</p>
                    <FaArrowDown />
                    </div>
                    </div>
                    </div>

                    {/* total products */}
                    <div className='shadow-lg p-5 rounded-xl'>
                    <LiaProductHunt className='text-blue-500 bg-gray-100 text-[50px] p-2 rounded-full' />
                    <h1 className='text-2xl font-bold mt-1'>{stats?.products}</h1>
                    <div className='flex items-center justify-between'>
                    <p>Total Products</p>
                    <div className='flex items-center justify-center gap-2 text-red-500'>
                    <p>0.25%</p>
                    <FaArrowDown />
                    </div>
                    </div>
                    </div>

                    {/* total service bookings */}
                    <div className='shadow-lg p-5 rounded-xl'>
                    <TbBrandBooking className='text-blue-500 bg-gray-100 text-[50px] p-2 rounded-full' />
                    <h1 className='text-2xl font-bold mt-1'>{stats?.totalServicesBookings}</h1>
                    <div className='flex items-center justify-between'>
                    <p>Total Service Bookings</p>
                    <div className='flex items-center justify-center gap-2 text-green-500'>
                    <p>0.35%</p>
                    <FaArrowUp />
                    </div>
                    </div>
                    </div>

                    {/* total revenue */}
                    <div className='shadow-lg p-5 rounded-xl'>
                    <CiDollar className='text-blue-500 bg-gray-100 text-[50px] p-2 rounded-full' />
                    <h1 className='text-2xl font-bold mt-1'>${stats?.totalRevenue}</h1>
                    <div className='flex items-center justify-between'>
                    <p>Total Revenue</p>
                    <div className='flex items-center justify-center gap-2 text-green-500'>
                    <p>0.25%</p>
                    <FaArrowUp />
                    </div>
                    </div>
                    </div>

                </div>
            </div>
        </>
      }
    </div>
  )
}

export default DashboardPage
