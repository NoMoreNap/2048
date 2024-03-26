import {Box, Typography} from "@mui/material";
import React from "react";
import {IModalStars} from "../../../interfaces/props.interface";
import {Btn} from "../../Buttons/Button";
import CloseIcon from '@mui/icons-material/Close';
import {VK} from "../../../utils/VKbridge";
import {api} from "../../../api/api";
import {useEnqueueSnackbar} from "../../../hooks/useSnackbar/useSnackbar";
import {setter, useGlobalValue} from "elum-state/react";
import {IS_MOBILE, USER_DATA} from "../../../states/elum";

export const Start: React.FC<IModalStars> = ({handleClose, setPage}) => {
    const {openSnackbar} = useEnqueueSnackbar()
    const isMobile = useGlobalValue(IS_MOBILE)


    const showAds = async () => {

        try {
            const show = await VK.awardAds()
            if (show.isSuccess) {
                const {data} = await api.post('/ads/check', show)
                openSnackbar({message: data.detail, variant: data.status ? 'success': 'error'})
                if (data.data.new_balance) {
                    setter(USER_DATA, (state) => ({...state, gameInfo: {...state.gameInfo, balance: data.data.new_balance}}))
                }
            } else {

            }
        } catch (e) {
            openSnackbar({message: 'Ошибка показа рекламы'})
            console.log(e)

        }

    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5}}>
            <Box sx={{width: '100%', textAlign: 'center', position: 'relative'}}>
                <Typography sx={{color: 'primary.main', fontSize: '1.5rem'}}>Пополнить</Typography>
                <CloseIcon onClick={() => handleClose()} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}/>
            </Box>
            <Btn onClick={() => setPage('tasks')} type={'blue'}>
                За задания
            </Btn>
            <Btn visible={isMobile.value !== 'mobile_iphone'} onClick={() => setPage('votes')} type={'default'}>
                За голоса
            </Btn>
            <Btn onClick={showAds} type={'purple'}>
                Посмотреть рекламу
            </Btn>
        </Box>
    )
}
