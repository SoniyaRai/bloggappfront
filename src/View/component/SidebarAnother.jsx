import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import projectColor from '../themepack';
import Logo from '../../assets/images/logo.png';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import Home from './Blogger/Home';
import CreateBlog from './Blogger/CreateBlog';
import ViewBlog from './Blogger/ViewBlog';
import Profile from './Blogger/Profile';
import ChangePassword from './Blogger/ChangePassword';
import Settings from './Blogger/Settings';
// import  IoMdSettings  from "react-icons/io";
import SettingsIcon from '@mui/icons-material/Settings';
import PreviewIcon from '@mui/icons-material/Preview';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
    ...theme.mixins.toolbar,
}));

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

// Placeholder components, replace them with your actual components
const HomeComponent = () => <Home />;
const CreateBlogComponent = () => <CreateBlog />;
const ViewBlogComponent = () => <ViewBlog />;
const ProfileComponent = () => <Profile />;
const ChangePasswordComponent = () => <ChangePassword />;
const SettingsComponent = () => <Settings />;

export default function SidebarAnother() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedMenuItem, setSelectedMenuItem] = useState('Home');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const icons = [DashboardIcon, LocalHospitalIcon, PreviewIcon, AccountCircleIcon, CollectionsBookmarkIcon, SettingsIcon ];
    // const icons_below = [AccountCircleIcon];

    const handleMenuItemClick = (text) => {
        setSelectedMenuItem(text);
    };

    const renderComponent = () => {
        switch (selectedMenuItem) {
            case 'Home':
                return <HomeComponent />;
            case 'CreateBlog':
                return <CreateBlogComponent />;
            case 'View Blog':
                return <ViewBlogComponent />;
            case 'Profile':
                return <ProfileComponent />;
            case 'Change Password':
                return <ChangePasswordComponent />;
            case 'Settings':
                return <SettingsComponent />
            default:
                return null;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ backgroundColor: 'white', boxShadow: 0 }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon sx={{ color: projectColor.primaryColor }} />
                    </IconButton>
                   
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            height: '25%',
                        }}
                    >
                        <img style={{ width: '60%' }} className="profile" alt="profilepicture" src={Logo} />
                    </Box>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Home', 'CreateBlog', 'View Blog', 'Profile', 'Change Password', 'Settings'].map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{ display: 'block' }}
                            onClick={() => handleMenuItemClick(text)}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                    style={{ color: projectColor.primaryColor }}
                                >
                                    {React.createElement(icons[index])}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
               
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                {renderComponent()}
            </Box>
        </Box>
    );
}
