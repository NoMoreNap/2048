import {Box, Typography} from "@mui/material";
import React from "react";
import {IModalStars} from "../../../../interfaces/props.interface";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {VotesRow} from "./VotesRow";
import {VOTES} from "../../../../screens/game/configs/main.config";

export const Votes: React.FC<IModalStars> = ({handleClose, setPage}) => {
    const [isLoading, setIsLoading] = React.useState(true)

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <Box sx={{width: '100%', textAlign: 'center', position: 'relative'}}>
                <KeyboardDoubleArrowLeftIcon onClick={() => setPage('start')} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)'}}/>
                <Typography sx={{color: 'primary.main', fontSize: '1.5rem'}}>Пополнить</Typography>
                <CloseIcon onClick={() => handleClose()} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, width: '100%'}}>
                {
                    VOTES.sort((a,b) => b.value - a.value).map((el) => <VotesRow key={`${el.id}_vote`} vote={el}/>)
                }
            </Box>
        </Box>
    )
}
