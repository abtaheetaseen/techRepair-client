import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UpdateProduct = () => {

    const item = useLoaderData();
    console.log(item)

  return (
    <div>
      update
    </div>
  )
}

export default UpdateProduct
