import React from 'react'
import useOrders from '../../../hooks/useOrders'

const MyShopOrders = () => {

    const [userShopOrders, refetch, isLoading] = useOrders();

    if(isLoading){
        return <div className='flex items-center justify-center'>
        <div className="loading loading-infinity loading-lg min-h-screen "></div>
    </div> 
      }

  return (
    <div className='flex items-center justify-center my-[70px]'>

<div>
  <div className='mb-8'>
      <h1 className='text-center text-3xl'>Shop Orders : {userShopOrders?.length}</h1>
  </div>

  <div>
<div className="overflow-auto rounded-lg shadow hidden md:block">
<table className="table">
{/* head */}
<thead>
<tr>
  <th>Product Name</th>
  <th>Total Amount</th>
  <th>Transaction ID</th>
  <th>Quantity</th>
  <th>Status</th>
</tr>
</thead>
<tbody>

  {
      userShopOrders?.map((item) =>       
      <tr key={item?._id}>
          <td>{item.cus_ordered_products_name?.map((name, index) => <p key={index} className='italic'>*{name}*</p>)}</td>
          <td>${item.total_amount}</td>
          <td>{item.tran_id}</td>
          <td>{item.cus_ordered_products_name.length}</td>
          <td>{item.status}</td>
      </tr>
      )
  }

</tbody>
</table>
</div>


  {/* responsive my orders table */}
<div className="grid grid-cols-1 gap-4 md:hidden">

{
  userShopOrders?.map((item) => 
    <div key={item._id} className="bg-white space-y-3 p-4 rounded-lg shadow">
<div className="flex flex-col items-start justify-start text-sm">
<div className='mb-5'>
<a href="" className="text-blue-800 font-medium bg-blue-200 py-1 px-2 rounded-full">{item.tran_id}</a>
</div>

<div className='flex items-center justify-between gap-3'>
    <div>
      {item.cus_ordered_products_name?.map((name, index) => <p key={index} className='italic'>*{name}*</p>)}
    </div>

    <div>
    <span
        className="p-1.5 text-xs font-medium uppercase tracking-wider text-blue-800 bg-blue-200 rounded-lg bg-opacity-50">${item.total_amount}
    </span>
    </div>
</div>

<div className='my-3'>
  {item.date}, {item.time}
</div>

<div>
<span
        className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{item.status}
    </span>
</div>
</div>

</div>
  )
}

</div>


</div>
</div>

</div>
  )
}

export default MyShopOrders
