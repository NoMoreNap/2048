import bridge, {RequestIdProp, RequestProps, RequestPropsMap, UserInfo} from "@vkontakte/vk-bridge";
import {findClosestEnabledDate} from "@mui/x-date-pickers/internals/utils/date-utils";

export class VK {
    static async getUsersInfo(users: {vkid: number}[]) {
        const stringUsers: string = users.reduce((prev, current) => `${prev}${prev !== '' ? ',' : ''} ${current.vkid}`,'')
        return bridge.send('VKWebAppGetUserInfo', {
            //@ts-ignore
            user_ids: stringUsers
        })
            .then((data: {result: UserInfo[]} | UserInfo) => {
                if (Array.isArray((data as {result: UserInfo[]}).result)) {
                    return data
                }
                if ((data as UserInfo).id) {
                    return {result: [data]}
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
        if (data.result || data.response) {
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


    static async copyText(text: string) {
        return bridge.send('VKWebAppCopyText', {
            text
        })
            .then((data) => true)
            .catch((error) => false);
    }


    static async buy(idenf: string) {
        return bridge.send('VKWebAppShowOrderBox',
            {
                type: 'item', // Всегда должно быть 'item'
                item: idenf, // Идентификатор товара
            })
            .then( (data) => true)
            .catch( (e) => false);
    }
}
