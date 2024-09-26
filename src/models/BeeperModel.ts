class BeeperModel{
    public id:number
    public status:string
    public created_at:Date
    public detonated_at?:Date
    latitude?:number
    longitude?:string
    
    constructor(
        name:string,
    ){
        this.id = +Math.random().toString().split(".")[1]
        this.status = beeperStatus[0]
        this.created_at = new Date()
    }
    
}
enum beeperStatus  {
    manufactured,
    assembled,
    shipped,
    deployed,
    detonated,
}