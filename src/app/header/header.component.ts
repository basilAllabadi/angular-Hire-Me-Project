import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isLoggedIn :boolean =false
constructor(private userService:UserService){

}
ngOnInit(){
  this.userService.isLoggedIn.subscribe((data:any)=>{
    this.isLoggedIn = data
  })}
logout(){
  this.userService.isLoggedIn.emit(false);
  this.userService.currentUser=""
}
}
