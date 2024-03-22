import React from "react";
import {ITopUser, ITopUserRow} from "../../../interfaces/props.interface";
import {Avatar, Box, Typography} from "@mui/material";
import {First, Second, Third} from "../../../assets";

const PositionsIcons = (pos: number) => {
    switch (pos) {
        case 0:
            return <First/>
        case 1:
            return <Second/>
        case 2:
            return <Third/>
        default:
            return  <Typography sx={{fontSize: '1.5rem'}}>{pos}</Typography>

    }

}



export const TopBodyRow: React.FC<ITopUserRow> = ({name, vkid, score, photo, position}) => {

    const openProfile = () => {
        const a = document.createElement('a')
        a.href = `https://vk.com/id${vkid}`
        a.target = '_blank'
        a.click()
    }

    return (
        <Box
            onClick={openProfile}
            sx={{
            width: '100%',
            height: '60px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            padding: '8px 15px',
            cursor: 'pointer',
            zIndex: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative'
        }}>
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', height: '100%', overflow: 'visible'}}>
                <Box sx={{width: '70px'}}>
                    {PositionsIcons(position)}
                </Box>
                <Box sx={{display: 'flex', gap: 1,alignItems: 'center'}}>
                    <Avatar src={photo}/>
                    <Typography>
                        {name}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{float: 'right'}}>
                {
                    score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                }
            </Typography>


        </Box>
    )
}
