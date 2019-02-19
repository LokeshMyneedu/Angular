import {Component , OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {IEvent} from './shared/event.model'


@Component({
    selector :'events-list',
    template:`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class ="row">
    <div *ngFor ="let event of events" class = "col-md-5">    
    <event-thumbnail (click) ="handleThumbnailClick(event.name)" #thumbnail (eventClick) ="handleEventClicked($event)" [event] ="event"></event-thumbnail>
    </div>
    </div>
    </div>
    <h3>{{thumbnail.someProperty}} </h3>
    <button class ="btn btn-primary" (click) ="thumbnail.logFoo()">Log me some foo </button>
    `
})
export class EventListComponent implements OnInit {
events:IEvent[]
constructor(private eventService:EventService, private toastr:ToastrService, private route:ActivatedRoute){  
}

ngOnInit(){   
     this.events = this.route.snapshot.data['events']  
}

handleThumbnailClick(eventName){
  this.toastr.success(eventName);
}

 handleEventClicked(data: any){
     console.log(data)
 }
}