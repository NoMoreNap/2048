import React from 'react';
import {ThemeProvider} from "@mui/material";
import {Screens} from "./screens/Screens";
import {PagesWrapper} from "./wrappers/PageWrapper";
import {theme} from "./styles/mui.theme";
import {SnackbarProvider} from "notistack";
import {SnackbarCloseButton} from "./hooks/useSnackbar/useSnackbar";
import 'simplebar-react/dist/simplebar.min.css';
import bridge, {BannerAdLocation} from "@vkontakte/vk-bridge";
import {setter} from "elum-state/react";
import {BANNER_HEIGHT} from "./states/elum";


function App() {

    React.useEffect(() => {
        bridge.send('VKWebAppShowBannerAd', {
            banner_location: 'bottom' as BannerAdLocation
        }).then(r => {
            if (r.result) {
                setter(BANNER_HEIGHT, r.banner_height)
                console.log(r)
            }
        }).catch((error) => {console.log(error);});
    }, [])
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={2} autoHideDuration={1000}
                              action={(key) => <SnackbarCloseButton snackbarKey={key} />} >
                <PagesWrapper>
                    <Screens/>
                </PagesWrapper>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
