import {Box, Typography} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React from "react";
import {setter, useGlobalValue} from "elum-state/react";
import {IS_MOBILE, PAGE} from "../../../states/elum";

export const TopHeader = () => {
    const is_mobile = useGlobalValue(IS_MOBILE)
    return (
        <Box sx={{width: '100%', height: '25vh', position: 'relative', backgroundColor: '#fff', borderRadius: '0 0 30px 30px', left: 0}}>
            <Box sx={{
                zIndex: 1,
                width: '50px',
                position: 'absolute',
                left: '20px',
                top: is_mobile.value === 'mobile_iphone' ? '4rem' : '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '10px',
                backgroundColor: 'rgba(40, 43, 46, 0.2)',
                height: '32px',
                backdropFilter: 'blur(12px)'
                //boxShadow: '-5px 5px 12px #00000080'
            }}>
                <KeyboardDoubleArrowLeftIcon onClick={() => setter(PAGE,'start')} sx={{cursor: 'pointer', color: '#fff'}}/>
            </Box>
            <Box sx={{
                top: '50%',
                left: '50%',
                backgroundImage: 'url(/assets/backgrounds/Rays.png)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100%'
            }}>
                <img src='/assets/backgrounds/trophy_top.png'/>
            </Box>
        </Box>
    )
}
