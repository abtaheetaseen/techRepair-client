import React from 'react'
import useProducts from '../../../hooks/useProducts'
import { MdDeleteForever } from 'react-icons/md';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const AllProducts = () => {

    const [products, refetch, isLoading] = useProducts();
    const axiosSecure = useAxiosSecure();

    const handleDelete = (item) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/products/${item._id}`)
            .then(res => {
              if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "This order has been deleted.",
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
            <h1 className='text-center text-3xl'>Total Products : {products?.length}</h1>
        </div>

        <div>
      <div className="overflow-auto rounded-lg shadow hidden sm:block">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

        {
            products?.map((item, index) =>       
            <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{item.gadgetName.toUpperCase()}</div>
              </div>
            </div>
          </td>
                <td>${item.price}</td>
                <td>
                    <Link to={`/dashboard/updateProduct/${item._id}`}>
                    <button>
                    <FiEdit className='text-lg text-blue-600'/>
                    </button>
                    </Link>
                </td>
                <td>
            <button onClick={() => handleDelete(item)}>
            <MdDeleteForever className='text-xl text-red-700' />
            </button>
          </td>
            </tr>
            )
        }

    </tbody>
  </table>
</div>


{/* responsive products table */}
<div className="grid grid-cols-1 gap-4 sm:hidden">

        {
          products.map((item, index) => 
            <div key={index} className="bg-white space-y-3 p-4 rounded-lg shadow">
  <div className="flex flex-col items-center justify-center text-sm">
    <div className='mb-5'>
    <a href="" className="text-blue-800 font-medium bg-blue-200 py-1 px-2 rounded-full">{index + 1}</a>
    </div>
    <div className='flex flex-row items-center justify-center gap-2'>
    <div className="flex items-center justify-center gap-1">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item.image}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{item.gadgetName.toUpperCase()}</div>
              </div>
            </div>
    <div>
      <span
        className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">${item.price}</span>
    </div>
    </div>
  </div>

  <div className='flex items-center justify-center gap-5'>
  <div>
  <Link to={`/dashboard/updateProduct/${item._id}`}>
                    <button>
                    <FiEdit className='text-lg text-blue-600'/>
                    </button>
                    </Link>
                </div>
                <div>
                <button onClick={() => handleDelete(item)}>
            <MdDeleteForever className='text-xl text-red-700' />
            </button>
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

export default AllProducts
