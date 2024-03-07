import React from 'react'
import {BoardLayout} from "../layouts/BoardLayout";
import {Field} from "../field/Field";
import {Matrix} from "../../engine/Matrix";
import { ICell } from '../../interfaces/objects.inteface';
import {initCells, moveCells} from "../../logic";
import {Box, Button, Typography} from "@mui/material";

export const Board = () => {
    const [cells, setCells] = React.useState<ICell[]>(initCells())
    const [score, setScore] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState({x:0,y:0})
    const [touchEnd, setTouchEnd] = React.useState({x:0,y:0})

    const [action,setAction] = React.useState('null')
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
    console.log(action)

    const restart = () => {
        setAction('null')
        setCells(initCells())
        setScore(0)
    }

    const onKeyPress = (event: any)  => {
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

    React.useEffect(() => {
        if (action !== 'null') {
           setCells(moveCells(cells, action.toUpperCase()))
            //moveCells(cells, action)
        }
    },[action])


    React.useEffect(() => {
        document.addEventListener('keydown',onKeyPress)
        return () => document.removeEventListener('keydown', onKeyPress)
    },[])

    return (
        <Box onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Button variant={'contained'} onClick={restart}>Новая игра</Button>
                <Typography>Очки: {score}</Typography>
            </Box>
            <BoardLayout>
                <Field cells={cells}/>
            </BoardLayout>
        </Box>

    )
}
