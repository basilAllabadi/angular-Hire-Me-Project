import { HttpClient } from '@angular/common/http';
import { Component ,EventEmitter} from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { UserService } from '../user.service';



@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
 signinForm!: FormGroup; 
constructor(private http : HttpClient , private userService:UserService){}
ngOnInit(){
  this.signinForm = new FormGroup({
    email:new FormControl (null),
    password: new FormControl (null)
  })
}
onSubmitLogin(){
  console.log(this.signinForm)
  this.http.post('http://localhost:5000/login/users',{email:this.signinForm.value.email , password:this.signinForm.value.password},{responseType:'json'}).subscribe((responseData:any)=>{
    console.log(responseData)
    this.userService.currentUser=responseData.payload
    console.log(this.userService.currentUser)
    this.userService.isLoggedIn.emit(true);
})



}

}
