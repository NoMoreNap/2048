import React from "react";
import {ITopUser, ITopUsersProps} from "../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {TopHeader} from "./Header/Top.header";
import {TopBody} from "./Body/Top.body";

export const TopTable: React.FC<ITopUsersProps> = ({users}) => {
    return (
        <Box sx={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column', gap: 1}}>
            <TopHeader/>
            <Typography sx={{color: '#fff', fontSize: '1.8rem', fontWeight: 600}}>Рейтинг</Typography>
            <TopBody users={users}/>
        </Box>
    )
}
