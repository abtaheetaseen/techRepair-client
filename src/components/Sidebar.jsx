import { useContext, useState } from 'react'
import { AiFillDollarCircle } from 'react-icons/ai'
import { NavLink, useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import { FaHome, FaUserFriends } from 'react-icons/fa'
import { FaBars, FaCartPlus, FaDeleteLeft, FaMobileScreen } from 'react-icons/fa6'
import { CgProfile } from 'react-icons/cg'
import { MdDashboardCustomize, MdOutlineBorderColor, MdReviews, MdShoppingCart } from 'react-icons/md'
import { IoIosAddCircle, IoMdLogOut } from 'react-icons/io'
import { AuthContext } from '../provider/AuthProvider'
import { PiMedalMilitaryFill } from 'react-icons/pi'
import "../App.css"
import useCart from '../hooks/useCart'
import { IoBagAdd } from 'react-icons/io5'
import useAdmin from '../hooks/useAdmin'
import { FaProductHunt } from "react-icons/fa6";
import { RiServiceFill } from 'react-icons/ri'

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isActive, setActive] = useState(false);
  const [cart] = useCart();

  const navigate = useNavigate();

//   const [isAdmin] = useAdmin();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("User logged out")
        navigate("/login")

      })
      .catch(error => {
        console.log(error)
      })
  }

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

    const [isAdmin] = useAdmin();

  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
          <div className='flex gap-2 items-center'>
        <span><FaMobileScreen className='text-xl text-blue-500' /></span>
          <Link to="/" className='text-xl font-bold text-blue-500'>Tech Repair</Link>
        </div>
          </div>
        </div>

        <span
          onClick={handleToggle}
          className='p-4 cursor-pointer'
        >
            {
                isActive ? 
                <FaBars className='h-5 w-5 text-blue-700' />
                :
                <FaDeleteLeft className='h-5 w-5 text-blue-700' />
            }
          
        </span>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform min-h-screen  ${
          isActive && '-translate-y-full'
        }  md:translate-y-0  transition duration-500 ease-in-out`}
      >


            <div>
          <div>
            <div className='w-full px-4 py-2 justify-center items-center mx-auto'>
            <div className='flex gap-2 items-center'>
        <span><FaMobileScreen className='text-xl text-blue-500' /></span>
          <Link to="/" className='text-xl font-bold text-blue-500'>Tech Repair</Link>
        </div>
            </div>
          </div>

          <div className='flex flex-col justify-between flex-1 mt-6'>
            
            <ul>
                {
                    isAdmin ? 
                    <>
                    <li>
              <NavLink
              to="/dashboard/adminDashboard"
                end
                className="flex items-center px-4 py-2 my-5"
              >
                <MdDashboardCustomize className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/cart"
                end className="flex items-center px-4 py-2 my-5"
              >
                <FaCartPlus className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>My Cart ({cart.length})</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/addProduct"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <IoIosAddCircle className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Add Product</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/addService"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <IoBagAdd className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Add Service</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/allUsers"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <FaUserFriends className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>All Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/allservices"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <RiServiceFill className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>All Services</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/allProducts"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <FaProductHunt className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>All Products</span>
              </NavLink>
            </li>

            {/* <li>
              <NavLink to="/dashboard/allOrders"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <MdShoppingCart className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Shop Orders</span>
              </NavLink>
            </li> */}

            <li>
              <NavLink to="/dashboard/allServicesBookings"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <MdShoppingCart className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Service Bookings</span>
              </NavLink>
            </li>
                    </> 
                    :
                    <>
                    <li>
              <NavLink
              to="/dashboard/userDashboard"
                end
                className="flex items-center px-4 py-2 my-5"
              >
                <MdDashboardCustomize className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/cart"
                end className="flex items-center px-4 py-2 my-5"
              >
                <FaCartPlus className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>My Cart ({cart.length})</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/myServiceOrders"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <PiMedalMilitaryFill className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>My Service Bookings</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/myShopOrders"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <MdOutlineBorderColor className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>My Shop Orders</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/addReview"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <MdReviews className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Add Review</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/paymentHistory"
                end
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                        isActive && "text-blue-600"
                      }`
                }
              >
                <AiFillDollarCircle className='w-5 h-5 text-gray-700' />

                <span className='mx-4 font-medium text-gray-700'>Payment History</span>
              </NavLink>
            </li>
                    </>
                }

            </ul>

          </div>
        </div>


        <div>

          <hr />

        
          <NavLink
            to='/'
            className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                    isActive ? 'bg-black rounded-xl' : 'bg-transparent'
                  }`
            }
          >
            <FaHome className='w-5 h-5 text-gray-700' />

            <span className='mx-4 font-medium text-gray-700'>Home</span>
          </NavLink>

          
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
                `flex items-center px-4 py-2 my-5  transition-colors duration-300  ${
                    isActive && "text-blue-600"
                  }`
            }
          >
            <CgProfile className="w-5 h-5 text-gray-700" />

            <span className='mx-4 font-medium text-gray-700'>Profile</span>
          </NavLink>

          <button
            onClick={handleLogOut}
            className='flex w-full items-center px-4 py-2 mt-5'
          >
            <IoMdLogOut className='w-5 h-5 text-gray-700' />

            <span className='mx-4 font-medium text-gray-700'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar