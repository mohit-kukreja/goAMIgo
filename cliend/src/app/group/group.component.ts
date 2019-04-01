import { Component, OnInit,ElementRef, NgZone, ViewChild} from '@angular/core';
//import {PlanService} from './../services/plan.service';
import {TransactionService} from './../services/transaction.service';
import { UUID } from 'angular2-uuid';
import { NavbarService } from './../services/navbar.service';
//suggestions
import { UtilityService } from './../services/utility.service';
import { SuggestionsService } from './../services/suggestions.service';
import {restaurantDetails} from './../../../../models/resturantDetails';
import {atmDetails} from './../../../../models/atmDetails';
import { FormControl } from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
import { UsertripService} from './../services/usertrip.service';
import {FileService} from './../services/file.service';
//suggestions
import {ImageGalleryComponent} from './../image-gallery/image-gallery.component';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  providers: [UtilityService],
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  // transactions:any;
   imageComp:any;
   userName:any;
  // description:"";
  // amount:0.0;
  // total=0.0;
  // available=0.0;
  destination:any;
  fromdate:any;
  todate:any;
 //suggestions

 public searchControl: FormControl;
  public title:string;
 public res;
 members:any;
 isValidUser: boolean;
 public trip: any;
public tripId: any;
messageClass;
message1;
 //suggestions
 constructor(public userTripService : UsertripService,private mapsAPILoader: MapsAPILoader,public uuid: UUID,public transactionService:TransactionService,private ngZone: NgZone,private suggestionservice:SuggestionsService,private fileSer:FileService,private utilityService: UtilityService) { }
 addToGroup(){
  console.log(this.utilityService.isUserExist(this.userName));
  this.utilityService.isUserExist(this.userName).subscribe(data => {
    this.isValidUser= data.success;
    if(data.success){

      console.log(this.userName+ " method returns "+ this.members.includes(this.userName));
      if(this.members.includes(this.userName)){
        this.messageClass = 'alert alert-danger';
        this.message1="User already selected";

        // set an error message that 1."user already selected"
      }
      else if(this.userName === sessionStorage.getItem('userName')){
        this.messageClass = 'alert alert-danger';
        this.message1="Cannot add Current User";

        console.log("if in validate user"+this.isValidUser);
       // this.members.push(this.userName);
      }else{

        this.members.push(this.userName);
        const trip={
          tripId:sessionStorage.getItem('tripId'),
          members:this.members
        }
        console.log("before call to trip service -------",trip);
        this.userTripService.updateTripByTripId(trip).subscribe(data =>{

        });
      }
    }else{
      this.messageClass = 'alert alert-danger';
      this.message1="Invalid User";
      // set an error message that "invalid username" ;
      console.log("else in validate user"+this.isValidUser);
    }
    this.userName = "";
  }); 



}

  ngOnInit() {
       
    // this.available=this.planservice.getBudget();
    
    //this.tripId=this.planservice.getTripID();
    this.tripId=sessionStorage.getItem('tripId')
    console.log("from group component.ts , call from planservice tripId:"+this.tripId);
    this.userTripService.getTripsByTripId(this.tripId).subscribe(data =>{
      console.log("data")
      console.log(data.data)
      this.trip = data.data;
//      this.total=this.trip[0].budget;
  //    this.available = this.total;
      this.fromdate=this.trip[0].fromdate;
      this.todate=this.trip[0].todate;
      this.destination=this.trip[0].destination;
      this.members=this.trip[0].members
    });
    
    // this.transactionService.getAllTransactions(this.tripId).subscribe(data =>{
    //   console.log("tripId passed in getalltx"+this.tripId)  
    //   console.log("get all tx from tripId")
    //   console.log(data);
    //   this.transactions=data.data;
    //   if(!this.transactions){
    //     this.available=this.transactions[0].availableBal;
    //   }
    // });
  
   this.searchControl = new FormControl();

  }
  
  // calculateAvailableBudget(amt,type){
  //   if(type=='debit'){
      
      
  //   }else{

  //   }
  // }

  // onUpdate(){
  //   this.available=this.available-this.amount;
  //  const transaction={
  //     txId:UUID.UUID(),
  //     userId: sessionStorage.getItem('userName'),
  //     tripId: sessionStorage.getItem('tripId'),
  //     txamount:this.amount,
  //      txdate:Date.now(),
  //      type:"debit",
  //      availableBal:this.available - this.amount,
  //      description: this.description
  //  }     
  //  console.log(transaction)
  //  this.transactionService.saveTransaction(transaction).subscribe(data =>{


  // });
  // this.transactionService.getAllTransactions(this.tripId).subscribe(data =>{
  //   this.transactions = data.data;
  //   console.log("in transactions"+data.data)
  // });
  // this.description="";
  // this.amount=0.0;
  // }

  // onDelete(transactionId){
   
  // }


}
