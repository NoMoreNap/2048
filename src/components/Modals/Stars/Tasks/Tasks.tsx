import {Box, CircularProgress, Typography} from "@mui/material";
import React from "react";
import {IModalStars} from "../../../../interfaces/props.interface";
import {Btn} from "../../../Buttons/Button";
import CloseIcon from '@mui/icons-material/Close';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import {api} from "../../../../api/api";
import {TasksBlock} from "./TasksBlock";

export const Tasks: React.FC<IModalStars> = ({handleClose, setPage}) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [tasks, setTasks] = React.useState([])

    const getTasks = async () => {
        try {
            const {data} = await api.get('/tasks/get')
            setTasks(data.data)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {getTasks()}, [])

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <Box sx={{width: '100%', textAlign: 'center', position: 'relative'}}>
                <KeyboardDoubleArrowLeftIcon onClick={() => setPage('start')} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)'}}/>
                <Typography sx={{color: 'primary.main', fontSize: '1.5rem'}}>Пополнить</Typography>
                <CloseIcon onClick={() => handleClose()} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}/>
            </Box>
            {
                isLoading ?
                    <CircularProgress/> :
                    <TasksBlock tasks={tasks}/>
            }
        </Box>
    )
}
