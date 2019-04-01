import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { FileService } from '../services/file.service';
import { saveAs } from 'file-saver';
import { ImageGalleryComponent } from './../image-gallery/image-gallery.component';
import { PlanService } from '../services/plan.service';
import { Http, Headers, RequestOptions } from '@angular/http';
import { UsertripService } from '../services/usertrip.service';

const uri = 'https://go-ami-go.herokuapp.com/files/imgtodb';


@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  uploader: FileUploader = new FileUploader({ url: uri });
  attachmentList: any = [];
  currentTripId: any;
  imageGalleryComponent: ImageGalleryComponent;


  constructor(private usertripservice: UsertripService, private fileService: FileService, private planservice: PlanService, private http: Http) {
 
    this.currentTripId = sessionStorage.getItem("tripId");
    console.log("trip id in fileupload", this.currentTripId)

    this.uploader.onBuildItemForm = (fileItem: any, form: any) => {
      form.append('tripId' , this.currentTripId);
     };
    this.uploader.uploadAll();
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any): any => {
   if(response){
       console.log("response",JSON.parse(response));
    }
  }

  this.fileService.sendTripIdToImageServer(this.currentTripId)

}

  //   download(index){
  //     var filename = this.attachmentList[index].uploadname;

  //     this.fileService.downloadFile(filename)
  //     .subscribe(
  //         data => saveAs(data, filename),
  //         error => console.error(error)
  //     );
  // }
  ngOnInit() {
    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      fileItem.formData.push( { tripId: this.currentTripId } );
      
     };
  }

}
