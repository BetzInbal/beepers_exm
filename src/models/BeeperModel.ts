export class BeeperModel {
    public id: number
    public status: string //"detonated" | "assembled" | "shipped"| "deployed" | "manufactured"
    public created_at: Date
    public detonated_at?: Date
    public latitude?: number
    public longitude?: number
    constructor(
        public name: string,
    ) {
        this.id = +Math.random().toString().split(".")[1]
        this.status = "manufactured"// beeperStatus[0]
        this.created_at = new Date()
    }

}
