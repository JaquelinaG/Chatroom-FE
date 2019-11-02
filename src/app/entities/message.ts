export class Message {
    constructor(json: any){
        if(!json){
            json = {};
        }

        this.message = json.message || "";
        this.timestamp = json.timestamp || null;
    }

    message: string;
    timestamp: Date;
}