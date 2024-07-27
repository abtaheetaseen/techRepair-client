import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { MdAdminPanelSettings, MdBlock } from 'react-icons/md';
import { FaUserCheck } from 'react-icons/fa6';
import { IoIosUnlock } from 'react-icons/io';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allUsers = [], refetch, isLoading} = useQuery({
        queryKey: ["allUsers"],
        queryFn: async() => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
    
    const handleUserToAdmin = (user) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `${user.name.toUpperCase()} is Admin now`,
                            icon: "success"
                          });
                    }
                })
            }
          });
          
    }

    const handleAdminToUser = (user) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/user/${user._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `${user.name.toUpperCase()} is a User now`,
                            icon: "success"
                          });
                    }
                })
            }
          });
          
    }

    const handleBlockUser = (user) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, block user!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/blockUser/${user._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `${user.name.toUpperCase()}'s status is block`,
                            icon: "success"
                          });
                    }
                })
            }
          });
          
    }

    const handleActiveUser = (user) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, active user!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/activeUser/${user._id}`)
                .then(res => {
                    console.log(res.data)
                    if(res.data.modifiedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Updated",
                            text: `${user.name.toUpperCase()}'s status is active`,
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
    <>
    <div className='flex items-center justify-center my-[70px]'>

      <div>
        <div className='mb-8'>
            <h1 className='text-center text-3xl'>Total Users : {allUsers?.length}</h1>
        </div>

        <div>
      <div className="overflow-auto rounded-lg shadow hidden sm:block">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

        {
            allUsers?.map((user, index) =>       
            <tr key={user?._id}>
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.status}</td>

                <td className="tooltip" data-tip="admin">
                    {/* make admin */}
                    <button disabled={user?.role === "user" ? false : true}  onClick={() => handleUserToAdmin(user)}>
                    <MdAdminPanelSettings className='text-[30px] text-white border-2 rounded-full p-1 bg-blue-500 cursor-pointer' />
                    </button>
                </td>

                <td className="tooltip" data-tip="user">
                    {/* make user */}
                    <button disabled={user?.role === "user" ? true : false}  onClick={() => handleAdminToUser(user)}>
                    <FaUserCheck className='text-[30px] text-white border-2 rounded-full p-1 bg-yellow-500 cursor-pointer' />
                    </button>
                </td>

                <td className="tooltip" data-tip="block">
                    {/* block  */}
                    <button disabled={user?.status === "blocked" ? true : false}  onClick={() => handleBlockUser(user)}>
                    <MdBlock className='text-[30px] text-white border-2 rounded-full p-1 bg-red-500 cursor-pointer'/>
                    </button>
                </td>

                <td className="tooltip" data-tip="active">
                    {/* unblock */}
                    <button disabled={user?.status === "active" ? true : false}  onClick={() => handleActiveUser(user)}>
                    <IoIosUnlock className='text-[30px] text-white border-2 rounded-full p-1 bg-green-500 cursor-pointer' />
                    </button>
                </td>

            </tr>
            )
        }

    </tbody>
  </table>
</div>

{/* responsive table */}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:hidden">

        {
          allUsers.map((user, index) => 
            <div key={index} className="bg-white space-y-3 p-4 rounded-lg shadow">
  <div className="flex items-center space-x-2 text-sm">
    <div>
      <a href="" className="text-blue-800 font-medium bg-blue-200 py-1 px-2 rounded-full">{index + 1}</a>
    </div>
    <div className="text-gray-700 font-semibold">{user.email}</div>
  </div>
  <div className="text-sm text-gray-700 flex items-center justify-between">
    <p>Role: {user.role}</p>
    <p>Status: {user.status}</p>
  </div>
  <div className="text-sm text-black">
    <p className='font-medium mb-2'>Actions</p>
    <div className='flex items-end justify-between'>

    <div className="tooltip" data-tip="admin">
                    {/* make admin */}
                    <button disabled={user?.role === "user" ? false : true}  onClick={() => handleUserToAdmin(user)}>
                    <MdAdminPanelSettings className='text-[30px] text-white border-2 rounded-full p-1 bg-blue-500 cursor-pointer' />
                    </button>
                </div>

                <div className="tooltip" data-tip="user">
                    {/* make user */}
                    <button disabled={user?.role === "user" ? true : false}  onClick={() => handleAdminToUser(user)}>
                    <FaUserCheck className='text-[30px] text-white border-2 rounded-full p-1 bg-yellow-500 cursor-pointer' />
                    </button>
                </div>

                <div className="tooltip" data-tip="block">
                    {/* block  */}
                    <button disabled={user?.status === "blocked" ? true : false}  onClick={() => handleBlockUser(user)}>
                    <MdBlock className='text-[30px] text-white border-2 rounded-full p-1 bg-red-500 cursor-pointer'/>
                    </button>
                </div>

                <div className="tooltip" data-tip="active">
                    {/* unblock */}
                    <button disabled={user?.status === "active" ? true : false}  onClick={() => handleActiveUser(user)}>
                    <IoIosUnlock className='text-[30px] text-white border-2 rounded-full p-1 bg-green-500 cursor-pointer' />
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

    </>
  )
}

export default AllUsers
