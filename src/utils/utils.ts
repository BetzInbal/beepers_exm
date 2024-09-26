import { getFileData, saveFileData } from "../config/fileDataLayer"
import { BeeperModel  } from "../models/BeeperModel";


export default class Utils{


public static isStatusvalid = (status:string, beepr:BeeperModel) =>{
    const listvalidStatus = ["assembled", "shipped", "deployed"]
    return (listvalidStatus.includes(status) && beepr.status != "deployed" && beepr.status != "detonated")
}
public static setdeployed = (statusDto:StatusDto, beepr:BeeperModel) =>{

    if(!Utils.isLocationValid(statusDto))
        {throw new Error("Not valid location")
    }
    beepr.latitude = statusDto.latitude
    beepr.longitude = statusDto.longitude
    console.log(beepr);
    
    Utils.bombBeepr(beepr.id)
}
public static bombBeepr = async (id:number) =>{
    console.log("BOOOOOOOOMMM started");
    await setTimeout(async() => {
        console.log("BOOOOOOOOMMM");          
        const beepers = await getFileData()       
        if (!beepers){throw new Error("Unable to access DATAdddddddd")}
        const specifBeeper = beepers.find(b => b.id === id)
        if (!specifBeeper){throw new Error("The biperDas not found")}
        specifBeeper.status = "detonated"
        specifBeeper.detonated_at = new Date()
        await saveFileData(beepers)
    }, 10000);
}
public static isLocationValid = (statusDto:StatusDto) =>{
    return (statusDto.latitude! >= 33.01048 && statusDto.latitude! <= 34.6793 
    &&statusDto.longitude! >= 35.04438 && statusDto.longitude! <= 36.59793
)
}

}