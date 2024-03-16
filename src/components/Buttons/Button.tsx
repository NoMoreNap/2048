import {IBtnProps} from "../../interfaces/props.interface";
import {Button} from "@mui/material";
import React from "react";

export const Btn: React.FC<IBtnProps> = ({children, type = 'default', onClick}) => {
    let style = {}

    switch (type) {
        case 'default':
            style = {
                background: 'linear-gradient(180deg, #AB57FF 0%, #8000FF 100%)'
            }
            break;
        case 'starred':
            style = {
                background: 'url(/assets/backgrounds/btn_stars.png), rgba(50, 46, 249, .8)',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }
            break
        case 'outlined':
            style = {
                border: '1px solid #fff',
                background: 'transparent'
            }
            break
        default:
            break;

    }

    return (
        <Button
            onClick={onClick}
            style={{
                borderRadius: '15px',
                color: '#fff',
                height: 70,
                fontSize: '1.5rem',
                fontWeight: 400,
                ...style
        }}
            fullWidth
        >
            {children}
        </Button>
    )

}
