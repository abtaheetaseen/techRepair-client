import React from 'react'
import useCart from '../../../hooks/useCart'
import { MdDeleteForever } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {

  const [cart, refetch] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.productPrice, 0);

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
        axiosSecure.delete(`/carts/${item._id}`)
        .then(res => {
          if(res.data.deletedCount > 0){
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your product has been deleted.",
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

      <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Date</th>
        <th>Time</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {
        cart?.map(item => (
          <tr key={item._id}>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item.productImage}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{item.productName.toUpperCase()}</div>
              </div>
            </div>
          </td>
          <td>
            ${item.productPrice}
          </td>
          <td>
            {item.date}
          </td>
          <td>
            {item.time}
          </td>
          <td>
            <button onClick={() => handleDelete(item)} className="btn bg-white border-none hover:bg-white btn-xs">
            <MdDeleteForever className='text-xl text-red-700' />
            </button>
          </td>
        </tr>
        ))
      }

    </tbody>

  </table>
</div>
      </div>

      <hr />

      <div className='text-right mt-5 p-5 card shadow-xl'>
        <h1 className='text-gray-600'>TOTAL ORDERS : <span className='text-gray-800 font-bold'>{cart?.length}</span></h1>
        <h1 className='text-gray-600 mb-3'>TOTAL PRICE : <span className='text-gray-800 font-bold'>${totalPrice}</span></h1>
        <div>
          {
            !cart.length ?
            <>
                    <button disabled className='w-full btn btn-sm border-none bg-blue-600 tracking-widest text-white hover:bg-blue-500'>
          Pay
        </button>
            </> :
            <>
        <Link to={"/dashboard/payment"}>
        <button className='w-full btn btn-sm border-none bg-blue-600 tracking-widest text-white hover:bg-blue-500'>
          Proceed
        </button>
        </Link>
            </>
          }

        </div>
      </div>

      </div>
    </div>
  )
}

export default Cart
