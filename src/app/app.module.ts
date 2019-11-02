import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatComp } from './components/chat.comp';

@NgModule({
  declarations: [
    AppComponent,
    ChatComp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: ChatComp},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }