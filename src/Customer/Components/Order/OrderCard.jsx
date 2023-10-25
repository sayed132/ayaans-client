import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-md shadow-gray-300 hover:shadow-2xl rounded-sm'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img
                            className='w-[5rem] h-[5rem] object-cover object-top'
                            src="https://i.ibb.co/jg9p4G9/955edaceb79f990c714ad7cef7844132.jpg"
                            alt=""
                        />
                        <div className='ml-5 space-y-2'>
                            <p className='font-semibold'>PREMIUM SILK HIJAB COLLECTION</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Mazenda</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p className='font-bold text-gray-600'>Tk. 499</p>
                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon
                                sx={{ width: "15px", height: "15px" }}
                                className='text-green-600 mr-2 text-sm'
                            />
                            <span>Delivered On March 23</span>
                        </p>
                        <p className='text-xs ml-6'>
                            Your Item has been delivered
                        </p>
                    </div>}
                    {false && <p>
                        <AdjustIcon
                            sx={{ width: "15px", height: "15px" }}
                            className='text-green-600 mr-2 text-sm'
                        />
                        <span>Expected Delivered On March 23</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard