import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import { Button, Divider } from '@mui/material'
import CartItem from '../Cart/CartItem'

const OrderSummary = () => {
  return (
    <div>
      <div className='p-5 shadow-lg rounded-s-md border '>
        <AddressCard />
      </div>
      <div>
        <div className='lg:grid grid-cols-3 lg:mt-6 relative'>
          <div className='col-span-2'>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => <CartItem />)}
          </div>
          <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
            <div className='border px-4 pb-5 pt-2'>
              <p className='opacity-60 uppercase font-bold pb-4'>Price Details</p>
              <Divider />
              <div className='font-semibold space-y-3 mb-10'>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Price</span>
                  <span className='text-blue-600'>Tk. 10000</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Discount</span>
                  <span className='text-yellow-400'>Tk. - 2500</span>
                </div>
                <div className='flex justify-between pt-3 text-black'>
                  <span>Delivery Charge</span>
                  <span className='text-green-400'>Tk. 150</span>
                </div>
                <Divider />
                <div className='flex justify-between pt-1 text-black'>
                  <span className='font-bold'>Total Amount</span>
                  <span className='text-purple-600 font-bold'>Tk. 7650</span>
                </div>
              </div>
              <Button className='w-full' variant='contained' sx={{ px: "7rem", py: ".7rem", bgcolor: "#9155fd" }}>
                Checkout
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OrderSummary