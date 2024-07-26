import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { MdDeleteForever } from 'react-icons/md';
// import Swal from 'sweetalert2';

const AllOrders = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allSuccessShopOrders = [], refetch} = useQuery({
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
    

  return (
    <div className='flex items-center justify-center my-[70px]'>

      <div>
        <div className='mb-8'>
            <h1 className='text-center text-3xl'>All Shop Orders : {allSuccessShopOrders?.length}</h1>
        </div>

        <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
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
      </div>
      </div>

    </div>
  )
}

export default AllOrders
