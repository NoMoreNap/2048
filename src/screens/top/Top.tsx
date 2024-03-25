import {Box} from "@mui/material";
import React from "react";
import {api} from "../../api/api";
import {VK} from "../../utils/VKbridge";
import {UserInfo} from "@vkontakte/vk-bridge";
import {ITopUser} from "../../interfaces/props.interface";
import {CircularBox} from "../game/components/entity/CircularBox";
import {TopTable} from "./TopTable";

export const Top = () => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [data, setData] = React.useState<ITopUser[]>([])

    const getTop = async () => {
        try {
            const {data} = await api.get<{data: {vkid: number, score: number}[]}>('/users/top')
            const vkUsersData= await VK.getUsersInfo(data.data)
            console.log(data)
            if (vkUsersData === undefined) {
                return 0
            }
            const usersData = data.data.map((el, i) => ({
                score: el.score,
                vkid: el.vkid,
                photo: (vkUsersData as {result: UserInfo[]}).result[i].photo_200,
                name: `${(vkUsersData as {result: UserInfo[]}).result[i].first_name} ${(vkUsersData as {result: UserInfo[]}).result[i].last_name}`
            }))
            setData(usersData)
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }

    }

    React.useEffect(() => {
        getTop()
        VK.interstitialAds()
    },[])
    return (
        <Box height='100%'>
            {
                isLoading ? <CircularBox/>:
                    <TopTable users={data}/>
            }

        </Box>
    )
}
