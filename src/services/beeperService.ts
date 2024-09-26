import { getFileData, saveFileData } from "../config/fileDataLayer"
import newBeeperDto from "../DTO/NewBeeperDto";
import { BeeperModel  } from "../models/BeeperModel";
import Utils from "../utils/utils";


export default class BeeperService{

    public static createBeeper = async (nameDto : newBeeperDto) =>  {
        try {
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            const newBeeper:BeeperModel = new BeeperModel(nameDto.name)
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



    public static apdateStatusById = async (statusDto:StatusDto, id:number) =>  {
        
        const beepers = await getFileData()
        if (!beepers){throw new Error("Unable to access DATA")}
        const specifBeeper = beepers.find(b => b.id === id)            
        if (!specifBeeper){throw new Error("The biperDas not found")}
        if (!Utils.isStatusvalid(statusDto.status, specifBeeper))
            {throw new Error("The status apdate isn valid")}
        statusDto.status === "deployed" && Utils.setdeployed(statusDto,specifBeeper)
        specifBeeper.status = statusDto.status
        await saveFileData(beepers)
        return specifBeeper        
    }

    public static deleteBeeperById = async (id:number) =>{
        const beepers = await getFileData()
        if (!beepers){throw new Error("Unable to access DATA")}
        await saveFileData(beepers.filter(b => b.id != id))
    }








}
