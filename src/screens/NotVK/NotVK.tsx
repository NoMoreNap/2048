import {Box, Typography} from "@mui/material";
import React from "react";
import {MainLogo, VK} from "../../assets";
import {Btn} from "../../components/Buttons/Button";
import {setter, useGlobalValue} from "elum-state/react";
import {IS_MOBILE, MODAL_STARS, PAGE} from "../../states/elum";
import {useNavigate} from "react-router-dom";
import {CircularBox} from "../game/components/entity/CircularBox";

const style = {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export const NOTVK = () => {

    const [isLoading, setIsLoading] = React.useState(true)

    const open = () => {
        const a = document.createElement('a')
        a.href = `https://vk.com/app51871802`
        a.target = '_blank'
        a.click()
    }

    React.useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    },[])
    return (
        <Box sx={style}>
            { !isLoading ?
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20vh',width: '100%'}}>
                <Box onClick={open} sx={{cursor: 'pointer'}}>
                    <MainLogo/>
                </Box>
                <Box onClick={open} sx={{cursor: 'pointer'}}>
                    <VK style={{ width: window.innerWidth < 450 ? `${window.innerWidth - 20}px` : ''}}/>
                </Box>
                <Typography onClick={open} sx={{color: '#fff', fontSize: '1.5rem', fontWeight: 300, textAlign: 'center',cursor: 'pointer'}}>
                    К сожалению, вы зашли не через ВК, нажмите на логотип, чтобы играть
                </Typography>

            </Box> : <CircularBox/>}
        </Box>
    )
}
