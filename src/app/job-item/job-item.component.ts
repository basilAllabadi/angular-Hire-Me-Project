import { Component, Input } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})

export class JobItemComponent {
@Input() jobs :any


constructor(private router : Router){}

itemDetail(jobid:any){
this.router.navigate(['jobs/detail',jobid])

}
}
