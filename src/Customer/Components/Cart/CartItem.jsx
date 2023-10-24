import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='w-full h-full object-cover object-top'
                        src="https://i.ibb.co/jg9p4G9/955edaceb79f990c714ad7cef7844132.jpg"
                        alt="cart image" />

                </div>
                <div className='ml-5 space-y-1'>
                    <p className='font-semibold'>High Quality Heavy Pearl Chiffon Hijab</p>
                    <p className='opacity-70'>Size: L , Color: Brown</p>
                    <p className='opacity-70 mt-2'>Seller:
                        <span className='text-indigo-600'>Ayaan's Fashion Ltd.</span>
                    </p>
                    <div className='flex space-x-5 items-center text-gray-700 pt-6'>

                        <p className='font-semibold'>Tk. 499</p>
                        <p className='opacity-50 line-through'>Tk. 1499</p>
                        <p className='text-green-600 font-semibold'>75% OF</p>

                    </div>
                </div>
            </div>
            <div className='flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton sx={{color:"#dd7f7f"}}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className='py-1 px-7 border rounded-sm'>1</span>
                    <IconButton sx={{color:"#9155fd"}}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{color:"#C61D1F"}}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem