export interface ICell {
    x: number,
    y: number,
    value: number,
    id: string,
    state?: string,
    killedBy?: ICell | number,
    onClick?: (a?: any) => any
    isEdit?: boolean
}

export interface IUserData {
    misc: {
        show_sub_notify?: boolean
        show_sub_subscribe?: boolean
    }
    vkid: number
    profileInfo: {
        first_name?: string
        second_name?: string
    },
    gameInfo: {
        balance: number
    },
}

export interface ITopUsers {
    data: {
        users:{
            vkid: number, score: number
        }[],
        misc: {
            show_sub_notify?: boolean
            show_sub_subscribe?: boolean
        }
    }
}


export type coordType = 1 | 2 | 3 | 0
