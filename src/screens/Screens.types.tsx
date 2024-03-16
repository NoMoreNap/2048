import {Start} from "./start/Start";
import {Game} from "./game/Game";

export const SCREENS = [
    {
        type: 'start',
        element: <Start/>
    },
    {
        type: 'game',
        element: <Game/>
    }
]
