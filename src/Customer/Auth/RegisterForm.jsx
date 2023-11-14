import { Button, Grid, TextField } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        const userData={
            FirstName:data.get('FirstName'),
            LastName:data.get('LastName'),
            email:data.get('email'),
            password:data.get('password')
        }
        console.log('userData:', userData);
    };
    return (
        <div>
            <form onSubmit={handleRegister}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='FirstName'
                            name='FirstName'
                            label='First Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id='LastName'
                            name='LastName'
                            label='Last Name'
                            fullWidth
                            autoComplete='given-name'
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id='email'
                            name='email'
                            type='email'
                            label='Email Address'
                            fullWidth
                            autoComplete='email'
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id='password'
                            name='password'
                            type='password'
                            label='Password'
                            fullWidth
                            autoComplete='password'
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <Button
                            className='bg-[#9155FD] w-full'
                            type='submit'
                            variant='contained'
                            size='large'
                            sx={{ padding: ".8rem 0", bgcolor: "#9155FD" }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>

            <div className='flex justify-center flex-col items-center'>
                <div className='py-3 flex items-center'>
                    <p>if you have already account ?</p>
                    <Button onClick={()=>{navigate("/login")}} className='ml-5' size='small'>Login </Button>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm