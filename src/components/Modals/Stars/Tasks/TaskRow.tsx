import React from "react";
import {ITask} from "../../../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {Btn} from "../../../Buttons/Button";
import {Star} from "../../../../assets";

export const TaskRow: React.FC<{task: ITask}> = ({task}) => {
    console.log(task)
    return (
        <Btn type='default'>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', height: '100%'}}>
                <Typography sx={{fontSize: '1rem'}}>{task.title}</Typography>
                <Box sx={{display: 'flex', alignItems: 'center', height: '100%', gap: 1}}>
                    <Box sx={{height: '90%', width: '2px', borderRadius: '1px', background: '#fff'}}/>
                    <Typography sx={{fontSize: '1rem'}}>{task.award}</Typography>
                    <Star/>
                </Box>
            </Box>
        </Btn>
    )

}
