import axios from 'axios'
import bridge from "@vkontakte/vk-bridge";
import {searchParams} from "./config";

let URL = ''

switch (process.env["REACT_APP_MODE"]) {
    case 'dev':
        URL = `http://127.0.0.1:3004`//'http://127.0.0.1:3003'
        break
    case 'prod':
        URL = `https://sl-2048.ru/api`
        break
}
export const api = axios.create({
    baseURL: URL,
});

api.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${searchParams.replace('?', '')}`;
    config.headers.from = window.location.hash.replace('#', '')
    return config
})
