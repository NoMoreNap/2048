import React from 'react'
import {IField} from "../../interfaces/props.interface";
import {Box} from "@mui/material";
import {Background} from "./background/Background";
import {BackgroundCell} from "./background/BackgroundCell";
import {ICell} from "../../interfaces/objects.inteface";
import {PlayCell} from "./playground/cell";


export const Field: React.FC<IField> = ({cells}) => {
    return (
        <Box sx = {{width: 'fit-content', height: 'fit-content', position: 'relative'}}>
            <Background >
                {
                    Array.from(Array(16)).map((_: any,i) =>
                        <BackgroundCell key={i}/>
                    )
                }
                {
                    cells.map((el: ICell) => <PlayCell {...el}/>)

                }

            </Background>

        </Box>
    )
}
