import {IScreenProvider, Props} from "../interfaces/props.interface";

export const ModalProvider: React.FC<IScreenProvider> = ({children, visible}) => {
    return (
        <>
            {visible && children}
        </>
    )
}
