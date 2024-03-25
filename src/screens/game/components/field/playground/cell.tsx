import React from 'react'
import {Box, Typography} from "@mui/material";
import {ICell} from "../../../../../interfaces/objects.inteface";
import {CELL_SIZE, COLOR, GAP_SIZE} from "../../../configs/main.config";
import {calcColor} from "../../../functions/calcColor";

export const PlayCell: React.FC<ICell> = ({x,y,value, id, onClick, state, isEdit}) => {
    //@ts-ignore
    const color = COLOR[value];
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
        justifyContent: 'center',
        overflow: 'visible',
        border: isEdit ? '5px dashed #fff' : '',
        cursor: isEdit ? 'pointer' : '',
        zIndex: 1
    }

    const valueStyle = {
        color: '#fff',
        fontWeight: 700,
        position: 'relative',
        zIndex: 1,
        fontSize: (() =>
                value < 100 ? 50
                    : value < 1000 ? 40
                        : value < 10000 ? 30
                            : 20
        )()
    }
    return (
        <Box onClick={onClick} sx ={style}>
            {/*<Box sx={animation}/>*/}
            <Typography sx={valueStyle}>
                {value}
            </Typography>
        </Box>
    )
}
