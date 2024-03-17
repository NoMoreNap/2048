import {Box, Typography} from "@mui/material";
import React from "react";
import {IModalStars} from "../../../interfaces/props.interface";
import {Btn} from "../../Buttons/Button";
import CloseIcon from '@mui/icons-material/Close';

export const Start: React.FC<IModalStars> = ({handleClose, setPage}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <Box sx={{width: '100%', textAlign: 'center', position: 'relative'}}>
                <Typography sx={{color: 'primary.main', fontSize: '1.5rem'}}>Пополнить</Typography>
                <CloseIcon onClick={() => handleClose()} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}/>
            </Box>
            <Btn onClick={() => setPage('tasks')} type={'blue'}>
                За задания
            </Btn>
            <Btn onClick={() => setPage('votes')} type={'default'}>
                За голоса
            </Btn>
        </Box>
    )
}
