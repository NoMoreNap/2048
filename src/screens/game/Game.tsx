import {Box} from "@mui/material";
import {Board} from "./components/board/Board";
import {Navbar} from "../../components/Screens/Game/Nav/Navbar";
import {VK} from "../../utils/VKbridge";
import React from "react";

export const Game = () => {
    React.useEffect(() => {
        VK.interstitialAds()
    },[])
    return (
        <Box sx={{display: 'flex',  width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 5}}>
            <Navbar/>
            <Board/>
        </Box>
    )
}
