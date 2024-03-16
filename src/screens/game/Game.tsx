import {Box} from "@mui/material";
import {Board} from "./components/board/Board";
import {Navbar} from "../../components/Screens/Game/Nav/Navbar";

export const Game = () => {
    return (
        <Box sx={{display: 'flex',  width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Navbar/>
            <Board/>
        </Box>
    )
}
