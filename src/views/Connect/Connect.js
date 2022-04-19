import React, { useState, Fragment } from 'react';
import { Button, TextField, Grid, Box, Typography, Link as MuiLink} from '@mui/material';
import { Link, Navigate, useLocation } from 'react-router-dom';

const Connect = () => {

    const [shouldRedirect, setShouldRedirect] = useState(false);

    const location = useLocation();

    if (location.state !== null) {

        const { state } = location,
        { error } = state;
    }

    if (JSON.parse(localStorage.getItem('isConnected')) === true) {

        return <Navigate to='/' />;
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        let body = new FormData(e.currentTarget);

        fetch('https://custom-cms-ac.herokuapp.com/users/login', {
            method: 'post',
            headers: new Headers({
                'content-type': 'application/json'
            }),
            body: JSON.stringify({
                "email": body.get('email'),
                "password": body.get('password')
            })
        }).then(res => {
            return res.json();
        }).then(user => {

            localStorage.setItem('token', user.token);
            localStorage.setItem('refreshToken', user.refreshToken);
            localStorage.setItem('isConnected', true);
            setShouldRedirect(true);
        })
    };

    return (
        <Fragment>

            {shouldRedirect ? 

                <Navigate to='/' /> :

                <Box component='section' sx={{mt: 4, mx: 'auto'}} >

                    <Typography component="h1" variant="h5" sx={{display: 'block'}}>
                        Se connecter
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }} >

                            Se Connecter
                        </Button>

                    <Grid container>

                        <Grid item>

                            <MuiLink variant="body2" component={Link} to='/'>

                                Pas encore de compte ? Inscrivez-vous.
                            </MuiLink>
                        </Grid>
                    </Grid>
                    </Box>
                </Box> 
            }
        </Fragment>
    );
}

export default Connect;