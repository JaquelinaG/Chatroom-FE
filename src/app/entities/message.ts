export class Message {
    constructor(json?: any){
        if(!json){
            json = {};
        }

        this.text = json.text || "";
        this.timestamp = json.timestamp || null;
        this.name = json.name || "";
    }

    text: string;
    timestamp: Date;
    name: string;
}