import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {

constructor(private http : HttpClient , private jobService : JobsService){}

jobs : any[] = []
ngOnInit(){

  this.http.get("http://localhost:5000/jobs",{  responseType: 'json'})
  .subscribe((response:any) => {
  console.log(response)
  console.log(response)
this.jobs = response.result
console.log(this.jobs)
this.jobService.jobs3=this.jobs

  })
 
}


}
