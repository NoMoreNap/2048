import React from 'react'
import {BoardLayout} from "../layouts/BoardLayout";
import {Field} from "../field/Field";
import {Matrix} from "../../engine/Matrix";
import { ICell } from '../../interfaces/objects.inteface';
import {initCells} from "../../logic";
import {Box, Button, Typography} from "@mui/material";

export const Board = () => {
    const [cells, setCells] = React.useState<ICell[]>(initCells())
    const [score, setScore] = React.useState(0)

    const restart = () => {
        setCells(initCells())
        setScore(0)
    }

    return (
        <Box display={'flex'} flexDirection={'column'} gap={2}>
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
