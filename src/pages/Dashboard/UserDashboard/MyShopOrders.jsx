import React from 'react'
import useOrders from '../../../hooks/useOrders'

const MyShopOrders = () => {

    const [userShopOrders] = useOrders();

  return (
    <div className='flex items-center justify-center my-[70px]'>

<div>
  <div className='mb-8'>
      <h1 className='text-center text-3xl'>Shop Orders : {userShopOrders?.length}</h1>
  </div>

  <div>
<div className="overflow-x-auto">
<table className="table">
{/* head */}
<thead>
<tr>
  <th></th>
  <th>Product Name</th>
  <th>Total Amount</th>
  <th>Transaction ID</th>
  <th>Quantity</th>
  <th>Status</th>
</tr>
</thead>
<tbody>

  {
      userShopOrders?.map((item, index) =>       
      <tr key={item?._id}>
          <th>{index + 1}</th>
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
</div>
</div>

</div>
  )
}

export default MyShopOrders
