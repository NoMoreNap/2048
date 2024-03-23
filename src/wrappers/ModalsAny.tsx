import {Box, Collapse, Modal, Typography} from "@mui/material";
import React from "react";
import {IModal} from "../interfaces/props.interface";
import {Start} from "../components/Modals/Stars/Start";
import {setter, useGlobalValue} from "elum-state/react";
import {MODAL_ANY, MODAL_STARS} from "../states/elum";
import {Tasks} from "../components/Modals/Stars/Tasks/Tasks";
import {Votes} from "../components/Modals/Stars/Votes/Votes";
import {Referals} from "../components/Modals/Stars/Referals/Referals";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 40px)',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    p: 4,
    boxShadow: 24,
    overflow: 'visible'
};

export const ModalsAny = () => {
    const modal = useGlobalValue(MODAL_ANY)

    const handleClose = () => {
        setter(MODAL_ANY, '')
    };

    return (
        <Modal
            open={modal !== ''}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
            <Box sx={style}>

                <Collapse in={modal === 'referals'}>
                    <Referals handleClose={handleClose}/>
                </Collapse>



            </Box>
        </Modal>
    )
}
