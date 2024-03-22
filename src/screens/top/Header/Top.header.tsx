import {Box, Typography} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import React from "react";
import {setter} from "elum-state/react";
import {PAGE} from "../../../states/elum";

export const TopHeader = () => {
    return (
        <Box sx={{width: '100%', height: '30vh', position: 'relative', backgroundColor: '#fff', borderRadius: '0 0 30px 30px', left: 0}}>
            <Box sx={{
                zIndex: 1,
                width: '50px',
                height: '50px',
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                borderRadius: '5px',
                //boxShadow: '-5px 5px 12px #00000080'
            }}>
                <KeyboardDoubleArrowLeftIcon onClick={() => setter(PAGE,'start')} sx={{cursor: 'pointer', color: 'primary.main'}}/>
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
