import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { Drawer as MuiDrawer, List, Divider, IconButton, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ChevronLeft, ChevronRight, Group, ManageAccounts, Article, Comment, Category } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function DrawerCustom({ handleDrawerClose, open }) {
  const theme = useTheme();

  return (
    <Drawer variant="permanent" open={open}>

        <DrawerHeader>

        <IconButton onClick={handleDrawerClose}>

            {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
        </IconButton>
        </DrawerHeader>

        <Divider />

        <List>

            <ListItemButton component={NavLink} to='/users' sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5 }}>

                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center' }}>

                    <Group />
                </ListItemIcon>

                <ListItemText primary="Utilisateurs" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton component={NavLink} to='/roles' sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5 }}>

                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center' }}>

                    <ManageAccounts />
                </ListItemIcon>

                <ListItemText primary="Roles" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton component={NavLink} to='/posts' sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5 }}>

                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center' }}>

                    <Article />
                </ListItemIcon>

                <ListItemText primary="Posts" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton component={NavLink} to='/comments' sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5 }}>

                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center' }}>

                    <Comment />
                </ListItemIcon>

                <ListItemText primary="Comments" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

            <ListItemButton component={NavLink} to='/categories' sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5 }}>

                <ListItemIcon sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center' }}>

                    <Category />
                </ListItemIcon>

                <ListItemText primary="Categories" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
        </List>
    </Drawer>
  );
}