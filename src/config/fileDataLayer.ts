import fs from "fs/promises"


export const getFileData = async () : Promise<BeeperModel[] | void> =>{ 
    try {
        const strData:string = await fs.readFile(`${__dirname}/../../data/beepers.json`, "utf-8")
        const parsedData:BeeperModel[] = await JSON.parse(strData)
        return parsedData

    } catch (error) {
                
    }
}


export const saveFileData = async (data:BeeperModel[]) : Promise<boolean> =>{ 

    try {
        const strData:string = JSON.stringify(data)
        await fs.writeFile(`${__dirname}/../../data/beepers.json`,strData, {encoding:"utf-8"})
        return true

    } catch (error) {
        return false 
    }
}