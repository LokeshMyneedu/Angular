import {Component , OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {EventService} from './shared/event.service';
import {IEvent} from './shared/event.model'


@Component({
    selector :'events-list',
    template:`
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class ="row">
    <div *ngFor ="let event of events" class = "col-md-5">    
    <event-thumbnail #thumbnail (eventClick) ="handleEventClicked($event)" [event] ="event"></event-thumbnail>
    </div>
    </div>
    </div>
    <button class ="btn btn-primary" (click) ="thumbnail.logFoo()">Log me some foo </button>
    `
})
export class EventListComponent implements OnInit {
events:IEvent[]
constructor(private eventService:EventService, private route:ActivatedRoute){  
}

ngOnInit(){   
     this.events = this.route.snapshot.data['events']  
}

 handleEventClicked(data: any){
     console.log(data)
 }
}