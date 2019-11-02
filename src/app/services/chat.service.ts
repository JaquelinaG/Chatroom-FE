import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Message } from '../entities/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  get messages(): Array<Message> {

    return new Array<Message>();
  }

  sendMessage(mesagge: Message): void {

    //return this.http.get('/url');
    return;
  }

}