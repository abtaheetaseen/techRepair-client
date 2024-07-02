import React, { useContext, useRef, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const Login = () => {

    const {signInUser, loading, setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const emailRef = useRef();

    const [showPass, setShowPass] = useState(false);

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

                // log in
                signInUser(email, password)
                .then((result) => {
                    console.log(result.user)
                    form.reset();
                    toast.success("User logged in successfully")
                    navigate(from);
                })
                .catch((error) => {
                    toast.error(error.message)
                    setLoading(false)
                });
    };

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if(!email){
            return toast.error("Please provide your email first");
        } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            return toast.error("Please provide a valid email")
        }

        // send validation email
        sendPasswordResetEmail(auth, email)
        .then(() => {
            toast.success("Please check your email")
        })
        .catch(error => {
            console.log(error)
        })
    }

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleLogin} className="w-full max-w-md">

            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white">Login</h1>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input required ref={emailRef} type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
            </div>

            <div className="relative flex items-center mt-4">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input required type={!showPass ? "password" : "text"} name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                <span className='absolute right-5' onClick={() => setShowPass(!showPass)}>
                    {
                        showPass ? <FaEyeSlash /> : <FaEye />
                    }
                </span>
            </div>

<div className='text-right'>
            <a onClick={handleForgetPassword} href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline ">Forget Password?</a>
            </div>

            <div className="mt-6">
                    <button className="w-full cursor-pointer px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" type="submit">
                        {
                            loading ? "Processing..." : "Login"
                        }
                    </button>

                <div className="mt-6 text-center ">
                    <Link to="/register" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                        Don't have an account?
                        Register
                    </Link>
                </div>
            </div>
        </form>
    </div>
</section>
    </div>
  )
}

export default Login
