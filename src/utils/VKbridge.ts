import {IUserData} from "../interfaces/objects.inteface";
import bridge, {UserInfo} from "@vkontakte/vk-bridge";

export class VK {
    static async getUsersInfo(users: {vkid: number}[]) {
        const stringUsers: string = users.reduce((prev, current) => `${prev}${prev !== '' ? ',' : ''} ${current.vkid}`,'')
        return bridge.send('VKWebAppGetUserInfo', {
            //@ts-ignore
            user_ids: stringUsers
        })
            .then((data: {result: UserInfo[]} | UserInfo) => {
                if ((data as {result: UserInfo[]}).result.length || (data as UserInfo).id) {
                    return data
                }
            })
            .catch((error) => {
                console.log(error);
            });

    }
}
