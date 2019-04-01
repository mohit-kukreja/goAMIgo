
import { ModalService } from './../services/modal.service';

import { Component, OnInit, Injectable,NgZone } from '@angular/core';

import { ModalComponent } from './../services/modal.component';


import { Router, ActivatedRoute, Params } from '@angular/router';

import {UsertripService} from './../services/usertrip.service';

import { Http } from '@angular/http';

@Component({

 selector: 'app-search',

 templateUrl: './search.component.html',

 providers: [ModalService],

 styleUrls: ['./search.component.css']

})

export class SearchComponent implements OnInit {

 trips: any;

 dest = "";

 userName = "";

 constructor(

   private modalService: ModalService,

   private router: Router,

   private ngZone:NgZone,

   public userTripService:UsertripService,

   private activatedRoute: ActivatedRoute,

   http: Http) {

    

   }


 ngOnInit() {

   this.userName = sessionStorage.getItem("userName");

 }


 onSubmit(){

   this.userTripService.getTripsByDestination(this.dest,this.userName).subscribe(data =>{

     console.log(data);

     this.trips = data.data;

     console.log("value of my trips",this.trips);

   });

 }


 on121Chat(receiverName,id){

   sessionStorage.setItem('receiver',receiverName);

   sessionStorage.setItem('individual','true');

   this.modalService.open(id);

 }


 closeModal(id: string){

   this.modalService.close(id);

 }

}

