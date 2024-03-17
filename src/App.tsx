import React from 'react';
import {Box, ThemeProvider} from "@mui/material";
import {Board} from "./screens/game/components/board/Board";
import {Screens} from "./screens/Screens";
import {PagesWrapper} from "./wrappers/PageWrapper";
import {theme} from "./styles/mui.theme";
import {SnackbarProvider} from "notistack";
import {SnackbarCloseButton} from "./hooks/useSnackbar/useSnackbar";

function App() {

    return (
        <ThemeProvider theme={theme}>

            <SnackbarProvider maxSnack={2} autoHideDuration={10000}
                              action={(key) => <SnackbarCloseButton snackbarKey={key} />} >
                <PagesWrapper>
                    <Screens/>
                </PagesWrapper>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
