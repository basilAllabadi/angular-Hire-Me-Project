import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { JobsService } from '../jobs.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit{
jobid : any
jobDetails : any
jobDetailExact :any

  constructor(private route:ActivatedRoute , public jobService : JobsService){

  }

  ngOnInit(){

    this.jobid = this.route.snapshot.params["id"]
    this.jobDetails = this.jobService.jobs3
    console.log(this.jobDetails)
    for (var job1 of this.jobDetails) {
      if(job1.id === +this.jobid){
this.jobDetailExact = job1
console.log(this.jobDetailExact)
      }
    }

  }
}
