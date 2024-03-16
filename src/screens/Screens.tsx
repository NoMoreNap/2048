import {Box} from "@mui/material";
import React from "react";
import {CircularBox} from "./game/components/entity/CircularBox";
import {api} from "../api/api";
import { setter, useGlobalValue } from "elum-state/react";
import {PAGE, USER_DATA} from "../states/elum";
import {IUserData} from "../interfaces/objects.inteface";
import {ScreenProvider} from "../wrappers/screenProvider";
import {SCREENS} from "./Screens.types";


export const Screens = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const page = useGlobalValue(PAGE);

    const getData = async () => {
        try {
            const {data} = await api.get<IUserData>('users/get')
            setter(USER_DATA, data);
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        getData()
    },[])

    if (isLoading) {
        return <CircularBox/>
    }

    return (
        <>
            {SCREENS.map(el =>
                <ScreenProvider visible={page === el.type}>
                    {el.element}
                </ScreenProvider>
            )}
        </>
    )
}
