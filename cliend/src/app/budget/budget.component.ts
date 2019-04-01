import {TransactionService} from './../services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { UsertripService} from './../services/usertrip.service';
import {} from './../../../../models/';
@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  transactions:any;
  imageComp:any;
  description:"";
  amount:0.0;
  total=0.0;
  available=0.0;

 public trip: any;
 public tripId: any;
  constructor(public transactionService:TransactionService,public userTripService : UsertripService) { }

  ngOnInit() {
    this.tripId=sessionStorage.getItem('tripId')
    console.log("from group component.ts , call from planservice tripId:"+this.tripId);

    this.userTripService.getTripsByTripId(this.tripId).subscribe(data =>{
      console.log("data ")
      console.log(data.data)
      this.trip = data.data;
      this.total=this.trip[0].budget;
      this.available = this.total;
      console.log("base value: "+this.available)
    });

    this.transactionService.getAllTransactions(this.tripId).subscribe(data =>{
      console.log("tripId passed in getalltx"+this.tripId)  
      console.log("get all tx from tripId")
      console.log(data);
      this.transactions=data.data;
      console.log(this.transactions)
      if(this.transactions){
        let i=0
        for (i=0;i< this.transactions.length;i++){
          this.available = this.available-this.transactions[i].txamount;
        }
        console.log("final refresh value: "+this.available);
      }else{
        
      }
    });

  }

  // calculateAvailableBal(transactionList:transactions){
  //   for (let transaction in transactionList){
  //     this.available = this.available-transaction.txamount;
  //   }

  //   return this.available;
  // }

  
  onUpdate(){
       const transaction={
      txId:UUID.UUID(),
      userId: sessionStorage.getItem('userName'),
      tripId: sessionStorage.getItem('tripId'),
      txamount:this.amount,
       txdate:Date.now(),
       type:"debit",
       availableBal:this.available - this.amount,
       description: this.description
   }     
   console.log("before save tx is called in .ts "+transaction)
   this.transactionService.saveTransaction(transaction).subscribe(data =>{

    this.transactionService.getAllTransactions(this.tripId).subscribe(data1 =>{
      this.transactions = data1.data;
      console.log("in transactions "+data1.data)
  
    //  this.available=this.transactions[0].availableBal;
      console.log("base value in tx: "+this.available)
    });
    this.description="";
    this.available=this.available-this.amount
    this.amount=0.0;
    

  });
  }

  onDelete(txId,txamount){
    console.log("deleted tx: "+txId)
    console.log("deleted tx: "+txamount)
    this.transactionService.deleteTransaction(txId).subscribe(data =>{
      this.transactionService.getAllTransactions(this.tripId).subscribe(data1 =>{
        this.transactions = data1.data;
        console.log("in transactions"+data1.data)
        this.available=this.available+txamount;
        console.log("base value in tx: "+this.available)
  
  
      });
    });
    
    
   
  }


}
