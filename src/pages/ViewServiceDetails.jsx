import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ViewServiceDetails = () => {

    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const item = useLoaderData();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const category = form.category.value;
        const serviceName = form.serviceName.value;
        const phoneNumber = parseInt(form.phoneNumber.value);
        const address = form.address.value;
        const date = form.date.value;
        const additionalMessage = form.additionalMessage.value;

        const orderDetails = {
            name,
            email,
            category,
            serviceName,
            phoneNumber,
            address,
            date,
            additionalMessage,
            status: "pending"
        }
        
        axiosSecure.post("/service-orders", orderDetails)
        .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                form.reset();
                toast.success("We will call you soon to confirm")
            }
        })
        .catch(error => {
            console.log(error)
        })

    }

  return (
    <div className='flex items-center justify-center w-10/12 mx-auto'>
<div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md mt-[70px]">
    <img className="object-cover w-full h-64" src={item.imageURL} alt="Article" />

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{item.category}</span>
            <div className='flex items-center justify-between'>
                
            <p className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600" tabIndex="0" role="link">{item.serviceName}</p>

            <p className='font-bold'>
                ${item.price}
            </p>

            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.serviceDescription}</p>
        </div>

        <div className="mt-4">
<button className="btn btn-sm border-none bg-blue-600 hover:bg-blue-500 text-white" onClick={()=>document.getElementById('my_modal_3').showModal()}>Proceed</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

{/* form */}
<section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center px-6 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-md">

            <div className="relative flex flex-col mt-4">

            <label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Name</label>

                <input defaultValue={user?.displayName} type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" readOnly={true} required />
            </div>


            <div className="relative flex flex-col mt-4">

            <label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Email</label>

                <input defaultValue={user?.email} type="email" name='email' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" readOnly={true} required />
            </div>

            <div className="relative flex flex-col mt-4">

            <label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Ctegory</label>

                <input defaultValue={item?.category} type="text" name='category' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" readOnly={true} required />
            </div>

            <div className="relative flex flex-col mt-4">

            <label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Service Name</label>

                <input defaultValue={item?.serviceName} type="text" name='serviceName' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" readOnly={true} required />
            </div>

            <div className="relative flex flex-col mt-4">

<label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Phone Number</label>

    <input type="number" name='phoneNumber' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
</div>

<div className="relative flex flex-col mt-4">

<label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Address</label>

    <input type="text" name='address' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
</div>

<div className="relative flex flex-col mt-4">

<label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Service Provided At</label>

    <input type="date" name='date' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
</div>

<div className="relative flex flex-col mt-4">

<label className="block mb-1 text-sm font-medium text-blue-600 dark:text-gray-200">Additional Message</label>

    <input type="text" name='additionalMessage' className="block w-full px-5 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" required />
</div>

            <div className="mt-6">

                <input className="w-full btn btn-md border-none bg-blue-600 hover:bg-blue-500 text-white" type="submit" value="Submit" />

            </div>
        </form>
    </div>
</section>
  </div>
</dialog>
        </div>
    </div>
</div>
</div>
  )
}

export default ViewServiceDetails
