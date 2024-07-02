import React, { useContext, useState } from 'react'
import { AuthContext } from '../../../provider/AuthProvider'
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const AddReview = () => {
    
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);
    const [selectRatings, setSelectRatings] = useState("");
    
    const handleRatings = (e) => {
        setSelectRatings(e.target.value);
    }

    const handleAddReview = (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const rating = parseInt(selectRatings);
        const description = form.description.value;

        const review = {
            name,
            email,
            rating,
            description
        }
        
        axiosSecure.post("/reviews", review)
        .then(res => {
            if(res.data.insertedId){
                setLoading(false);
                form.reset();
                toast.success("Thanks for your review");
            }
        })

    }

  return (
    <div className='flex items-center justify-center my-[70px]'>
      <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">ADD YOUR REVIEW</h2>

    <form onSubmit={handleAddReview}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Name</label>
                <input required id="name" name='name' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user?.displayName} readOnly={true} />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Email</label>
                <input required id="email" name='email' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" defaultValue={user?.email} readOnly={true} />
            </div>

        </div>

        <div className='mt-5'>
                    <label className="text-gray-700 dark:text-gray-200">Ratings</label>
                    <select required value={selectRatings} onChange={handleRatings} className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                        <option value="">Please select one.....</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        
                    </select>
                    </div>

        <div className='mt-5'>
                <label className="text-gray-700 dark:text-gray-200">Description</label>
                <textarea required className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" name="description" id="description" cols="30" rows="5"></textarea>
            </div>

        <div className="flex mt-6">
            <button disabled={loading} className='btn btn-sm bg-blue-600 text-white border-none hover:bg-blue-500' type="submit">
                {loading ? "Processing..." : "Add Review"}
            </button>
        </div>
    </form>
</section>
      </div>
    </div>
  )
}

export default AddReview
