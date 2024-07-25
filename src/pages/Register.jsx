import React, { useContext, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { imageUpload } from '../imageAPI';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Register = () => {

    const {createUser, updateUserProfile, setLoading, loading} = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const emailRef = useRef();

    const [passError, setPassError] = useState("");
    const [nameError, setNameError] = useState("");

    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];
        // reset error
        setPassError("");
        setNameError("");

        try {
            setLoading(true);

            if(name.length <= 3){
                setNameError("Name must be at least 3 character long");
                setLoading(false)
                return;
            }
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
                setPassError("Password must be 8 characters long, must have at least one uppercase, one lowercase, one number and one special character");
                setLoading(false)
                return;
            } 

            // upload image and get image url
            const image_url = await imageUpload(image);

            // register user
            const result = await createUser(email, password);
            console.log(result);

            // update profile
            await updateUserProfile(name, image_url);

            // send user to mongodb
            const user = {
                name,
                email,
                image_url,
                status: "active",
                role: "user"
            }

            const res = await axiosPublic.post("/users", user)
            if(res.data.insertedId){
                console.log(res.data);
                form.reset();
                toast.success("User created successfully")
                navigate(from);
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };

    // const handleVerifyEmail = () => {
    //     const email = emailRef.current.value;
    //     console.log(auth.currentUser)
    //     if(!email){
    //         return toast.error("Please provide your email first");
    //     } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    //         return toast.error("Please provide a valid email")
    //     }

        
    // }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleRegister} className="w-full max-w-md">

            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Register</h1>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" required />
            </div>
            {
                nameError && <p className='text-red-600'>{nameError}</p>
            }


            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input ref={emailRef} type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" required />
                {/* <button onClick={handleVerifyEmail} className='btn btn-sm absolute right-5'>
                    Verify Email
                </button> */}
            </div>

            
<div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>



                            </span>

                            <input required
                                type='file'
                                id='image'
                                name='image'
                                accept='image/*' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type={!showPass ? "password" : "text"} name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" required />
                <span className='absolute right-5' onClick={() => setShowPass(!showPass)}>
                    {
                        showPass ? <FaEyeSlash /> : <FaEye />
                    }
                </span>
            </div>
            {
                passError && <p className='text-red-600'>{passError}</p>
            }

            <div className="mt-6">
                {/* <input className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit" value="Register" /> */}
                <button disabled={loading} className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit">
                    {
                        loading ? "Processiong..." : "Register"
                    }
                </button>


                <div className="mt-6 text-center ">
                    <Link to="/login" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                        Already have an account?
                        Login
                    </Link>
                </div>
            </div>
        </form>
    </div>
</section>
    </div>
  )
}

export default Register
