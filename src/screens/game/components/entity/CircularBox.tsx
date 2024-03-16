import {Box, CircularProgress} from "@mui/material";
import React from "react";

export const CircularBox = () => {
    return (
        <Box sx={{width: '100%', height: '100%',  display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <CircularProgress/>
        </Box>
    )

}
