import {Box, Button, Menu, MenuItem, Typography} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {BOARD_SIZE} from "../../../../screens/game/configs/main.config";
import {setter, useGlobalValue} from "elum-state/react";
import {MODAL_STARS, PAGE, USER_DATA} from "../../../../states/elum";
import {Star} from "../../../../assets";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
    const userData = useGlobalValue(USER_DATA)
    return (
        <Box sx={{
            width: BOARD_SIZE,
            height: '45px',
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',}}>
            <Box sx={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 1)',
                width: '45px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px'}}
            onClick={() => setter(PAGE, 'start')}
            >
                    <KeyboardDoubleArrowLeftIcon sx={{color: 'primary.main'}}/>
            </Box>
            <Box onClick={() => setter(MODAL_STARS, true)} sx={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 1)',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                padding: '0 10px',
                gap: 1
            }}>
                <Star style={{width: '25px', height: '25px'}}/>
                <Typography sx={{color: 'primary.main'}}>{userData.gameInfo.balance}</Typography>
                <AddIcon sx={{color: 'primary.main'}}/>
            </Box>

        </Box>
    )
}


export const MobileNav = () => {
    const userData = useGlobalValue(USER_DATA)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{width: '100%', display: 'flex', alignItems: 'center', gap: 1, zIndex: 1}}>
            <Box onClick={handleClick} sx={{width: 30, height: 30, position: 'relative', zIndex: 1, cursor: 'pointer'}}>
                <MenuIcon sx={{color: '#fff', width: 30, height: 30}}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                <Star style={{width: '25px', height: '25px'}}/>
                <Typography sx={{color: '#fff'}}>{userData.gameInfo.balance}</Typography>
            </Box>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => setter(PAGE, 'start')}>Вернуться</MenuItem>
                <MenuItem onClick={() => setter(MODAL_STARS, true)}>Пополнить</MenuItem>
            </Menu>
        </Box>
    );
}
