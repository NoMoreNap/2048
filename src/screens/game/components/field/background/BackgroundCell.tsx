import React from 'react'
import {Box} from "@mui/material";
import {CELL_SIZE} from "../../../configs/main.config";

export const BackgroundCell = () => {
    const style = {
        gridColumn: 'span 1',
        backgroundColor: '#fff',
        borderRadius: '5px',
        width: CELL_SIZE,
        height: CELL_SIZE,
        pointerEvents: 'none',
        userSelect: 'none'
    }
    return (
        <Box sx ={style}/>
    )
}
