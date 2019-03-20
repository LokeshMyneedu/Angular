import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {EventService} from './shared/event.service';
import {map} from 'rxjs/operators'

@Injectable()
export class EventListResolver implements Resolve<any>{
 constructor(private eventService:EventService){

 }

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
        return this.eventService.getEvents()
    }

}