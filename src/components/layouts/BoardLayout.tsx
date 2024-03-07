import React from 'react'
import {Props} from "../../interfaces/props.interface";
import {Box} from "@mui/material";
import {BOARD_PADDING, BOARD_SIZE} from "../../configs/main.config";

export  const BoardLayout: React.FC<Props> = ({children}) => {
    const style = {
        width: BOARD_SIZE,
        height: BOARD_SIZE,
        borderRadius: '10px',
        backgroundColor: 'rgba(255,113,113,0.47)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: BOARD_PADDING
    }
    return (

        <Box sx={style}>
            {children}
        </Box>
    )
}
