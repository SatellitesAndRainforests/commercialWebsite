import { Component, OnInit } from '@angular/core';
import { CaptureService } from '../../services/capture.service'
import { Capture } from '../../Capture';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {

  captures:Capture[] = [];

  // displayedColumns: string[] = ['id', 'time', 'species', 'idStatus','notes','temp','humidity','moonPhase','lon','lat','images'];
   
  displayedColumns: string[] = ['id', 'species', 'idStatus','images'];
  






  constructor( private captureService: CaptureService ) { }

  ngOnInit(): void {
    this.getCaptures();
  }




  getCaptures(): void {
    this.captureService.getCaptures().subscribe(
      (response: Capture[]) => { 
        this.captures = response;
        console.log( this.captures  );
      },
      (error: HttpErrorResponse) => { alert(error.message + "\n \nIs the server running ?"); }  ); 
  }



  openModal(capture: Capture) {

    console.log("click");

  }








}
