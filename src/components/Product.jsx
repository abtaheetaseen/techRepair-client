import React, { useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import Swal from 'sweetalert2';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useCart from '../hooks/useCart';
import toast from 'react-hot-toast';
import moment from 'moment';

const Product = ({item}) => {

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if(user && user?.email){
            const cartItem = {
                productId: item._id,
                email: user?.email,
                productName: item.gadgetName,
                productPrice: parseFloat(item.price),
                productImage: item.image,
                status: "pending",
                date: moment().format('MMMM Do YYYY'),
                time: moment().format('h:mm a'),
            }

            axiosSecure.post("/carts", cartItem)
            .then(res => {

                if(res.data.insertedId){
                    toast.success(`${item.gadgetName.toUpperCase()} added to cart`)

                    //   refetch the cart
                    refetch();
                }
            })

        } else {
            Swal.fire({
                title: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Please, Login"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login", {state: {from: location}})
                }
              });
        }
    }

  return (
<div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-xl border-t-2 border-gray-500 hover:scale-105 duration-300">
    <div className="px-4 py-2">
        <h1 className="text-md font-bold text-gray-800">{item.gadgetName}</h1>
        <div className='mt-2'>
        {
            item.description.map((item, index) => <li className='text-xs text-gray-700' key={index}>{item}</li>)
        }
        </div>
    </div>

    <img className="object-cover w-full h-48 mt-2" src={item.image} alt="NIKE AIR" />

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${item.price}</h1>
        <Link>
        <button onClick={handleAddToCart} className="btn btn-xs border-none px-2 py-1 text-md font-semibold text-white bg-blue-600 rounded hover:bg-blue-500">Add To Cart</button>
        </Link>
    </div>
</div>
  )
}

export default Product
