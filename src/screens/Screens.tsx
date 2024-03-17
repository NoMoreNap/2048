import React from "react";
import {CircularBox} from "./game/components/entity/CircularBox";
import {api} from "../api/api";
import { setter, useGlobalValue } from "elum-state/react";
import {MODAL, MODAL_STARS, PAGE, USER_DATA} from "../states/elum";
import {ScreenProvider} from "../wrappers/screenProvider";
import {SCREENS} from "./Screens.types";
import {ModalWrapper} from "../wrappers/ModalsGame";
import {ModalStars} from "../wrappers/ModalAddBalance";


export const Screens = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const page = useGlobalValue(PAGE);
    const modal = useGlobalValue(MODAL)
    const modalStars = useGlobalValue(MODAL_STARS)


    const getData = async () => {
        try {
            const {data} = await api.get('users/get')
            setter(USER_DATA, data.data);
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

            {modal !== '' &&
            <ModalWrapper type={modal}/>
            }

            {
                modalStars &&
                <ModalStars/>
            }
        </>
    )
}
