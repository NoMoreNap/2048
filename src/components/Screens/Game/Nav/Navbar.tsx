import {Box, Typography} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import {BOARD_SIZE} from "../../../../screens/game/configs/main.config";
import {setter, useGlobalValue} from "elum-state/react";
import {MODAL_STARS, PAGE, USER_DATA} from "../../../../states/elum";
import {Star} from "../../../../assets";
import AddIcon from '@mui/icons-material/Add';

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
