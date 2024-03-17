import {atom, GlobalAtom} from "elum-state/react";
import {IUserData} from "../interfaces/objects.inteface";

export const USER_DATA: GlobalAtom<IUserData> = atom({
    key: "user_data",
    default: {} as IUserData,
});

export const PAGE  = atom({
    key: "page",
    default: 'start',
});

export const DEFAULT_EDITING_CELL ={
        id: '',
        isEditing: false,
        action: ''
    }

export const EDITING_CELL = atom({
    key: 'editing_cell',
    default: DEFAULT_EDITING_CELL
})

export const MODAL = atom({
    key: 'modal',
    default: ''
})

export const RESULT = atom({
    key: 'result',
    default: {
        maxCell: 0,
        score: 0
    }
})

export const IS_NEW_GAME = atom({
    key: 'is_new_game',
    default: false
})

export const IS_SAVE_GAME = atom({
    key: 'is_save_game',
    default: false
})

export const CELEBRATING = atom({
    key: 'celebrating',
    default: {
        number: 2048,
    }
})

export const MODAL_STARS = atom({
    key: 'modal_stars',
    default: false
})
