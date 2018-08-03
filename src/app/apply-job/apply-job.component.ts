import { Component, OnInit } from '@angular/core';
import {JobService} from '../job.service'
import { Router } from "@angular/router";

@Component({
  selector: 'app-apply-job',
  templateUrl: './apply-job.component.html',
  styleUrls: ['./apply-job.component.css']
})
export class ApplyJobComponent implements OnInit {
  

  constructor(private jobService:JobService, private router: Router) { }
  selectedFiles: FileList;
   currentFileUpload: File;
   emailSent = false;
   applyResults:string;
   error = false;
   resumeExists = true;
   selectedResume = 'default';
   allResumes;
   allResumesfetched = false;
   // closeResult: string;
  //content : string;


  ngOnInit() {
   // this.emailSent = true;
   // this.applyResults = 'You have successfully applied for this job'
   this.getCV();
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
    this.jobService.applyForJob(this.selectedResume).subscribe((data)=>{

      if(data)
      {
        this.applyResults = 'You have successfully applied for this Job'
        this.emailSent = true;
        this.error = false;
      }
      else
      {
        this.applyResults = 'Request Submission Failed'
        this.emailSent = false;
        this.error = true;
      }

    })    
  }

  getCV()
  {
    this.jobService.getCV().subscribe((data)=>{
      if(data)
      {
        this.allResumes = data;
        this.allResumesfetched = true;
        console.log(this.allResumes);
      }
      else{
        console.log('cant get CV data');
      }
    })

  }
  closeAlert()
  {
    this.emailSent = false;
  }
  setSelectedFile(file)
  {
    this.selectedResume = file;
  }

  goBack()
  {
    this.router.navigateByUrl('/dashboard');
  }
  
  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  
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