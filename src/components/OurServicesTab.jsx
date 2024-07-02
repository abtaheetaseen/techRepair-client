import React from 'react'
import { Link } from 'react-router-dom'

const OurServicesTab = ({item}) => {
  return (
<div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-xl border-t-2 border-gray-500 hover:scale-105 duration-300">
    <div className="px-4 py-2">
        <h1 className="text-md font-bold text-gray-800">{item.serviceName}</h1>
    </div>

    <img className="object-cover w-full h-48 mt-2" src={item.imageURL} alt="NIKE AIR" />

    <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-lg font-bold text-white">${item.price}</h1>
        <Link to={`/ourServices/${item._id}`}>
        <button className="btn btn-xs border-none px-2 py-1 text-md font-semibold text-white bg-blue-600 rounded hover:bg-blue-500">View Details</button>
        </Link>
    </div>
</div>
  )
}

export default OurServicesTab
