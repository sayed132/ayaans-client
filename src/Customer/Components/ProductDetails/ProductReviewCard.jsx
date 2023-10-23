import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='text-lg font-semibold'>Rafsan</p>
                            <p className='opacity-70'>Oct 20, 2023 at 9:30pm</p>
                        </div>
                    </div>

                    <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard