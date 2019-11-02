import { Component, OnInit } from "@angular/core";
import { Message } from "../entities/message";
import { FormBuilder } from '@angular/forms';
import { ChatService } from "../services/chat.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.comp.html',
    styleUrls: ['./chat.comp.css']
})
export class ChatComp implements OnInit {
    //     private hubConnection : HubConnection;
    //   nick = '';
    message='';
    //   messages: ChatMessage[] = [];
    //   title = 'ChatroomWeb';
    chatForm;

    //   constructor(private messageService: MessagesService){ }
    constructor( private service: ChatService,
        private formBuilder: FormBuilder,
    ) { 

        this.chatForm = this.formBuilder.group({
            name: "",
            text: "",
            timestamp: ""
        });
    }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //     this.nick = localStorage.getItem("user");

        // this.messageService.getLastMessages().subscribe
        // (
        //   (result:ChatMessage[]) => this.messages = result
        // );

        // this.hubConnection = new HubConnectionBuilder().withUrl(`${environment.apiUrl}/chat`, {
        //   skipNegotiation: true,
        //   transport: HttpTransportType.WebSockets      
        // }).build();

        // this.hubConnection
        //   .start()
        //   .then(() => console.log('Connection started!'))
        //   .catch(err => console.log('Error while establishing connection :('));

        // this.hubConnection.on('sendToAll', (nick: string, receivedMessage: string, timestamp: number) => {
        //   let chatMessage = new ChatMessage();
        //   chatMessage.nick = nick;
        //   chatMessage.message = receivedMessage;
        //   chatMessage.timestamp = timestamp;
        //   this.messages.push(chatMessage);      
        // });
    }



    //   public getMessages(): ChatMessage[]
    //   {
    //     this.messages = this.messages
    //       .sort((m1, m2) => { if (m1.timestamp >= m2.timestamp) return 1; else return -1;})
    //       .slice(Math.max(this.messages.length - environment.maxMessages, 0));

    //     return this.messages;
    //   }

    get messages(): Array<Message> {
        let m = new Array<Message>();

        m.push(new Message({ text: "hola", timestamp: new Date(), name: "Jaqui" }))
        m.push(new Message({ text: "hola", timestamp: new Date(), name: "Norma" }))

        return m;
    }

    onSendMessage(): void {
        // this.messageService.sendMessage(this.nick, this.message).subscribe(
        //   () => { this.message = ''; }
        //   , (err: any) => { console.error(err) }
        //   );
        let m : Message;
        this.service.sendMessage(m);
    }

    onSubmit(customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);
    
        // this.items = this.cartService.clearCart();
        // this.checkoutForm.reset();
      }
}
