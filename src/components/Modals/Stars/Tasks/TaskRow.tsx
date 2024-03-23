import React from "react";
import {ITask} from "../../../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {Btn} from "../../../Buttons/Button";
import {Star} from "../../../../assets";
import {VK} from "../../../../utils/VKbridge";
import {api} from "../../../../api/api";
import {useEnqueueSnackbar} from "../../../../hooks/useSnackbar/useSnackbar";
import {setter} from "elum-state/react";
import {MODAL_ANY, USER_DATA} from "../../../../states/elum";

export const TaskRow: React.FC<{task: ITask, getTasks: () => Promise<void>}> = ({task,getTasks}) => {
    const {openSnackbar} = useEnqueueSnackbar()

    const clickOnTask = async () => {
        switch (task.data.type) {
            case 'vkBridge':
                const data = await VK.completeTask(task.data.payload, task.data.action, `task_${task.id}`)
                if (data.complete){
                    const request = await api.post('/tasks/check', data.data)

                    if (request.data.status) {
                        await getTasks()
                        openSnackbar({message: request.data.detail, variant: 'success'})
                        if (request.data.data.new_balance) {
                            setter(USER_DATA, (state) => ({...state, gameInfo: {...state.gameInfo, balance: request.data.data.new_balance}}))
                        }
                    } else {
                        openSnackbar({message: request.data.detail, variant: 'info'})

                    }

                } else {
                    openSnackbar({message: data.data, variant: 'error'})
                }
                break
            case 'modal':
                setter(MODAL_ANY, task.data.action)
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
