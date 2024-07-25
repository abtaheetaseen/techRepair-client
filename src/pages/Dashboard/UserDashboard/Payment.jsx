import React, { useContext } from 'react'
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider';
import useCart from '../../../hooks/useCart';
import moment from 'moment';

const Payment = () => {

  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const [cart] = useCart();

  const totalPrice = cart.reduce((total, item) => total + item.productPrice, 0);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;

    const customerName = form.customerName.value;
    const customerEmail = form.customerEmail.value;
    const amount = totalPrice;
    const city = form.city.value;
    const country = form.country.value;
    const customerPhoneNumber = parseInt(form.customerPhoneNumber.value);
    const zipCode = parseInt(form.zipCode.value);
    const customerAddress = form.customerAddress.value;

    const customerBillingDetails = {
      customerName,
      customerEmail,
      amount,
      city,
      country,
      zipCode,
      customerPhoneNumber,
      customerAddress,
      cartIds: cart.map(item => item._id),
      productItemIds: cart.map(item => item.productId),
      ordered_product_name: cart.map(item => item.productName),
      date: moment().format('MMMM Do YYYY'),
      time: moment().format('h:mm a'),
    }

    axiosPublic.post("/create-payment", customerBillingDetails)
    .then(res => {
      console.log(res);
      const redirectURL = res.data.paymentURL;

      if(redirectURL){
        window.location.replace(redirectURL);
      }
    })

  }

  return (
    <div className='flex items-center justify-center my-[70px]'>
      <div>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Billing Address</h2>

    <form onSubmit={handlePlaceOrder}>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label className="text-gray-700 dark:text-gray-200">Your Name</label>
                <input defaultValue={user?.displayName} required id="customerName" name='customerName' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Your Email</label>
                <input defaultValue={user?.email} required id="customerEmail" name='customerEmail' type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" readOnly={true} />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">City</label>
                <input required id="city" name='city' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Country</label>
                <input required id="country" name='country' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">Phone Number</label>
                <input required id="customerPhoneNumber" name='customerPhoneNumber' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200">ZIP Code</label>
                <input required id="zipCode" name='zipCode' type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

        </div>

        <div className='mt-4'>
                <label className="text-gray-700 dark:text-gray-200">Address</label>
                <input required id="customerAddress" name='customerAddress' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
            </div>

        <div className="flex mt-6">
            <button className='btn btn-sm bg-blue-600 text-white border-none hover:bg-blue-500' type="submit">
                Place Order
            </button>
        </div>
    </form>
</section>
      </div>
    </div>


  )
}

export default Payment
