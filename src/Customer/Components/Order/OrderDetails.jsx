import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracking from './OrderTracking'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-lg py-5'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracking activeStep={3}/>
            </div>
            <Grid container className='space-y-5'>
               {[1,1,1,1,1,1].map((item)=><Grid item container 
               className='shadow-xl hover:shadow-slate-300 cursor-pointer rounded-md p-5 border'
               sx={{alignItems:"center",justifyContent:"space-between"}}
               >
                <Grid item xs={6}>
                  <div className='flex items-center space-x-5'>
                    <img 
                    className='h-[7rem] w-[7rem] object-cover object-top' 
                    src="https://i.ibb.co/jg9p4G9/955edaceb79f990c714ad7cef7844132.jpg" 
                    alt="" />
                    <div className='space-y-1 ml-5'>
                        <p className='font-semibold text-gray-600'>Molan Hijab For One Part</p>
                        <p className='space-x-5 opacity-40 text-sm font-semibold'><span>Color : Brown,</span> <span>Size : M</span></p>
                        <p><span className='font-semibold'>Seller:</span> <span className='text-blue-600'>Ayaan's Fashion Ltd</span></p>
                        <p>Tk. 499</p>
                    </div>
                  </div>
                </Grid>
                <Grid item>
                   <Box sx={{color:deepPurple[500]}}>
                    <StarBorderIcon sx={{fontSize:"2rem"}} className='px-2 text-5xl'/>
                    <span>Rate & Review Product</span>
                   </Box>
                </Grid>

               </Grid>)}
            </Grid>
        </div>
    )
}

export default OrderDetails