import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { PlanService } from '../services/plan.service';
import { UsertripService } from '../services/usertrip.service';
import { FileuploadComponent } from '../fileupload/fileupload.component';
import { DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  ImageList =[];

  tripId: any;
  imageID = [];
  imageName = [];
  imagePath = [];
  trip: any;
  img: string


  constructor(private doms: DomSanitizer,private fs: FileService, private ps: PlanService, private us: UsertripService) { 

      
  }

viewImages(){

  this.fs.getImages(this.tripId).subscribe(data => {
       
    console.log("data in image galery ", data.images)

    for(let image of data.images){
      const imageName = image.path;
      const imgsantiziedname = this.doms.bypassSecurityTrustUrl(imageName);
      if(this.ImageList.includes(imageName)){
        break;
      }else{
      this.ImageList.push(imageName);
      }
    }
  });
}


  ngOnInit() {

    this.tripId = sessionStorage.getItem("tripId");

        

       this.fs.setImageID(this.imageID);
       this.fs.setImageName(this.imageName);
       this.fs.setImagePath(this.imagePath); 
      
  
            
          }
       
          
    }
