import React from 'react'
import {Props} from "../../../interfaces/props.interface";
import {Box} from "@mui/material";
import {GAP_SIZE} from "../../../configs/main.config";

export const Background: React.FC<Props> = ({children}) => {

    const style = {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridRowGap: GAP_SIZE,
        gridColumnGap: GAP_SIZE
    }
    return (
        <Box sx={style}>
            {children}
        </Box>
    )
}
