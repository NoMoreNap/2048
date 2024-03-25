import {Box, Typography} from "@mui/material";
import React from "react";
import {IActionsProps} from "../../../../interfaces/props.interface";
import {Back, Division, Kill, Mult, Star} from "../../../../assets";
import {BOARD_SIZE} from "../../../../screens/game/configs/main.config";
import {api} from "../../../../api/api";
import {useEnqueueSnackbar} from "../../../../hooks/useSnackbar/useSnackbar";
import {setter, useGlobalValue} from "elum-state/react";
import {DEFAULT_EDITING_CELL, EDITING_CELL, IS_MOBILE, MODAL_STARS, USER_DATA} from "../../../../states/elum";

export const Actions: React.FC<IActionsProps> = ({setCells, setScore,setIsEdit,isEdit}) => {
    const isMobile = useGlobalValue(IS_MOBILE)
    let style = {}
    if(isMobile.key) {
        style = {
            width: '60px'
        }
    }
    const editing_cell = useGlobalValue(EDITING_CELL)
    const {openSnackbar} = useEnqueueSnackbar()

    const sendAction = async (type: string, id = '') => {
        try {
            const {data} = await api.get(`/game/actions/${type}?id=${id}`)
            if (data.status) {
                setCells(data.data.cells)
                setScore(data.data.score)
                openSnackbar({message: 'Успешно', variant: 'success'})
                if (data.data.new_balance) {
                    setter(USER_DATA, (state) => ({...state, gameInfo: {...state.gameInfo, balance: data.data.new_balance}}))
                }

            } else {
                openSnackbar({message: data.detail, variant: 'error'})
                setter(MODAL_STARS, true)
            }
        } catch (e) {
            console.log(e)
        } finally {
            setter(EDITING_CELL, DEFAULT_EDITING_CELL)
            setIsEdit(false)
        }
    }

    const editCell = (type: string) => {
        if (!isEdit) {
            setter(EDITING_CELL, (data) => ({...data,action: type}))
            setIsEdit(true)
        } else {
            setter(EDITING_CELL, DEFAULT_EDITING_CELL)

            setIsEdit(false)
        }

    }

    React.useEffect(() => {
        if (editing_cell.isEditing) {
            sendAction(editing_cell.action, editing_cell.id)
        }

    } , [editing_cell.isEditing])



    return (
        <Box sx={{display: 'flex', zIndex: 3, justifyContent: 'space-between', width: BOARD_SIZE}}>

            <Box onClick={() => sendAction('back')} sx={{cursor: 'pointer',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Back style={style}/>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Star style={{width: '20px'}}/>
                    <Typography sx={{color: '#fff', fontWeight: 400}}>10</Typography>
                </Box>
            </Box>

            <Box onClick={() => editCell('kill')} sx={{cursor: 'pointer',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Kill style={style}/>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Star style={{width: '20px'}}/>
                    <Typography sx={{color: '#fff', fontWeight: 400}}>30</Typography>
                </Box>
            </Box>

            <Box onClick={() => editCell('mult')} sx={{cursor: 'pointer',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Mult style={style} />
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Star style={{width: '20px'}}/>
                    <Typography sx={{color: '#fff', fontWeight: 400}}>200</Typography>
                </Box>
            </Box>

            <Box onClick={() => editCell('division')} sx={{cursor: 'pointer',display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Division style={style}/>
                <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                    <Star style={{width: '20px'}}/>
                    <Typography sx={{color: '#fff', fontWeight: 400}}>10</Typography>
                </Box>
            </Box>

        </Box>
    )
}
