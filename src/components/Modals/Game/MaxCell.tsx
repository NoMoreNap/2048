import {Box, Typography} from "@mui/material";
import {setter, useGlobalValue} from "elum-state/react";
import {CELEBRATING, IS_NEW_GAME, IS_SAVE_GAME, RESULT} from "../../../states/elum";
import {Btn} from "../../Buttons/Button";
import React from "react";
import {IModalContent} from "../../../interfaces/props.interface";

export const MaxCell: React.FC<IModalContent> = ({handleClose}) => {
    const celebratingCell = useGlobalValue(CELEBRATING)

    const newGame = () => {
        handleClose()
        setter(IS_NEW_GAME, true)
    }
    const saveGame = () => {
        handleClose()
        setter(IS_SAVE_GAME, true)
    }



    React.useEffect(() => {
        setter(CELEBRATING, {number: celebratingCell.number*2})
    }, [])
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 10,
            p: 4,
            overflow: 'hidden',
            borderRadius: '16px',
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                top: 20,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'visible'
            }}>
                <Box sx={{
                    backgroundImage: 'url(/assets/backgrounds/Rays.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    zIndex: -1,
                }}/>
                <img src='/assets/backgrounds/Trophy.png'/>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column',gap: 5}}>
                <Btn onClick={() => {}} type={'blue'}>
                    Поделиться в истории
                </Btn>
                <Btn onClick={() => handleClose()} type={'revert-outlined'}>
                    Закрыть
                </Btn>
            </Box>
        </Box>
    )

}
