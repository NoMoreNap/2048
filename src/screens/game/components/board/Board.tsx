import React from 'react'
import {BoardLayout} from "../layouts/BoardLayout";
import {Field} from "../field/Field";
import { ICell } from '../../../../interfaces/objects.inteface';
import {Box, Typography} from "@mui/material";
import { api } from '../../../../api/api';
import CachedIcon from '@mui/icons-material/Cached';
import {Actions} from "../../../../components/Screens/Game/Actions/Actions";
import {setter, useGlobalValue} from "elum-state/react";
import {CELEBRATING, IS_NEW_GAME, IS_SAVE_GAME, MODAL, RESULT, USER_DATA} from "../../../../states/elum";
import {useEnqueueSnackbar} from "../../../../hooks/useSnackbar/useSnackbar";

export const Board = () => {
    const IsNewGame = useGlobalValue(IS_NEW_GAME)
    const IsSaveGame = useGlobalValue(IS_SAVE_GAME)
    const celebratingCell = useGlobalValue(CELEBRATING)

    const [cells, setCells] = React.useState<ICell[]>([])
    const [isloading, setIsLoading] = React.useState(true)

    const [score, setScore] = React.useState(0)
    const [touchStart, setTouchStart] = React.useState({x:0,y:0})
    const [touchEnd, setTouchEnd] = React.useState({x:0,y:0})

    const [action,setAction] = React.useState('null')
    const [anchor, setAnchor] = React.useState(0)
    const [lose, setLose] = React.useState(false)

    /* to buy functions */
    const [isEdit, setIsEdit] = React.useState(false)

    const {openSnackbar} = useEnqueueSnackbar()


    const minSwipeDistance = 50

    const onTouchStart = (e: any) => {
        e.preventDefault()
        setTouchEnd({x:0,y:0})
        setTouchStart({x:e.targetTouches[0].clientX,y:e.targetTouches[0].clientY})
    }
    const onTouchMove = (e: any) => {
        e.preventDefault()
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
        event.preventDefault()


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
        if (action !== 'null' && !isEdit && !lose) {
            try {
                const {data} = await api.post('/game/move', {
                    action,
                })
                setScore(data.data.score)
                setCells(data.data.cells)
                if (data.data.lose) {
                    setLose(true)
                    if (data.data.isMaxScore) {
                        setter(MODAL, 'max_score')
                    } else {
                        setter(MODAL, 'lose')
                    }
                    setter(RESULT, {maxCell: data.data.maxCell, score: data.data.score})
                }
                if (data.data.maxCell === celebratingCell.number) {
                    setter(RESULT, {maxCell: data.data.maxCell, score: data.data.score})
                    setter(MODAL, 'max_cell')
                }
            }catch (e) {
                console.log(e)
            }
        }
        console.log(performance.now() - start)
    }

    const initCells = async () => {
        try {
            const {data} = await api.get('/game/init')
            if (!data.data?.can_play) {
                setLose(true)
            }
            setCells(data.data.cells)
            setScore(data.data.score)
        }catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)

        }

    }

    const restartGame = async () => {
        setIsLoading(true)
        try {
            const {data} = await api.get('/game/restart')
            setLose(false)
            setCells(data.data.cells)
            setScore(data.data.score)
        }catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)

        }
    }

    const saveGame = async () => {
        setIsLoading(true)
        try {
            const {data} = await api.get('/game/actions/save')
            if (!data.status) {
                await restartGame()
                return openSnackbar({message: data.detail, variant: 'error'})
            }
            setter(USER_DATA, (state) => ({...state, gameInfo: {...state.gameInfo, balance: data.data.new_balance}}))
            setCells(data.data.cells)
            setScore(data.data.score)
            setLose(false)
        }catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)

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

    React.useEffect(() => {
        if (IsNewGame) {
            setter(IS_NEW_GAME, false)
            restartGame()
        }
        if (IsSaveGame) {
            setter(IS_SAVE_GAME, false)
            saveGame()
        }
    },[IsNewGame, IsSaveGame])

    return (
        <>
            <Box onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} display={'flex'} flexDirection={'column'} gap={2}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', zIndex: 2}}>
                    <Box sx={{display: 'flex', gap: 2}}>
                        <Typography sx={{color: '#fff', fontSize: '1.2rem'}}>Счет: </Typography>
                        <Typography sx={{color: '#fff', fontWeight: 500, fontSize: '1.2rem'}}>{score}</Typography>
                    </Box>
                    <Box onClick={restartGame}  sx={{cursor: 'pointer'}}>
                        <CachedIcon className={isloading ? 'spinner' : ''} sx={{color: '#fff'}}/>
                    </Box>
                </Box>
                <BoardLayout>
                    <Field isEdit={isEdit} setIsEdit={setIsEdit} setCells={setCells} cells={cells} isLoading={isloading}/>
                </BoardLayout>
            </Box>
            <Actions setCells={setCells} setScore={setScore} setIsEdit={setIsEdit} isEdit={isEdit}/>
        </>
    )
}

