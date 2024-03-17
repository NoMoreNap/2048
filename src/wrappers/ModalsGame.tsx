import {Box, Modal, Typography} from "@mui/material";
import {setter, useGlobalValue} from "elum-state/react";
import {MODAL, RESULT} from "../states/elum";
import React from "react";
import {IModal} from "../interfaces/props.interface";
import {ModalProvider} from "./ModalProvider";
import {LoseModal} from "../components/Modals/Game/Lose";
import {MaxScore} from "../components/Modals/Game/MaxScore";
import {MaxCell} from "../components/Modals/Game/MaxCell";
import {CELL_SIZE, COLOR} from "../screens/game/configs/main.config";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'calc(100% - 40px)',
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
    overflow: 'visible'
};

export const ModalWrapper: React.FC<IModal> = ({type}) => {
    const [open, setOpen] = React.useState(true);
    const result = useGlobalValue(RESULT)
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        setter(RESULT, {maxCell: 0, score: 0})
        setter(MODAL, '')
    };
    const valueStyle = {
        color: '#fff',
        fontWeight: 700,
        position: 'relative',
        zIndex: 1,
        fontSize: (() =>
                result.maxCell < 100 ? 50
                    : result.maxCell < 1000 ? 40
                        : result.maxCell < 10000 ? 30
                            : 20
        )()
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{backdropFilter: 'blur(5px)'}}
        >
            <Box sx={style}>
                <Box sx={{
                    width: CELL_SIZE,
                    height: CELL_SIZE,
                    //@ts-ignore
                    backgroundColor: COLOR[result.maxCell],
                    borderRadius: '5px',
                    position: 'absolute',
                    left: '50%',
                    top: -4,
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Typography sx={valueStyle}>
                        {result.maxCell}
                    </Typography>
                </Box>


                <ModalProvider visible={type === 'lose'}>
                    <LoseModal handleClose={handleClose}/>
                </ModalProvider>

                <ModalProvider visible={type === 'max_score'}>
                    <MaxScore handleClose={handleClose}/>
                </ModalProvider>

                <ModalProvider visible={type === 'max_cell'}>
                    <MaxCell handleClose={handleClose}/>
                </ModalProvider>


            </Box>
        </Modal>
    )
}
