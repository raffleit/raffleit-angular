import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ParticipantsComponent } from './participants/participants.component';
import { AppRoutingModule } from './/app-routing.module';
import { DrawingComponent } from './drawing/drawing.component';
import {LocalStorageModule} from 'angular-2-local-storage';
import {ParticipantService} from './participant.service';
import { WinnerService } from './winner.service';


@NgModule({
  declarations: [
    AppComponent,
    ParticipantsComponent,
    DrawingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
      prefix: 'raffle-angular',
      storageType: 'localStorage'
    })
  ],
  providers: [ParticipantService, WinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
