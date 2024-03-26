import React from "react";
import {ITopUsersProps} from "../../../interfaces/props.interface";
import {Box, Typography} from "@mui/material";
import {TopBodyRow} from "./Top.body.row";
import SimpleBar from 'simplebar-react';

export const TopBody: React.FC<ITopUsersProps> = ({users}) => {
    console.log(users)
    return (
        <SimpleBar
            forceVisible="y"
            autoHide={false}
            classNames={{
                "scrollbar": 'scrollbar'
            }}
            className='center'
            style={{
                width: '100%',
                maxHeight: 'calc(100% - 32vh)',
                overflow: "visible"
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                    width: '100%',
                }}>
                    {
                        users.length ?
                            users.map((user,i) => <TopBodyRow key={`${user.vkid}_user_${i}`} {...user} position={i}/>) :
                            <Typography>Рейтинг пуст :(</Typography>
                    }
                </Box>
        </SimpleBar>
    )
}
