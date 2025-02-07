import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import '../App.css';
import { AuthContext } from '../provider/AuthProvider';
import { FaCartPlus, FaMobileScreen } from 'react-icons/fa6';
import useCart from '../hooks/useCart';

const Navbar = () => {

    const {user, logOut, name, photoURL} = useContext(AuthContext);

    const [cart] = useCart();

  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login")

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='navbar z-10 shadow-sm px-4 mx-auto flex flex-col lg:flex-row md:flex-row'>
      <div className='flex-1'>
        <div className='flex gap-2 items-center'>
        <span><FaMobileScreen className='text-xl text-blue-500' /></span>
          <Link to="/" className='text-xl font-bold text-blue-500'>Tech Repair</Link>
        </div>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 flex gap-3'>
          <NavLink to="/">
            <li>
              <div>Home</div>
            </li>
          </NavLink>

          <NavLink to="/ourServices">
            <li>
              <div>Services</div>
            </li>
          </NavLink>

          <NavLink to="/shop">
            <li>
              <div>Shop</div>
            </li>
          </NavLink>

          {
            !user && (
              <NavLink to="/login">
                <li>
                  <div>Login</div>
                </li>
              </NavLink>

            )
          }

          {
            user && (
              <Link to="/dashboard/cart">
                    <li>
                      <button className='relative'>
                        <FaCartPlus className='text-[20px] text-blue-500' /> 
                        <div className='badge bg-blue-500 text-white absolute top-4 left-0'>{cart?.length}</div>
                      </button>
                    </li>
                </Link>   
            )
          }
        </ul>

        {
          user && (
            <>
              <div className='dropdown dropdown-end z-50'>
                <div
                  tabIndex={0}
                  role='button'
                  className='btn btn-ghost btn-circle avatar'
                >
                  <div title={user?.displayName || name} className='w-10 rounded-full'>
                    <img
                      referrerPolicy='no-referrer'
                      alt='User Profile Photo'
                      src={user?.photoURL || photoURL}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex-col gap-3 text-black'
                >  

                  <NavLink to="/dashboard/profile">
                    <li>
                      <div>Profile</div>
                    </li>
                  </NavLink>

                  <li className=''>
              <button onClick={handleLogOut}>
                Logout
                </button>
            </li>
                </ul>
              </div>
              
            </>
          )
        }
      </div>
    </div>
  )
}

export default Navbar
