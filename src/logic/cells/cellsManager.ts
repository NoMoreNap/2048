import md5 from 'md5'
export const createCell = (x: number, y: number, value: number, id: string = '') => ({
    x,y,value,
    id: id !== '' ? id : md5(String(Math.random()*100000>>0))
})
