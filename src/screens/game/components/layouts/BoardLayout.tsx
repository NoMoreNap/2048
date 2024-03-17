import React from 'react'
import {Props} from "../../../../interfaces/props.interface";
import {Box} from "@mui/material";
import {BOARD_PADDING, BOARD_SIZE} from "../../configs/main.config";

export  const BoardLayout: React.FC<Props> = ({children}) => {
    const style = {
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: '10px',
        backgroundColor: 'transparent',
        padding: BOARD_PADDING,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'visible',
        position: 'relative'
    }
    return (

        <Box sx={style}>
            {children}
        </Box>
    )
}
