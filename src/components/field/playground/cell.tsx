import React from 'react'
import {Box, Typography} from "@mui/material";
import {ICell} from "../../../interfaces/objects.inteface";
import {CELL_SIZE, GAP_SIZE} from "../../../configs/main.config";
import {calcColor} from "../../../functions/calcColor";

export const PlayCell: React.FC<ICell> = ({x,y,value, id}) => {
    const color = calcColor(value);
    const style = {
        backgroundColor: color,
        position: 'absolute',
        transform: `translate(${(CELL_SIZE+GAP_SIZE)*x}px,${(CELL_SIZE+GAP_SIZE)*y}px)`,
        borderRadius: '5px',
        transitionProperty: 'transform',
        transition: '100ms ease-in-out',
        width: CELL_SIZE,
        height: CELL_SIZE,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const valueStyle = {
        color: '#6a4e4e',
        fontWeight: 700,
        fontSize: (() =>
                value < 100 ? 50
                    : value < 1000 ? 40
                        : value < 10000 ? 30
                            : 20
        )()
    }
    return (
        <Box sx ={style}>
            <Typography sx={valueStyle}>
                {value}
            </Typography>
        </Box>
    )
}
