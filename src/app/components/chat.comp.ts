import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';

import { Message } from "../entities/message";
import { ChatService } from "../services/chat.service";
import { ChatHubService } from "../services/chatHub.service";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.comp.html',
    styleUrls: ['./chat.comp.css']
})
export class ChatComp implements OnInit {

    private messages: Array<Message> = new Array<Message>();
    private maxMessages: number = 50;
    chatForm: FormGroup;

    constructor(private service: ChatService,
                private hubService: ChatHubService,
                private formBuilder: FormBuilder) {
        
        this.chatForm = this.formBuilder.group({
            name: "",
            text: "",
            timestamp: ""
        });
    }

    ngOnInit(): void {
        
        this.service.getChatMessages().subscribe((res: Array<Message>) => {
            this.messages = res;

            this.hubService.setupConection(this.messages);
        });        
    }

    get recentMessages(): Array<Message> {
       
        this.messages.sort((m1, m2) => {
            if (m1.timestamp >= m2.timestamp) {
                return 1;
            } else {
                return -1;
            }
        });

        return this.messages.slice(Math.max(this.messages.length - this.maxMessages, 0));
    }

    onSendMessage(value: Message): void {
        value.name = localStorage.getItem("name");
        value.timestamp = new Date();
        
        this.service.sendMessage(value).subscribe(() => {     
            this.chatForm.controls["text"].setValue("");      
        }, (err: any) => {
            console.error(err.toString());
        });
    }
}
