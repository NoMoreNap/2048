import {Box, Typography} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import {URLSearch} from "../../../../api/config";
import {VK} from "../../../../utils/VKbridge";
import {useEnqueueSnackbar} from "../../../../hooks/useSnackbar/useSnackbar";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const Referals: React.FC<{handleClose: () => void}> = ({handleClose}) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const vkid = URLSearch.get('vk_user_id')
    const ref= `https://vk.com/app51871802#${Number(vkid).toString(30)}`
    const {openSnackbar} = useEnqueueSnackbar()




    const copy = async () => {
        try {
            const isCopy = await VK.copyText(ref)
            if (isCopy) {
                openSnackbar({message: 'Успешно скопировано!', variant: 'success'})
            } else {
                openSnackbar({message: 'Ошибка копирования!', variant: 'error'})
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10}}>
            <Box sx={{width: '100%', textAlign: 'center', position: 'relative'}}>
                <Typography sx={{color: 'primary.main', fontSize: '1.5rem'}}>Реферальная ссылка</Typography>
                <CloseIcon onClick={() => handleClose()} sx={{cursor: 'pointer', color: 'primary.main', position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)'}}/>
            </Box>
            <Box sx={{width: '100%',display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5}}>
                <Typography>Ваша реферальная ссылка</Typography>
                <Box onClick={copy} sx={{width: '100%' ,display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', cursor: 'pointer'}}>
                    <Typography sx={{color: 'primary.main'}}>{ref}</Typography>
                    <ContentCopyIcon sx={{color: 'primary.main'}}/>
                </Box>
                <Typography>
                    За каждого приглашенного человека вы получаете по 5 звездочек!
                </Typography>
            </Box>

        </Box>
    )
}
