import { getFileData, saveFileData } from "../config/fileDataLayer"
import { BeeperModel  } from "../models/BeeperModel";


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



    public static apdateStatusById = async (statusDto:StatusDto, id:number) =>  {
        console.log("insaiid shoo");
        
            const beepers = await getFileData()
            if (!beepers){throw new Error("Unable to access DATA")}
            const specifBeeper = beepers.find(b => b.id === id)
            if (!specifBeeper){throw new Error("The biperDas not found")}
            if (!BeeperService.isStatusvalid(statusDto.status, specifBeeper))
                {throw new Error("The status apdate isn valid")}
            statusDto.status === "deployed" && BeeperService.setdeployed(statusDto,specifBeeper)
            specifBeeper.status = statusDto.status
            await saveFileData(beepers)        
  
    }

    public static deleteBeeperById = async (id:number) =>{
        const beepers = await getFileData()
        if (!beepers){throw new Error("Unable to access DATA")}
            // למצוא דרך טובה ויפה יותר
        await saveFileData(beepers.filter(b => b.id != id))
    }


    public static isStatusvalid = (status:string, beepr:BeeperModel) =>{
        const listvalidStatus = ["assembled", "shipped", "deployed"]
        return (listvalidStatus.includes(status) && beepr.status != "deployed" && beepr.status != "detonated")
    }
    public static setdeployed = (statusDto:StatusDto, beepr:BeeperModel) =>{

        if(!BeeperService.isLocationValid(statusDto))
            {throw new Error("Not valid location")
        }
        console.log("insaiid insaiid shoo");
        beepr.latitude = statusDto.latitude
        beepr.longitude = statusDto.longitude
        console.log(beepr);
        
        BeeperService.bombBeepr(beepr.id)
    }
    public static bombBeepr = async (id:number) =>{
        await setTimeout(() => {
            console.log("BOOOOOOOOMMM");          
        }, 10000);
        const beepers = await getFileData()
        if (!beepers){throw new Error("Unable to access DATA")}
        const specifBeeper = beepers.find(b => b.id === id)
        if (!specifBeeper){throw new Error("The biperDas not found")}
        specifBeeper.status = "detonated"
        await saveFileData(beepers)
    }
    public static isLocationValid = (statusDto:StatusDto) =>{
        console.log("insaiid insaiid shoo");
        const lat = [35.78674, 34.59708, 3]
        const long = [35.78674, 34.59708, 3]
        return (lat.includes(statusDto.latitude!) && (long.includes(statusDto.longitude!)))
    }





}
