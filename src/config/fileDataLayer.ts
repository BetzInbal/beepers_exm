import fs from "fs/promises"


export const getFileData = async<T> (resorce:string) : Promise<T[] | void> =>{ 
    try {
        const strData:string = await fs.readFile(`${__dirname}/../../data/${resorce}.json`, "utf-8")
        const parsedData:T[] = await JSON.parse(strData)
        return parsedData

    } catch (error) {
                
    }
}


export const saveFileData = async<T> (resorce:string, data:T[]) : Promise<boolean> =>{ 

    try {
        const strData:string = JSON.stringify(data)
        await fs.writeFile(`${__dirname}/../../data/${resorce}.json`,strData, {encoding:"utf-8"})
        return true

    } catch (error) {
        return false 
    }
}