import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { BsThreeDots } from 'react-icons/bs';

const MyServices = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data: myServiceOrders = []} = useQuery({
        queryKey: ["myServiceOrders", user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/service-orders?email=${user?.email}`)
            return res.data;
        }
    })

  return (
<div className='flex items-center justify-center my-[70px]'>

<div>
  <div className='mb-8'>
      <h1 className='text-center text-3xl'>Your Service Bookings : {myServiceOrders?.length}</h1>
  </div>

  <div>
<div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
<tr>
  <th></th>
  <th>Service</th>
  <th>Provided At</th>
  <th>Price</th>
  <th>Status</th>
</tr>
</thead>
<tbody>

  {
      myServiceOrders?.map((item, index) =>       
      <tr key={item?._id}>
          <th>{index + 1}</th>
          <td>{item.serviceName}</td>
          <td>{item.take_service_at}</td>
          <td>${item.price}</td>
          <td>{item.status}</td>
      </tr>
      )
  }

</tbody>
</table>
</div>
</div>
</div>

</div>
  )
}

export default MyServices
