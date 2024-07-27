import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
// import { MdDeleteForever } from 'react-icons/md';
// import Swal from 'sweetalert2';

const AllOrders = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allSuccessShopOrders = [], refetch, isLoading} = useQuery({
        queryKey: ["allShopOrders"],
        queryFn: async() => {
            const res = await axiosSecure.get("/allSuccessShopOrders")
            return res.data;
        }
    })

    // const handleDelete = (item) => {
    //     Swal.fire({
    //       title: "Are you sure?",
    //       text: "You won't be able to revert this!",
    //       icon: "warning",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#d33",
    //       confirmButtonText: "Yes, delete it!"
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         axiosSecure.delete(`/allShopOrders/${item._id}`)
    //         .then(res => {
    //           if(res.data.deletedCount > 0){
    //             refetch();
    //             Swal.fire({
    //               title: "Deleted!",
    //               text: "This order has been deleted.",
    //               icon: "success"
    //             });
    //           }
              
    //         })
    //       }
    //     });
    //   }
    
    if(isLoading){
      return <div className='flex items-center justify-center'>
      <div className="loading loading-infinity loading-lg min-h-screen "></div>
  </div> 
    }

  return (
    <div className='flex items-center justify-center my-[70px]'>

      <div>
        <div className='mb-8'>
            <h1 className='text-center text-3xl'>All Shop Orders : {allSuccessShopOrders?.length}</h1>
        </div>

        <div>
      <div className="overflow-auto rounded-lg shadow hidden md:block">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Cus_Email</th>
        <th>Total Amount</th>
        <th>Transaction ID</th>
        <th>Date</th>
        <th>Time</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>

        {
            allSuccessShopOrders?.map((item, index) =>       
            <tr key={item?._id}>
                <th>{index + 1}</th>
                <td>{item.cus_ordered_products_name?.map((name, index) => <p key={index} className='italic'>*{name}*</p>)}</td>
                <td>{item.cus_email}</td>
          <td>${item.total_amount}</td>
          <td>{item.tran_id}</td>
          <td>{item.date}</td>
          <td>{item.time}</td>
          <td>{item.status}</td>
            </tr>
            )
        }

    </tbody>
  </table>
</div>

        {/* responsive success orders table */}
<div className="grid grid-cols-1 gap-4 md:hidden">

{
  allSuccessShopOrders?.map((item, index) => 
    <div key={index} className="bg-white space-y-3 p-4 rounded-lg shadow">
<div className="flex flex-col items-start justify-start text-sm">
<div className='mb-5'>
<a href="" className="text-blue-800 font-medium bg-blue-200 py-1 px-2 rounded-full">{item.tran_id}</a>
</div>

<div className='mb-3'>
  <span className='font-bold'>Customer : </span>{item.cus_email}
</div>

<div className='flex items-center justify-between gap-3'>
    <div>
      {item.cus_ordered_products_name?.map((name, index) => <p key={index} className='italic'>*{name}*</p>)}
    </div>

    <div>
    <span
        className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">${item.total_amount}
    </span>
    </div>
</div>

<div className='my-3'>
  {item.date}, {item.time}
</div>

<div>
<span
        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{item.status}
    </span>
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

export default AllOrders
