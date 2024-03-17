import {Box} from "@mui/material";
import React from "react";
import {MainLogo} from "../../assets";
import {Btn} from "../../components/Buttons/Button";
import {setter} from "elum-state/react";
import {MODAL_STARS, PAGE} from "../../states/elum";

const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Start = () => {
    return (
        <Box sx={style}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20vh',width: '100%'}}>
                <Box>
                    <MainLogo/>
                </Box>
                <Box sx={{display: 'flex', flexDirection: 'column',width: 'calc(100% - 200px)', gap: '3vh'}}>
                    <Btn onClick={() => setter(PAGE, 'game')} type='default'>Играть</Btn>
                    <Btn onClick={() => setter(MODAL_STARS, true)} type='starred'>Пополнить</Btn>
                    <Btn type='outlined'>Рейтинг</Btn>
                </Box>

            </Box>
        </Box>
    )
}
