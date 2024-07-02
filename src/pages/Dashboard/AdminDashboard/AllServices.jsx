import React from 'react'
import useServices from '../../../hooks/useServices'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi';
import { FaEye } from 'react-icons/fa6';

const AllServices = () => {

    const [services, refetch] = useServices();
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
            axiosSecure.delete(`/services/${item._id}`)
            .then(res => {
              if(res.data.deletedCount > 0){
                refetch();
                Swal.fire({
                  title: "Deleted!",
                  text: "This service has been deleted.",
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
            <h1 className='text-center text-3xl'>Total Services : {services?.length}</h1>
        </div>

        <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Service Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

        {
            services?.map((item, index) =>       
            <tr key={item?._id}>
                <td>{index + 1}</td>
                <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={item.imageURL}
                    alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">{item.serviceName.toUpperCase()}</div>
              </div>
            </div>
          </td>
                <td>${item.price}</td>
                <td>
                    <Link to={`/dashboard/updateService/${item._id}`}>
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

          <td>
            <Link to={`/ourServices/${item._id}`}>
            <button>
            <FaEye className='text-lg' />
            </button>
            </Link>
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

export default AllServices
