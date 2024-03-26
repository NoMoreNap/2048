import {Box} from "@mui/material";
import {Board} from "./components/board/Board";
import {MobileNav, Navbar} from "../../components/Screens/Game/Nav/Navbar";
import {VK} from "../../utils/VKbridge";
import React from "react";
import {useGlobalValue} from "elum-state/react";
import {IS_MOBILE} from "../../states/elum";

export const Game = () => {
    const isMobile = useGlobalValue(IS_MOBILE)
    React.useEffect(() => {
        VK.interstitialAds()
    },[])
    return (
        <Box sx={{display: 'flex',  width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: isMobile.key ? 2 : 5}}>
            {!isMobile.key ?
                <Navbar/> :
                <MobileNav/>
            }
            <Board/>
        </Box>
    )
}
