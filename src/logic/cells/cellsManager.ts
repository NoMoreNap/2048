import md5 from 'md5'
export const createCell = (x: number, y: number, value: number) => ({
    x,y,value,
    id: md5(String(Math.random()*100000>>0))
})
