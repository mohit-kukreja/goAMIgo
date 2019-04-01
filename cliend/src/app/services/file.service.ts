
import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import {Observable} from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';




@Injectable()

export class FileService {
    imageID = [];
    imageName = [];
    imagePath = [];
    currentTripID:any;
    constructor(private http:Http){}

    // downloadFile(file:String){
    //     var body = {filename:file};

    //     console.log("filename", file)

    //     return this.http.post('https://go-ami-go.herokuapp.com/file/download',body,{
    //         responseType : 'blob',
    //         headers:new HttpHeaders().append('Content-Type','application/json')
    //     });
    // }

    setFileTripID(tripID){
        this.currentTripID=tripID;
    }

    getFileTripID(){
        return this.currentTripID;
    }

    setImageID(imgID){
        this.imageID = imgID;
    }

    getImageID(){
        return this.imageID;
    }

    setImageName(imgName){
        this.imageName=imgName;
    }

    getImageName(){
        return this.imageName;
    }
    setImagePath(imgPath){
        this.imagePath=imgPath;
    }

    getImagePath(){
        return this.imagePath;
    }

    getImages(tripId){
        console.log("trip id in file service", tripId);
        return this.http.get('https://go-ami-go.herokuapp.com/files/getimages?tripId='+tripId).map(res=>res.json())
    }

    sendTripIdToImageServer(tripId){
        
        return this.http.post('https://go-ami-go.herokuapp.com/files/imgtodb',tripId).map(res=>res.json())
    }

}