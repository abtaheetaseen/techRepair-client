import React from 'react'
import { Link } from 'react-router-dom'

const Cancel = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='text-center'>

        <h1 className='text-2xl mb-2'>We removed your cart</h1>
        <h2 className='text-3xl font-bold mb-5'>Your canceled your payment process <br /> Please try again</h2>
        <Link to="/shop">
        <button className='btn btn-sm bg-blue-600 text-white hover:bg-blue-500 border-none'>
          Continue Shopping
        </button>
        </Link>

      </div>
    </div>
  )
}

export default Cancel
