import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'
import AddressCard from '../AddressCard/AddressCard'

const DeliveryAddressForm = () => {

    const handleSubmitAddress = (e) => {
        e.preventDefault();
        console.log("address console");
        const data = new FormData(e.currentTarget)
        const address ={
            FirstName:data.get("FirstName"),
            LastName:data.get("LastName"),
            streetAddress:data.get("address"),
            city:data.get("city"),
            state:data.get("state"),
            zip:data.get("zip"),
            phone:data.get("phone"),
        }
        console.log(address);
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid xs={12} lg={5} className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button sx={{ mt: 2, bgcolor: "#9155fd" }} size='large' variant='contained'>Deliver Here</Button>
                    </div>
                </Grid>

                <Grid item xs={12} lg={7}>
                    <Box className="border rounded-s-md shadow-md p-5">
                        <form onSubmit={handleSubmitAddress}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='FirstName'
                                        label="First Name"
                                        name='FirstName'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='LastName'
                                        label="Last Name"
                                        name='LastName'
                                        fullWidth
                                        autoComplete='given-name'
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id='address'
                                        label="Address"
                                        name='address'
                                        fullWidth
                                        autoComplete='address'
                                        multiline
                                        rows={5}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='city'
                                        label="City"
                                        name='city'
                                        fullWidth
                                        autoComplete='city'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='state'
                                        label="State/Region/Country"
                                        name='state'
                                        fullWidth
                                        autoComplete='country'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='zip'
                                        label="Zip/Postal code"
                                        name='zip'
                                        fullWidth
                                        autoComplete='postal_code'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id='phone'
                                        label="Phone Number"
                                        name='phone'
                                        fullWidth
                                        autoComplete='phone'
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Button sx={{ mt: 2, bgcolor: "#9155fd" }} size='large' variant='contained' type='submit'>
                                        Deliver Here
                                    </Button>
                                </Grid>

                            </Grid>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeliveryAddressForm