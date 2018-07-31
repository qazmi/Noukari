import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {

  constructor(private jobService:JobService) { }
  selectedFiles: FileList;
   currentFileUpload: File;
   emailSent = false;
  ngOnInit() {
   
  }

  useExsistingResume()
  {
    
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
   // console.log(this.currentFileUpload);
    this.jobService.uploadFile(this.currentFileUpload).subscribe((data)=>{

    })
  }

  applyForJob()
  {
    this.jobService.applyForJob().subscribe((data)=>{

      if(data)
      {
        this.emailSent = true;
      }
      else
      {
        
        this.emailSent = false;
      }

    })
    
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
import {Directive, HostListener, HostBinding} from '@angular/core';

  @Directive({
    selector: '[appDropdown]'
  })
  export class DropdownDirective {

    private isOpen:boolean = false;

    @HostBinding('class.open') get opened(){
      return this.isOpen;
    }
    constructor() { }

    @HostListener('click')open(){
      this.isOpen = true;
    }

    @HostListener('mouseleave')close(){
      this.isOpen = false;
    }
  }