import React, { useState } from 'react'
import { imageUpload } from '../../../imageAPI';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AddService = () => {

    const [loading, setLoading] = useState(false);

    const axiosSecure = useAxiosSecure();
    const [selectCategory, setSelectCategory] = useState("");

    const handleCategory = (e) => {
        setSelectCategory(e.target.value)
    }

    const handleAddService = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;

        const serviceName = form.serviceName.value;
        const serviceDescription = form.serviceDescription.value;
        const price = parseInt(form.price.value);
        const category = selectCategory;
        const image = form.image.files[0];
        
        try {

            const imageURL = await imageUpload(image);

            const newService = {
                serviceName,
                serviceDescription,
                price,
                imageURL,
                category
            }
            
            const res = await axiosSecure.post("/services", newService)
            if(res.data.insertedId){
                console.log(res.data);
                form.reset();
                toast.success("New service has added")
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    }

  return (
    <div className='flex items-center justify-center my-[70px]'>
      <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">ADD NEW SERVICE</h2>

    <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Service Name</label>
                <input required id="serviceName" name='serviceName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Price</label>
                <input required id="price" name='price' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Image</label>
                <input required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*' className="block w-full py-[5px] mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                    <label className="text-gray-700 dark:text-gray-200">Category</label>
                    <select required value={selectCategory} onChange={handleCategory} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                        <option value="">Please select one.....</option>
                        <option value="Smartphone">Smartphone</option>
                        <option value="Laptop">Laptop</option>
                        <option value="Tablet">Tablet</option>
                        <option value="Desktop">Desktop</option>
                    </select>
                    </div>
        </div>

        <div className='mt-5'>
                <label className="text-gray-700 dark:text-gray-200">Description</label>
                <textarea required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="serviceDescription" id="serviceDescription" cols="30" rows="5"></textarea>
            </div>

        <div className="flex mt-6">
            <button disabled={loading} className='btn btn-sm bg-blue-600 text-white border-none hover:bg-blue-500' type="submit">
                {loading ? "Processing..." : "Add Service"}
            </button>
        </div>
    </form>
</section>
      </div>
    </div>
  )
}

export default AddService
