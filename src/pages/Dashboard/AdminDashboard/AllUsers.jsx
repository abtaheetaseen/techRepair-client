import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { MdAdminPanelSettings, MdBlock } from 'react-icons/md';
import { FaUserCheck } from 'react-icons/fa6';
import { IoIosUnlock } from 'react-icons/io';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const {data: allUsers = [], refetch} = useQuery({
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

  return (
    <div className='flex items-center justify-center my-[70px]'>

      <div>
        <div className='mb-8'>
            <h1 className='text-center text-3xl'>Total Users : {allUsers?.length}</h1>
        </div>

        <div>
      <div className="overflow-x-auto">
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
                <td>
                    {/* make admin */}
                    <button disabled={user?.role === "user" ? false : true}  onClick={() => handleUserToAdmin(user)}>
                    <MdAdminPanelSettings className='text-[30px] text-white border-2 rounded-full p-1 bg-blue-500 cursor-pointer' />
                    </button>
                </td>

                <td>
                    {/* make user */}
                    <button disabled={user?.role === "user" ? true : false}  onClick={() => handleAdminToUser(user)}>
                    <FaUserCheck className='text-[30px] text-white border-2 rounded-full p-1 bg-yellow-500 cursor-pointer' />
                    </button>
                </td>

                <td>
                    {/* block  */}
                    <button disabled={user?.status === "blocked" ? true : false}  onClick={() => handleBlockUser(user)}>
                    <MdBlock className='text-[30px] text-white border-2 rounded-full p-1 bg-red-500 cursor-pointer'/>
                    </button>
                </td>

                <td>
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
      </div>
      </div>

    </div>
  )
}

export default AllUsers
