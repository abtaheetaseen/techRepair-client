import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdCancel } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import Swal from 'sweetalert2';
import { IoCloudDone } from 'react-icons/io5';

const AllServicesBookings = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allServicesBookings = [], refetch, isLoading} = useQuery({
        queryKey: ["allServicesBookings"],
        queryFn: async() => {
            const res = await axiosSecure.get(`/allServices-bookings`)
            return res.data;
        }
    })

    const handleConfirm = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, confirm"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/allServices-bookings/confirmBooking/${item._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `Service is confirmed`,
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    const handleCancel = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/allServices-bookings/cancelBooking/${item._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `Service is canceled`,
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    const handleDelivered = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Preceed"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/allServices-bookings/deliveredBooking/${item._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `Service is delivered`,
                            icon: "success"
                          });
                    }
                })
            }
          });
    }

    if(isLoading){
      return <div className='flex items-center justify-center'>
      <div className="loading loading-infinity loading-lg min-h-screen "></div>
  </div> 
    }

  return (
    <div className='flex items-center justify-center my-[70px]'>

<div>
  <div className='mb-8'>
      <h1 className='text-center text-3xl'>All Services Bookings : {allServicesBookings?.length}</h1>
  </div>

  <div>
<div className="overflow-auto rounded-lg shadow hidden md:block">
<table className="table">
{/* head */}
<thead>
<tr>
  <th></th>
  <th>Email</th>
  <th>Service</th>
  <th>Provided At</th>
  <th>Price</th>
  <th>Status</th>
  <th>Actions</th>
</tr>
</thead>
<tbody>

  {
      allServicesBookings?.map((item, index) =>       
      <tr key={item?._id}>
          <td>{index + 1}</td>
          <td>{item.email}</td>
          <td>{item.serviceName}</td>
          <td>{item.take_service_at}</td>
          <td>${item.price}</td>
          <td>{item.status}</td>
          <td className="tooltip" data-tip="confirm">
            <button  disabled={item.status === "confirm" ? true : false} onClick={() => {handleConfirm(item)}} className='cursor-pointer'>
            <GiConfirmed className='text-xl text-green-500' />
            </button>
          </td>
          <td className="tooltip" data-tip="cancel">
            <button disabled={item.status === "canceled" ? true : false} onClick={() => {handleCancel(item)}} className='cursor-pointer'>
            <MdCancel className='text-xl text-red-700' />
            </button>
          </td>
          <td className="tooltip" data-tip="delivered">
            <button disabled={item.status === "delivered" ? true : false} onClick={() => {handleDelivered(item)}} className='cursor-pointer'>
            <IoCloudDone className='text-xl text-blue-500' />
            </button>
          </td>
      </tr>
      )
  }

</tbody>
</table>
</div>


            {/* responsive services bookings table */}
<div className="grid grid-cols-1 gap-4 md:hidden">

{
  allServicesBookings?.map((item, index) => 
    <div key={index} className="bg-white space-y-3 p-4 rounded-lg shadow">
<div className="flex flex-col items-start justify-start text-sm">
<div className='mb-5'>
<a href="" className="text-blue-800 font-medium bg-blue-200 py-1 px-2 rounded-full">{index + 1}</a>
</div>

<div className='flex items-center justify-between gap-3'>
    <div>
      {item.email}
    </div>

    <div>
    <span
        className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">${item.price}
    </span>
    </div>
</div>

<div className='my-3'>
<div>
  <span className='font-bold'>Service Name :</span> {item.serviceName}
</div>

<div>
<span className='font-bold'>Delivered At :</span> {item.take_service_at}
</div>
</div>

<div
        className={`p-1.5 text-xs font-medium uppercase tracking-wider ${item.status === "delivered" && "text-green-800 bg-green-200 "} ${item.status === "confirm" && "text-yellow-800 bg-yellow-200"} ${item.status === "pending" && "text-blue-800 bg-blue-200"} rounded-lg bg-opacity-50`}>{item.status}
    </div>

<div className='flex items-center justify-center gap-3 my-3'>

<div className='font-bold'>
  Actions : 
</div>

    <div className="tooltip" data-tip="confirm">
            <button  disabled={item.status === "confirm" ? true : false} onClick={() => {handleConfirm(item)}} className='cursor-pointer'>
            <GiConfirmed className='text-xl text-green-500' />
            </button>
          </div>
          <div className="tooltip" data-tip="cancel">
            <button disabled={item.status === "canceled" ? true : false} onClick={() => {handleCancel(item)}} className='cursor-pointer'>
            <MdCancel className='text-xl text-red-700' />
            </button>
          </div>
          <div className="tooltip" data-tip="delivered">
            <button disabled={item.status === "delivered" ? true : false} onClick={() => {handleDelivered(item)}} className='cursor-pointer'>
            <IoCloudDone className='text-xl text-blue-500' />
            </button>
          </div>
          </div>

</div>

</div>
  )
}

</div>


</div>
</div>

</div>
  )
}

export default AllServicesBookings
