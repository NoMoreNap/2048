import {Box, Collapse, Modal, Typography} from "@mui/material";
import React from "react";
import {IModal} from "../interfaces/props.interface";
import {Start} from "../components/Modals/Stars/Start";
import {setter} from "elum-state/react";
import {MODAL_STARS} from "../states/elum";
import {Tasks} from "../components/Modals/Stars/Tasks/Tasks";
import {Votes} from "../components/Modals/Stars/Votes/Votes";
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

export const ModalStars = () => {
    const [open, setOpen] = React.useState(true);
    const [page, setPage] = React.useState('start')
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setter(MODAL_STARS, false)
        setOpen(false)
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
            <Box sx={style}>

                <Collapse in={page === 'start'}>
                    <Start setPage={setPage} handleClose={handleClose}/>
                </Collapse>

                <Collapse in={page === 'tasks'}>
                    <Tasks setPage={setPage} handleClose={handleClose}/>
                </Collapse>

                <Collapse in={page === 'votes'}>
                    <Votes setPage={setPage} handleClose={handleClose}/>
                </Collapse>

            </Box>
        </Modal>
    )
}
