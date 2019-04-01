import { NavbarService } from './../services/navbar.service';
//import { Component, OnInit } from '@angular/core';
import { Component, OnInit,ElementRef, NgZone, ViewChild} from '@angular/core';
import {PlanService} from './../services/plan.service';
import {TransactionService} from './../services/transaction.service';
import { UUID } from 'angular2-uuid';
import { UsertripService} from './../services/usertrip.service'
//suggestions
import { SuggestionsService } from './../services/suggestions.service';
import {restaurantDetails} from './../../../../models/resturantDetails';
import {atmDetails} from './../../../../models/atmDetails';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
//suggestions

@Component({
  selector: 'app-lone',
  templateUrl: './lone.component.html',
  styleUrls: ['./lone.component.css']
})
export class LoneComponent implements OnInit {
  
 tripId = "";
 public tripInfo:any;
 //suggestions
 public latitude: number;
 public longitude: number;
 public searchControl: FormControl;
 public zoom: number;
 public formatted_address:string;
 public noresluts:string;
 public rstaurantname;
 public google:any;
 public atmname;
 public rstaurantnameList:boolean;
 public atmnameList: boolean;
 public title:string;
 @ViewChild("search")
 public searchElementRef: ElementRef;
 public res;
 public res_atm;
 //public modelid: PlanComponent;

 public restaurantsList: restaurantDetails[];
 public atmList: atmDetails[];

 //suggestions
   constructor(private userTripService: UsertripService,private mapsAPILoader: MapsAPILoader,public uuid: UUID,public planservice:PlanService,public transactionService:TransactionService,private ngZone: NgZone,private suggestionservice:SuggestionsService ) { }

  ngOnInit() {
    //this.available=this.planservice.getBudget();
  }

}
