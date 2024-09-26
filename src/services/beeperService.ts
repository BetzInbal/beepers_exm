import { getFileData, saveFileData } from "../config/fileDataLayer"
import { BeeperModel, beeperStatus } from "../models/BeeperModel";


export default class BeeperService{

    public static createBeeper = async (name : string) =>  {
        try {
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            const newBeeper:BeeperModel = new BeeperModel(name)
            beepers.push(newBeeper)
            await saveFileData(beepers)
            return newBeeper;
    
        } catch (error) {
            return error
        }
    }


    public static getAllBeeper = async () =>  {
        try {
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            return beepers

        } catch (error) {
            return error
        }
    }

    public static getBeeperbyId = async (id:number) =>  {
        try {
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            const specifBeeper = beepers.find(b => b.id === id)
            return specifBeeper

        } catch (error) {
            return error
        }
    }


    public static getBeeperbyStatus = async (status:string) =>  {
        try {
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            const specifesBeeper = beepers.filter(b => b.status === status)
            return specifesBeeper

        } catch (error) {
            return error
        }
    }



    public static apdateStatusById = async (id:number) =>  {
        try {
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            const specifBeeper = beepers.find(b => b.id === id)
            if (!specifBeeper){throw new Error("The biperDas not found")}
            specifBeeper.status = beeperStatus[beeperStatus.(specifBeeper.status)++]

        } catch (error) {
            return error
        }
    }



}
