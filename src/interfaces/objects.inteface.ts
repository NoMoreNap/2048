export interface ICell {
    x: number,
    y: number,
    value: number,
    id: number | string,
    state?: string,
    killedBy?: ICell | number,
    onClick?: (a?: any) => any
}

export interface IUserData {
    vkid: number
    profileInfo: {
        first_name?: string
        second_name?: string
    },
    gameInfo: {
        balance: number
    },
}


export type coordType = 1 | 2 | 3 | 0
