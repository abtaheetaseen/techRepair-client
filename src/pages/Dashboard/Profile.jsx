import React, { useContext } from 'react'
import { AuthContext } from '../../provider/AuthProvider'
import useAdmin from '../../hooks/useAdmin';

const Profile = () => {

    const {user} = useContext(AuthContext);

    const [isAdmin] = useAdmin();

  return (
    <div class="min-h-screen flex flex-wrap items-center  justify-center">
            <div class="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white shadow-lg transform duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div class="flex justify-center px-5  -mt-12">
                    <img class="h-32 w-32 bg-white p-2 rounded-full" src={user.photoURL} alt="" />

                </div>
                <div class=" ">
                    <div class="text-center px-14">
                        <h2 class="text-gray-800 text-3xl font-bold">{user.displayName.toUpperCase()}</h2>
                        <p class="mt-2 text-gray-500 text-md">{user.email}</p>
                    </div>
                    <hr class="mt-6" />
                    <div class="flex  bg-gray-50 ">
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p>Tech Repair</p>
                        </div>
                        <div class="border"></div>
                        <div class="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer">
                            <p>
                                {
                                    isAdmin ? "Admin" : "User"
                                }
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile
