import {Box, Typography} from "@mui/material";
import {setter, useGlobalValue} from "elum-state/react";
import {IS_NEW_GAME, IS_SAVE_GAME, RESULT} from "../../../states/elum";
import {Btn} from "../../Buttons/Button";
import React from "react";
import {IModalContent} from "../../../interfaces/props.interface";
import {Star} from "../../../assets";
import {CELL_SIZE, COLOR} from "../../../screens/game/configs/main.config";

export const LoseModal: React.FC<IModalContent> = ({handleClose}) => {
    const result = useGlobalValue(RESULT)

    const newGame = () => {
        handleClose()
        setter(IS_NEW_GAME, true)
    }
    const saveGame = () => {
        handleClose()
        setter(IS_SAVE_GAME, true)
    }

    const valueStyle = {
        color: '#fff',
        fontWeight: 700,
        position: 'relative',
        zIndex: 1,
        fontSize: (() =>
                result.maxCell < 100 ? '2rem'
                    : result.maxCell < 1000 ? '1.8rem'
                        : result.maxCell < 10000 ? '1.5rem'
                            : '1rem'
        )()
    }
    return (
        <Box sx={{display: 'flex', alignItems: 'center', position: 'relative', flexDirection: 'column', justifyContent: 'center', gap: 10,    p: 4, overflow: 'visible'}}>
            <Box sx={{
                width: CELL_SIZE,
                height: CELL_SIZE,
                //@ts-ignore
                backgroundColor: COLOR[result.maxCell],
                borderRadius: '5px',
                position: 'absolute',
                left: '50%',
                top: -4,
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography sx={valueStyle}>
                    {result.maxCell}
                </Typography>
            </Box>
            <Box sx={{marginTop: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{fontSize: '2rem', fontWeight: 500, color: 'rgba(71, 67, 250, 1)'}}>Не повезло :(</Typography>
                <Typography sx={{fontSize: '2rem', fontWeight: 500, color: 'rgba(71, 67, 250, 1)'}}>{result.score}</Typography>
            </Box>
            <Box sx={{display: 'flex', flexDirection: 'column',gap: 5}}>
                <Btn onClick={saveGame} type={'default'}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <Typography>
                            Продолжить игру
                        </Typography>
                        <Star/>
                        <Typography>20</Typography>
                    </Box>
                </Btn>
                <Btn onClick={newGame} type={'revert-outlined'}>
                    Начать заново
                </Btn>
            </Box>
        </Box>
    )

}
