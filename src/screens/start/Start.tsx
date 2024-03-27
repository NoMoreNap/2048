import {Box, Typography} from "@mui/material";
import React from "react";
import {MainLogo} from "../../assets";
import {Btn} from "../../components/Buttons/Button";
import {setter, useGlobalValue} from "elum-state/react";
import {IS_MOBILE, MODAL_STARS, PAGE, USER_DATA} from "../../states/elum";
import {useEnqueueSnackbar} from "../../hooks/useSnackbar/useSnackbar";
import {VK} from "../../utils/VKbridge";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;
import bridge from "@vkontakte/vk-bridge";

const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const Start = () => {
    const isMobile = useGlobalValue(IS_MOBILE)
    const userData = useGlobalValue(USER_DATA)

    // const {openSnackbar} = useEnqueueSnackbar()
    // openSnackbar({message: String(window.innerWidth), variant: 'info'})

    const clickOnPlay = async () => {
        if(userData.misc.show_sub_notify !== undefined && userData.misc.show_sub_notify) {
            await bridge.send('VKWebAppAllowNotifications').catch(console.dir)
        }
        setter(PAGE, 'game')
    }

    const clickOnTop = async () => {
        if(userData.misc.show_sub_subscribe !== undefined && userData.misc.show_sub_subscribe) {
            await bridge.send('VKWebAppJoinGroup',{group_id: 218865534}).catch(console.dir)
        }
        setter(PAGE, 'top')
    }
    return (
        <Box sx={style}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10vh',width: '100%'}}>
                <Box>
                    <MainLogo/>
                </Box>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column'
                    ,width: `calc(100% - ${isMobile.key ? '20': '200'}px)`,
                    gap: '3vh',
                    textAlign: 'center'
                }} >
                    <Btn onClick={clickOnPlay} type='default'>Играть</Btn>
                    <Btn onClick={() => setter(MODAL_STARS, true)} type='starred'>Пополнить</Btn>
                    <Btn onClick={clickOnTop} type='outlined'>Рейтинг</Btn>
                    <Typography onClick={() => VK.showRules()} sx={{color: '#fff', cursor: 'pointer', zIndex: 3}}>
                        Как играть?
                    </Typography>
                </Box>

            </Box>
        </Box>
    )
}
