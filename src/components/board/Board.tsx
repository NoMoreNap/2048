import React, {ReactNode} from 'react'
import {BoardLayout} from "../layouts/BoardLayout";
import {Field} from "../field/Field";
import {Matrix} from "../../engine/Matrix";
import { ICell } from '../../interfaces/objects.inteface';
import {initCells, moveCells, newCell, removeAndIncrease} from "../../logic";
import {Box, Button, Menu, MenuItem, Typography} from "@mui/material";

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
    const [cells, setCells] = React.useState<ICell[]>(initCells())

    const [score, setScore] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState({x:0,y:0})
    const [touchEnd, setTouchEnd] = React.useState({x:0,y:0})

    const [action,setAction] = React.useState('null')
    const [anchor, setAnchor] = React.useState(0)

    /* to buy functions */
    const [stack, setStack] = React.useState([cells])
    const [isEdit, setIsEdit] = React.useState('null')


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

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

    const restart = () => {
        const iniCells = initCells()
        setCells(iniCells)
        setStack([iniCells])
        setScore(0)
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
        if (action !== 'null' && isEdit === 'null') {
            const movingCells = moveCells(cells, action.toUpperCase())

            await new Promise(_=> setTimeout(_, 100))
            const incCells = removeAndIncrease(movingCells, setScore, score)
            const wrapperCells = newCell(incCells)
            if (!wrapperCells) {
                let loose = true
                for (let i = 0; i < cells.length; i++) {
                    if (cells[i].value !== movingCells[i].value) {
                        loose = false
                        break
                    }

                }
                if (loose) {
                    //alert('вы проиграли')
                    //restart()
                    //return
                }
                setCells(incCells)
            } else {
                setCells(wrapperCells)
            }
        }
    }

    const backStage = () => {
        console.log(stack)
        const newStack = stack.slice(0,stack.length -1)
        if (newStack !== undefined) {
            console.log(newStack)
            setCells(newStack[newStack?.length - 1])
            setStack(newStack)
        }

    }

    React.useEffect(() => {
        handleMove(action)
    }, [anchor])

    React.useEffect(() => {
        isEdit === 'null' && setStack([...stack, cells])
    }, [anchor])


    React.useEffect(() => {
        document.addEventListener('keydown',onKeyPress)
        return () => document.removeEventListener('keydown', onKeyPress)
    },[])
    console.log(window.innerWidth)

    return (
        <Box onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} display={'flex'} flexDirection={'column'} gap={2}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <div>
                        <Button
                            id="basic-button"
                            variant={'contained'}
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            Меню
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <Box display={'flex'} flexDirection={'column'} gap={1}>
                                <Button  onClick={restart}>Новая игра</Button>
                                <Button disabled={stack.length <= 2} onClick={backStage}>Отменить ход</Button>
                                <Button disabled={isEdit === 'delete'}  onClick={() => setIsEdit('delete')}>Удалить ячейку</Button>
                                <Button disabled={isEdit === 'up_2'} onClick={() => setIsEdit('up_2')}>X2</Button>
                                <Button disabled={isEdit === 'division_2'} onClick={() => setIsEdit('division_2')}>/2</Button>
                            </Box>

                        </Menu>
                    </div>

                <Typography>Очки: {score}</Typography>
            </Box>
            <BoardLayout>
                <Field isEdit={isEdit} setIsEdit={setIsEdit} setCells={setCells} cells={cells}/>
            </BoardLayout>
        </Box>

    )
}
