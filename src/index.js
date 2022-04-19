import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Users, Roles, Posts, Comments, Categories, Connect } from './views/index';
import { DrawerCustom as Drawer, AppBarCustom as AppBar } from './components/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';

const theme = createTheme({
    palette: {
        primary: {
            main: '#457b9d',
            darker: '#2A4A5E',
        },
        neutral: {
            main: '#f1faee',
            contrastText: '#fff',
        },
        secondary: {
            main: '#a8dadc',
            darker:'#dbf0f0'
        }
    },
});

const Root = () => {

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {

        setOpen(true);
    };

    const handleDrawerClose = () => {

        setOpen(false);
    };

    return(
        <ThemeProvider theme={theme}>
            <BrowserRouter>

                <Box sx={{ display: 'flex', paddingTop: '64px' }}>

                    <CssBaseline />

                    <AppBar handleDrawerOpen={handleDrawerOpen} open={open} />

                    <Drawer handleDrawerClose={handleDrawerClose} open={open} />

                    <Routes>
                        <Route path="/" element={<Users />} />
                        <Route path='/users' element={<Users />} />
                        <Route path='/roles' element={<Roles />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/comments' element={<Comments />} />
                        <Route path='/categories' element={<Categories />} />
                        <Route path='/SignIn' element={<Connect />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </ThemeProvider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
