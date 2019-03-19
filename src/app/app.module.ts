import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";
import { FormsModule,ReactiveFormsModule} from "@angular/forms";

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe,
  UpVoteComponent,
  VoterService,
  LocationValidator
} from './events/index'
import { AppComponent } from './app.component';
import {NavBarComponent} from './nav/navbar.component';
import {JQ_TOKEN,TOASTR_TOKEN,Toastr,collapsibleWellComponent,simpleModalComponent,ModalTriggerDirective} from './common/index'
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component';
import {AuthService} from './user/auth.service'

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    collapsibleWellComponent,
    simpleModalComponent,
    ModalTriggerDirective,
    LocationValidator,
    DurationPipe,
    UpVoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
    ],
  providers: [EventService,
    {provide:TOASTR_TOKEN , useValue:toastr},
    {provide:JQ_TOKEN , useValue:jQuery},
    EventRouteActivator,
    EventListResolver,
    {provide:'canDeactivateCreateEvent',
     useValue : checkDirtyState
    },
    AuthService,
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component : CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
