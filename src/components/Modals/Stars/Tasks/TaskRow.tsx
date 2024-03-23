import React from "react";
import {ITask} from "../../../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {Btn} from "../../../Buttons/Button";
import {Star} from "../../../../assets";
import {VK} from "../../../../utils/VKbridge";
import {api} from "../../../../api/api";
import {useEnqueueSnackbar} from "../../../../hooks/useSnackbar/useSnackbar";

export const TaskRow: React.FC<{task: ITask}> = ({task}) => {
    const {openSnackbar} = useEnqueueSnackbar()

    const clickOnTask = async () => {
        switch (task.data.type) {
            case 'vkBridge':
                const data = await VK.completeTask(task.data.payload, task.data.action, `task_${task.id}`)
                if (data.complete){
                    const request = await api.post('/tasks/check', data.data)
                } else {
                    openSnackbar({message: data.data, variant: 'error'})
                }
                break
        }

    }
    return (
        <Btn  onClick={clickOnTask} type='default'>
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
