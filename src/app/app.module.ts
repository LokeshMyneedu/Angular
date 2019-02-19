import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from "@angular/router";

import {
  EventListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventListResolver
} from './events/index'
import { AppComponent } from './app.component';
import {NavBarComponent} from './nav/navbar.component';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes'
import {Error404Component} from './errors/404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {provide:'canDeactivateCreateEvent',
     useValue : checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component : CreateEventComponent){
  if(component.isDirty)
  return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
