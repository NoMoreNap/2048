import React from 'react';
import {IconButton} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import {useSnackbar} from "notistack";


export const useEnqueueSnackbar = () => {
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();
    const openSnackbar = ({message, variant = 'default', options = {}}: {options?: any,message: string, variant?: "default" | "error" | "success" | "warning" | "info" | undefined}) => {
        enqueueSnackbar(message, {...options, variant});
    };

    return {openSnackbar, closeSnackbar};
};

export const SnackbarCloseButton = ({snackbarKey}: any) => {
    const {closeSnackbar} = useEnqueueSnackbar();

    return (
        <IconButton onClick={() => closeSnackbar(snackbarKey)}>
            <CloseIcon/>
        </IconButton>
    );
};
