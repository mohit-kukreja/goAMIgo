import { Component, OnInit, Injectable,ViewChild,ElementRef,NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsertripService } from '../services/usertrip.service';
import { UUID } from 'angular2-uuid';
import { ModalService } from './../services/modal.service';
import { ModalComponent } from './../services/modal.component';
//import {PlanService} from './../services/plan.service';
import { NavbarService } from './../services/navbar.service';
import { MapsAPILoader } from '@agm/core';
import { UtilityService } from './../services/utility.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  providers: [ModalService,UtilityService],
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  form: FormGroup;

  fromdate:any;
  todate:any;
  messageClass;
  message;
  message1;
  saveSuccess;
  name="len";
  userName:any;
  members=[];
  amount:any;
  autocomplete:any;
  autocomplete2:any;
  @ViewChild('source')public sourceElement:ElementRef;
  @ViewChild('destination')public destinationElement:ElementRef;
  source :any;
  destination :any;
  isValidUser: boolean;
 
  
  
  constructor(
    private modalService: ModalService,
  //  private planservice:PlanService,
    private uuid: UUID,
    private formBuilder: FormBuilder,
    private userTripService: UsertripService ,
    private router: Router,
    private mapsAPILoader:MapsAPILoader,
    private ngZone:NgZone,
    private utilityService: UtilityService) { 

      this.createForm();
    }

  createForm(){
    this.form = this.formBuilder.group({
      source: ['', Validators.required],
      destination: ['', Validators.required],
      todate: ['', Validators.required],
      fromdate: ['', Validators.required],
      lone: ['', Validators.required],
      amount: ['', Validators.required]
    });
    }
  onPlanSUbmit(id){
    if(this.OnCompare())
    {
      this.messageClass = 'alert alert-danger';
      this.message1="To date should be greater than or equal to From date";
    }
    else{
  
    console.log(this.form.get('lone').value=="lone")
    if(this.form.get('lone').value=="lone"){
     this.Save();
      }else{
        this.modalService.open(id);
    }
    
  } 
}


Save(){
//console.log(this.members)

//if(this.form.get('lone').value=="group"){
  
    this.members.push(sessionStorage.getItem('userName'));

    let tripId=UUID.UUID()

    console.log("here"+this.form.get('amount').value)
    
    
    // const trip = {
    //   userId: sessionStorage.getItem('user'),
    //   tripId:tripId
    // }
    
    // this.userTripService.saveTrip(trip).subscribe(data =>{
    //   console.log("wrong") 
    
    // });
    let tempmessage="";
    
    for(let member of this.members){
      const usertrip = {
        source: this.source,
        destination: this.destination,
        todate: this.form.get('todate').value,
        fromdate: this.form.get('fromdate').value,
        lone: this.form.get('lone').value,
        name: member,
        tripId:tripId,
        members:this.members,
        amount:this.form.get('amount').value  
    }  
    this.userTripService.saveTripDetails(usertrip).subscribe(data =>{
      if (!data.success) {
        this.messageClass = 'alert alert-danger'; // Set an error class
        this.saveSuccess = data.success;
        tempmessage = data.message;
        console.log("wrong") 
      } else {
        this.messageClass = 'alert alert-success'; // Set a success class
        tempmessage = data.message; // Set a success message
        this.saveSuccess = data.success;
    //    console.log("dsfrg"+trip);
        //this.userTripService.saveTrip(trip);  
        // After 2 seco
        
    }
    
    this.message=tempmessage;
    //this.planservice.setTripID(tripId);
    sessionStorage.setItem('tripId',tripId);
        //this.planservice.setBudget(this.form.get('amount').value);
        console.log(this.form.get('lone').value=="lone")
        if(this.form.get('lone').value=="lone"){
          console.log("not navigating")
         // if(this.saveSuccess){
            // sessionStorage.setItem('tripId',tripId);
            this.router.navigate(['/lone']);
         // }
          
        }else{
          console.log("navigating")
        this.router.navigate(['/group']);
      }
    
    
    });
    




  }
//}



}

OnCompare(){
  console.log("---"+this.fromdate+"----"+this.todate)
  if(this.fromdate > this.todate){
    console.log("Working");
    return true;
  
  }
}


onDelete(user){
  ///this.model.members.
  var index = this.members.indexOf(user,0);
if (index > -1) {
   this.members.splice(index, 1);
}
}

createGroup(){
  var x = document.getElementById("div1").style.visibility="visible";
//to show hinnden elementsS
}
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

searchPeople()
{
  this.Save();
  this.router.navigate(['/search']);
}

closeModal(id: string){
  this.modalService.close(id);
}

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.sourceElement.nativeElement, {
        types: ["(cities)"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          this.source=place.formatted_address;
 
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }          
        });
      });
    });
  this.mapsAPILoader.load().then(() => {
    let autocomplete2 = new google.maps.places.Autocomplete(this.destinationElement.nativeElement, {
      types: ["(cities)"]
    });
    autocomplete2.addListener("place_changed", () => {
      this.ngZone.run(() => {
        //get the place result
        let place: google.maps.places.PlaceResult = autocomplete2.getPlace();
          this.destination=place.formatted_address;
                  //verify result
        if (place.geometry === undefined || place.geometry === null) {
          return;
        }
        
      });
    });
  });
}

}


