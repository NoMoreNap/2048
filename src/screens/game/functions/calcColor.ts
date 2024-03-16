import {COLOR} from "../configs/main.config";

export const calcColor = (value: number) => {
    const step = Math.min(16, Math.log2(value))
    const color = 33
    const saturation = Math.floor(100 / 16 * step)
    const brightless = 100 - Math.floor(50 / 16 * step)

    // @ts-ignore
    const hsl = ''
    return hsl
}
