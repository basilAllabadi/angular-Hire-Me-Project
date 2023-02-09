import { Injectable ,EventEmitter } from '@angular/core';

@Injectable({ providedIn: 'root' })


export class UserService{
currentUser : any ={}
isLoggedIn = new EventEmitter<boolean>();

}