import { Injectable } from '@angular/core';
import { HubConnectionBuilder, HttpTransportType  } from '@aspnet/signalr';

import { Message } from '../entities/message';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ChatHubService {

    constructor(){}

    setupConection(messages: Array<Message>): void {
        
        let connection = new HubConnectionBuilder().withUrl(`${environment.apiUrl}/chathub`, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets
        }).build();        

        connection.on('shareMessage', (message: Message) => {
            messages.push(message);
        });

        connection
        .start()
        .then(() => console.log('Connection started!'))
        .catch(err => console.error(err.toString()));    
    }    
}