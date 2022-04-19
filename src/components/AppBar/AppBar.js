import * as React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {

    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default function AppBarCustom({ handleDrawerOpen, open }) {

    const isConnected = JSON.parse(localStorage.getItem('isConnected')),
        navigate = useNavigate();

    const handleDisconnect = () => {

        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.setItem('isConnected', false);

        navigate('/signIn');
    }

    return (
        <AppBar position="fixed" open={open}>

            <Toolbar>

                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                    }}>

                    <Menu />
                </IconButton>

                <Typography component={Link} to='/' variant="h6" noWrap sx={{flexGrow: 1, color: '#fff', textDecoration: 'none'}}>

                    Entreprise
                </Typography>

                {isConnected ? 

                    <Button onClick={handleDisconnect} disableElevation variant="contained" color="error" >Disconnect</Button> :

                    <Button component={Link} to='/signIn' disableElevation variant="contained" color="secondary" >Connect</Button>
                }
            </Toolbar>
        </AppBar>
    );
}