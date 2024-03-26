import { cellStates } from "../logic"

export let CELL_SIZE = 120
export let GAP_SIZE = 10
export let BOARD_SIZE = 510
export let BOARD_PADDING = 0
/* mobile */
export const CELL_SIZE_MOBILE = 50
export const GAP_SIZE_MOBILE = 7
export const BOARD_SIZE_MOBILE = 225
export const BOARD_PADDING_MOBILE = 0

const width = window.innerWidth

if (width < 600) {
    GAP_SIZE = GAP_SIZE_MOBILE
    BOARD_SIZE = width - (10*2)
    CELL_SIZE = (BOARD_SIZE / 4) - (GAP_SIZE) +.5
    BOARD_PADDING = BOARD_PADDING_MOBILE
}

export const COLOR = {
    2: '#95859A',
    4: '#9366A3',
    8: '#C294D2',
    16: '#B455D6',
    32: '#A200DB',
    64: '#656596',
    128: '#C1BFFF',
    256: '#ABA9FF',
    512: '#9390FF',
    1024: '#5E5AFF',
    2048: '#322EF9',
    4096: '#335344',
    8192: '#4C8B6D',
    16384: '#99D1B7',
    32768: '#8ECDAF',
    65536: '#6CD1A1',
    131072: '#0BD775'
}

export const MOCK_CELLS = [
    {x: 0,y: 0, value: 2, id: 1,state: cellStates.IDLE},
    {x: 1,y: 0, value: 2, id: 2,state: cellStates.IDLE},
    {x: 2,y: 0, value: 8, id: 3,state: cellStates.IDLE},
    {x: 3,y: 0, value: 16, id: 4,state: cellStates.IDLE},
    {x: 0,y: 1, value: 32, id: 5,state: cellStates.IDLE},
    {x: 1,y: 1, value: 64, id: 6,state: cellStates.IDLE},
    {x: 2,y: 1, value: 128, id: 7,state: cellStates.IDLE},
    {x: 3,y: 1, value: 256, id: 8,state: cellStates.IDLE},
    {x: 0,y: 2, value: 512, id: 9,state: cellStates.IDLE},
    {x: 1,y: 2, value: 1024, id: 10,state: cellStates.IDLE},
    {x: 2,y: 2, value: 2048, id: 11,state: cellStates.IDLE},
    {x: 3,y: 2, value: 4096, id: 12,state: cellStates.IDLE},
    {x: 0,y: 3, value: 8192, id: 13,state: cellStates.IDLE},
    {x: 1,y: 3, value: 16384, id: 14,state: cellStates.IDLE},
    {x: 2,y: 3, value: 32768, id: 15,state: cellStates.IDLE},
    {x: 3,y: 3, value: 65536, id: 16,state: cellStates.IDLE},
]

export const directions = {
    TOP: 'TOP',
    BOTTOM: 'BOTTOM',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
}


export const VOTES = [
    {
        id: 0,
        value: 10,
        title: '2 голоса',
        cost: 2,
        sale: false
    },
    {
        id: 1,
        value: 50,
        title: '5 голосов',
        cost: 5,
        sale: false
    },
    {
        id: 2,
        value: 100,
        title: '7 голосов',
        cost: 7,
        sale: true
    },
    {
        id: 3,
        value: 500,
        title: '20 голосов',
        cost: 20,
        sale: false
    },
    {
        id: 4,
        value: 1000,
        title: '30 голосов',
        cost: 30,
        sale: false
    },
]


