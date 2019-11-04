import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Message } from '../entities/message';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private url = `${environment.apiUrl}/api/messages`;
  
  constructor(private http: HttpClient) {}

  getChatMessages(): Observable<Array<Message>> {

    return this.http.get<Message[]>(`${this.url}`, {
      headers: new HttpHeaders({
        //"Authorization": 
        "Content-Type": "application/json"
      })});
  }

  sendMessage(mesagge: Message): Observable<any> {
    
    return this.http.post(`${this.url}`, mesagge, {
      headers: new HttpHeaders({
        //"Authorization":
        "Content-Type": "application/json"
      })
    });
  }
}