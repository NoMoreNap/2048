import React from 'react';
import {Box, ThemeProvider} from "@mui/material";
import {Board} from "./screens/game/components/board/Board";
import {Screens} from "./screens/Screens";
import {PagesWrapper} from "./wrappers/PageWrapper";
import {theme} from "./styles/mui.theme";

function App() {

    return (
        <ThemeProvider theme={theme}>
            <PagesWrapper>
                <Screens/>
            </PagesWrapper>
        </ThemeProvider>
    );
}

export default App;
