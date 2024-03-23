import {IUserData} from "../interfaces/objects.inteface";
import bridge, {RequestIdProp, RequestProps, RequestPropsMap, UserInfo} from "@vkontakte/vk-bridge";

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


    static async getHash(payload: string) {
        return bridge.send('VKWebAppCreateHash', {
            payload: payload
        }).then((data) => data).catch((error) => {console.log(error);});
    }

    static async completeTask<PayloadType>(payload: (RequestProps<keyof RequestPropsMap> & RequestIdProp) | undefined, action: keyof RequestPropsMap, separatop: string) {
        const sign = await this.getHash(separatop)
        const data = await bridge.send(action,payload).then( r => r).catch(e => e)
        if (data.result) {
            return {
                complete: true,
                data: sign
            }
        }
        if (data.error_code !== undefined) {
            return {
                complete: false,
                data: data.error_reason
            }
        } else {
            return {
                complete: false,
                data: 'Неизвестная ошибка'
            }
        }
    }
}
