import React from "react";
import {ITask} from "../../../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {Btn} from "../../../Buttons/Button";
import {Star} from "../../../../assets";
import {VOTES} from "../../../../screens/game/configs/main.config";
import {VK} from "../../../../utils/VKbridge";
import {setter} from "elum-state/react";
import {USER_DATA} from "../../../../states/elum";
import {values} from "lodash";
import {useEnqueueSnackbar} from "../../../../hooks/useSnackbar/useSnackbar";

export const VotesRow: React.FC<{vote: typeof VOTES[0]}> = ({vote}) => {
    const {openSnackbar} = useEnqueueSnackbar()


    const buyStars = async () => {
        try {
            const data = await VK.buy(`star_${vote.value}`)
            if(data) {
                setter(USER_DATA, (state) => ({...state, gameInfo: {...state.gameInfo, balance: state.gameInfo.balance + vote.value}}))
                openSnackbar({message: 'Покупка состоялась!', variant: 'success'})
            } else {
                openSnackbar({message: 'Ошибка покупки!', variant: 'error'})
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Btn type={vote.sale ? 'gold' : 'blue'} onClick={buyStars}>
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
