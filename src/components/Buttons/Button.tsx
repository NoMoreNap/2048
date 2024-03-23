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
        case 'revert-outlined':
            style = {
                border: '1px solid #000',
                background: 'transparent',
                color: '#000'
            }
            break
        case 'blue':
            style = {
                background: 'rgba(50, 46, 249, 1)'
            }
            break
        case 'gold':
            style = {
                background: 'linear-gradient(90deg, rgba(249,242,149,1) 0%, rgba(224,170,62,1) 33%, rgba(250,243,152,1) 66%, rgba(184,138,68,1) 100%)'
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
