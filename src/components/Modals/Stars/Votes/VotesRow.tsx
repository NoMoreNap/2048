import React from "react";
import {ITask} from "../../../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {Btn} from "../../../Buttons/Button";
import {Star} from "../../../../assets";
import {VOTES} from "../../../../screens/game/configs/main.config";

export const VotesRow: React.FC<{vote: typeof VOTES[0]}> = ({vote}) => {
    return (
        <Btn type='blue'>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%'}}>
                <Typography sx={{fontSize: '1rem'}}>{vote.title}</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', height: '100%', gap: 1}}>
                    <Typography sx={{fontSize: '1rem'}}>{vote.value}</Typography>
                    <Star/>
                </Box>
            </Box>
        </Btn>
    )

}
