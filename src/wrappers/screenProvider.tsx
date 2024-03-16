import {IScreenProvider, Props} from "../interfaces/props.interface";

export const ScreenProvider: React.FC<IScreenProvider> = ({children, visible}) => {
    return (
        <>
            {visible && children}
        </>
    )
}
