
import { Component, OnInit } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import { NavbarService } from './../services/navbar.service';
import { UUID } from 'angular2-uuid';
import { ChatService} from './../services/chat.service';


@Component({

 selector: 'app-messages',

 templateUrl: './messages.component.html',

 styleUrls: ['./messages.component.css']

})

@Pipe({name: 'convMap'}) 

export class MessagesComponent implements OnInit,PipeTransform {



conversations: any;

myarray:any[];
messages:any[];
convMap : Map<string, any[]>;
newMsg=""
newReceiver=""
 constructor(public nav: NavbarService, public chatService : ChatService ) { }


 ngOnInit() {

   this.convMap = new Map<string, any[]>();

   this.nav.show();

 this.chatService.getAll121Chats(sessionStorage.getItem("userName")).subscribe(data =>{

   this.conversations= data.data;

   if(this.conversations.length > 0){

     let i=0;

     for(i=0;i<this.conversations.length;i++){

       if(this.convMap.has(this.conversations[i].receiverId)){

         this.convMap.get(this.conversations[i].receiverId).push(this.conversations[i]);

       }else{

           let tempArray = [this.conversations[i]]

           this.convMap.set(this.conversations[i].receiverId,tempArray);

       }

    }



   }

   this.chatService.getAll121ChatsReceiver(sessionStorage.getItem("userName")).subscribe(data =>{
    this.conversations= data.data;
console.log("receievr")
console.log(this.conversations)
    if(this.conversations.length > 0){
 
      let i=0;
 
      for(i=0;i<this.conversations.length;i++){
        console.log("------")
        if(this.convMap.has(this.conversations[i].senderId)){
 console.log(this.conversations[i].senderId)
          this.convMap.get(this.conversations[i].senderId).push(this.conversations[i]);
 
        }else{
          console.log("----!!!!!!--")
            let tempArray = [this.conversations[i]]
            console.log(this.conversations[i].senderId)
            this.convMap.set(this.conversations[i].senderId,tempArray);
 
        }
 
     }
    }
 

   });

   this.myarray=this.transform(this.convMap);
   if(this.myarray.length==0){
     this.myarray.push({ key:'' , val:''  })
   }
   console.log("my ")
   console.log(this.myarray)
   this.populateMsgs(this.myarray[0].val,this.myarray[0].key)
  });

  //console.log(this.convMap.entries);

 }


 transform(value: any, args?: any[]): Object[] { 
  //console.log(value)
  let returnArray = []; 
  value.forEach((entryVal, entryKey) => { 
    //console.log(entryVal)
      returnArray.push({ key: entryKey, val: entryVal });
   });

   
   return returnArray; 
  } 


  populateMsgs(listOfChats:any,receiver){
    this.messages=[]
    console.log("list")
    console.log(listOfChats)
    this.newReceiver=receiver
    this.messages=listOfChats

  }

  onSave(){


  
    const msgg={
  
     tripId:"",
  
      chatId: UUID.UUID(),
  
      text: this.newMsg,
  
      date:Date.now() ,
  
      senderId:sessionStorage.getItem('userName'),
  
      receiverId:this.newReceiver
  
    }
  
  // console.log("message before being saved:"+msgg);
  
    this.chatService.saveSentMessage(msgg).subscribe(data=>{
  
      this.messages.push(msgg)
      this.newMsg=""
    });
  
     //console.log(this.message);
  
    //this.refresh();
  
  }
  
  
}

