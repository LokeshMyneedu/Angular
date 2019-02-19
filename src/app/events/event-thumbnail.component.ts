import {Component , Input,Output, EventEmitter} from '@angular/core'
import {IEvent} from './shared/event.model'

@Component ({
    selector :'event-thumbnail',
    templateUrl : './events-list.component.html',
    styles:[`
    .green {color: #003300 !important;}
    .bond {font-weight :bold;}
    .pad-left {margin-left :10px}
    .well div {color : #bbb;}
    .thumbnail {min-height:210px;}
    `]
})

export class EventThumbnailComponent {
 @Input() event:IEvent
 @Output() eventClick = new EventEmitter()

 handleClickMe(){
     this.eventClick.emit(this.event.name);
 }
 someProperty:any ="some value";
 logFoo(){
     console.log('foo');
 }

 getStartTimeClass():any{
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
   //  return {green: isEarlyStart , bold:isEarlyStart}
   if(this.event && this.event.time === '8:00 am')
   return ['green','bold']
   return []
 }

 //like wise we can apply ng style too
}