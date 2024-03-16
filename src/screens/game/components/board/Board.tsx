import React, {ReactNode} from 'react'
import {BoardLayout} from "../layouts/BoardLayout";
import {Field} from "../field/Field";
import {Matrix} from "../../engine/Matrix";
import { ICell } from '../../../../interfaces/objects.inteface';
import {initCells, moveCells, newCell, removeAndIncrease} from "../../logic";
import {Box, Button, Menu, MenuItem, Typography} from "@mui/material";
import {cellsEquals} from "../../logic/cells/cellsManager";
import {directions, MOCK_CELLS} from "../../configs/main.config";
import { api } from '../../../../api/api';

function Menun(props: {
    anchorEl: any,
    onClose: any,
    id: string,
    open: (url?: (string | URL), target?: string, features?: string) => (WindowProxy | null),
    MenuListProps: { "aria-labelledby": string },
    children: ReactNode
}) {
    return null;
}
export const Board = () => {
    const [cells, setCells] = React.useState<ICell[]>([])
    const [isloading, setIsLoading] = React.useState(true)

    const [score, setScore] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState({x:0,y:0})
    const [touchEnd, setTouchEnd] = React.useState({x:0,y:0})

    const [action,setAction] = React.useState('null')
    const [anchor, setAnchor] = React.useState(0)
    const [lose, setLose] = React.useState(false)


    /* to buy functions */
    const [stack, setStack] = React.useState([cells])
    const [isEdit, setIsEdit] = React.useState('null')


    const minSwipeDistance = 50

    const onTouchStart = (e: any) => {
        setTouchEnd({x:0,y:0})
        setTouchStart({x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY})
    }
    const onTouchMove = (e: any) => {
        setTouchEnd({x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY})
    }
    const onTouchEnd = () => {

        if (!touchStart.x || !touchEnd.x) return
        const distanceX = touchStart.x - touchEnd.x
        const distanceY = touchStart.y - touchEnd.y
        const isLeftSwipe = distanceX > minSwipeDistance
        const isRightSwipe = distanceX < -minSwipeDistance
        const isTopSwipe = distanceY > minSwipeDistance
        const isBottomSwipe = distanceY < -minSwipeDistance
        setAnchor(Math.random())
        if (isRightSwipe) {
            return setAction('right')
        }
        if (isLeftSwipe) {
            return setAction('left')
        }
        if (isTopSwipe) {
            return setAction('top')
        }
        if (isBottomSwipe) {
            return setAction('bottom')
        }

    }


    const onKeyPress = (event: any)  => {


        setAnchor(Math.random())
        if (event.keyCode === 87 || event.keyCode === 38) {
            return setAction('top')
        }
        if (event.keyCode === 65 || event.keyCode === 37) {
            return setAction('left')
        }
        if (event.keyCode === 83 || event.keyCode === 40) {
            return setAction('bottom')
        }
        if (event.keyCode === 68 || event.keyCode === 39) {
            return setAction('right')

        }



    }
    const handleMove = async (action: string) => {
        const start = performance.now()
        if (action !== 'null' && isEdit === 'null' && !lose) {
            try {
                const {data} = await api.post('/game/move', {
                    action,
                    cells
                })
                setCells(data.data.cells)
                setScore(data.data.score)
            }catch (e) {
                console.log(e)
            }
        }


        // if (action !== 'null' && isEdit === 'null' && !lose) {
        //     const movingCells = moveCells(cells, action.toUpperCase())
        //
        //     await new Promise(_=> setTimeout(_, 100))
        //     const incCells = removeAndIncrease(movingCells, setScore, score)
        //     const is_eqaul_cells = cellsEquals(cells, incCells)
        //
        //     let wrapperCells: any = incCells
        //
        //     if (! is_eqaul_cells) {
        //         wrapperCells = newCell(incCells)
        //     }
        //     setCells(wrapperCells)
        //     if (wrapperCells.length === 16) {
        //         validateLose(wrapperCells)
        //     }
        // }
    }

    // const validateLose = (cells: ICell[]) => {
    //     let isLose = false
    //     const moves = Object.values(directions)
    //     let cellsWrapper = [...cells]
    //     for (const el of moves)  {
    //         const movingCells = [...moveCells(cellsWrapper, el)]
    //         const incCells = removeAndIncrease(movingCells, () => {}, 0)
    //         isLose = cellsEquals(cellsWrapper, incCells)
    //         if (!isLose) {
    //             break;
    //         }
    //     }
    //     if (isLose) setLose(true)
    //
    // }

    const backStage = () => {
        const newStack = stack.slice(0,stack.length -1)
        if (newStack !== undefined) {
            setCells(newStack[newStack?.length - 1])
            setStack(newStack)
        }

    }

    const initCells = async () => {
        try {
            const {data} = await api.get('/game/init')
            setCells(data.data.cells)
            setScore(data.data.score)
        }catch (e) {
            console.log(e)
        }

    }

    React.useEffect(() => {
        handleMove(action)
    }, [anchor])


    React.useEffect(() => {
        initCells()
        document.addEventListener('keydown',onKeyPress)
        return () => document.removeEventListener('keydown', onKeyPress)
    },[])

    return (
        <Box onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} display={'flex'} flexDirection={'column'} gap={2}>
            <Box sx={{display: 'flex', gap: 2}}>
                <Typography sx={{color: '#fff'}}>Счет: </Typography>
                <Typography sx={{color: '#fff', fontWeight: 500}}>{score}</Typography>
            </Box>
            <BoardLayout>
                <Field isEdit={isEdit} setIsEdit={setIsEdit} setCells={setCells} cells={cells}/>
            </BoardLayout>
        </Box>
    )
}

