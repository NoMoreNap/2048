import {Start} from "./start/Start";
import {Game} from "./game/Game";
import {Top} from "./top/Top";

export const SCREENS = [
    {
        type: 'start',
        element: <Start/>
    },
    {
        type: 'game',
        element: <Game/>
    },
    {
        type: 'top',
        element: <Top/>
    }
]
