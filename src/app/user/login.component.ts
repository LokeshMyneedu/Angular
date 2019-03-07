import {Component} from '@angular/core'
import {AuthService} from './auth.service'
import {Router} from '@angular/router'
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
   templateUrl :'./login.component.html',
   styles : [
       `em{float:right ; color:#E05C65; padding-left:10px;}
       `
   ]
})
export class LoginComponent {
    mouseoverLogin: boolean
    constructor(private authService:AuthService, private router:Router){

    }   
    login(formValues){
        this.authService.loginUser(formValues.userName,formValues.password)
        this.router.navigate(['events'])
    }

    cancel(){
        this.router.navigate(['events'])
    }
}