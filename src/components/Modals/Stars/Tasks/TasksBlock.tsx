import {Box, Typography} from "@mui/material";
import React from "react";
import {IModalTasksBody} from "../../../../interfaces/props.interface";
import {TaskRow} from "./TaskRow";

export const TasksBlock: React.FC<IModalTasksBody> = ({tasks}) => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, width: '100%'}}>
            {
                tasks.length ?
                    tasks.map((el) => <TaskRow task={el}/>)
                    :
                    <Typography>В данный момент заданий нет :(</Typography>
            }

        </Box>
    )
}
