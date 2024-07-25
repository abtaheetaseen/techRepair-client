import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdCancel } from 'react-icons/md';
import { GiConfirmed } from 'react-icons/gi';
import Swal from 'sweetalert2';
import { IoCloudDone } from 'react-icons/io5';

const AllServicesBookings = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allServicesBookings = [], refetch} = useQuery({
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

  return (
    <div className='flex items-center justify-center my-[70px]'>

<div>
  <div className='mb-8'>
      <h1 className='text-center text-3xl'>All Services Bookings : {allServicesBookings?.length}</h1>
  </div>

  <div>
<div className="overflow-x-auto">
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
</div>
</div>

</div>
  )
}

export default AllServicesBookings
