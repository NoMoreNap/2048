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
