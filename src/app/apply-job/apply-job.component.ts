import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  constructor(private jobService:JobService) { }
  useCurrent: boolean;
  ngOnInit() {
    this.useCurrent = false;
  }

  useExsistingResume()
  {
    this.useCurrent = true;
  }
/*
  fileEvent($event) {
    const fileSelected: File = $event.target.files[0];
    //console.log(fileSelected);
    this.jobService.uploadFile(fileSelected)
    .subscribe( (response) => {
       console.log('set any success actions...');
       return response;
     },
      (error) => {
        console.log('set any error actions...');
      });
 }
*/
}
