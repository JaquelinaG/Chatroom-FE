import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComp } from './components/chat.comp';
import { LoginComp } from './components/login/login.comp';
import { ChatroomGuard } from './guards/chatroom-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComp,
    LoginComp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComp},
      {path: '', component: ChatComp,  canActivate: [ChatroomGuard]},      
    ])
  ],
  providers: [ChatroomGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }