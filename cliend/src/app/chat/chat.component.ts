
import { UUID } from 'angular2-uuid';

import { Component, OnInit } from '@angular/core';

import {PlanService} from './../services/plan.service';

import {ChatService} from './../services/chat.service';

@Component({

selector: 'app-chat',

templateUrl: './chat.component.html',

styleUrls: ['./chat.component.css']

})

export class ChatComponent implements OnInit {

public conversation:string[];

chats:any[];

chatId:any;

message = "";

//mesg="";

constructor(public planService:PlanService,public chatService:ChatService) { }


 refresh(): void {

  window.location.reload();

}

send(){

  let tripId;

  let receiver;

  if(sessionStorage.getItem('individual')==="true"){

    console.log("here")

   tripId=""

   receiver=sessionStorage.getItem('receiver')

  }

  else{

   console.log("it is in else part: group trip")

   tripId=sessionStorage.getItem('tripId')

   receiver=""

  }

  const msgg={

   tripId:tripId,

    chatId: UUID.UUID(),

    text: this.message,

    date:Date.now() ,

    senderId:sessionStorage.getItem('userName'),

    receiverId:receiver

  }

 console.log("message before being saved:"+msgg);

  this.chatService.saveSentMessage(msgg).subscribe(data=>{

    this.chats.push(msgg)

  });

   //console.log(this.message);

  //this.refresh();

}


keypressHandler(event){

  if (event.keyCode === 13){

    this.send();

}


}


ngOnInit() {
console.log("@@@@"+sessionStorage.getItem('tripId'))
  if(sessionStorage.getItem('individual')=="false"){

    //console.log("her e dfs")

    this.chatService.getChatsByTripId(sessionStorage.getItem('tripId')).subscribe(data =>{

     // console.log(data.data)

      this.chats = data.data;

      console.log("chats")

      console.log(this.chats)

   

    });

   }else{

     console.log("there")

     this.chatService.get121Chats(sessionStorage.getItem('userName'),sessionStorage.getItem('receiver')).subscribe(data =>{

      // console.log(data.data)

       this.chats = data.data;

      // console.log("chats")

      // console.log(this.chats)

    

     });

   }

  // this.chatService.getChatId(this.planService.getTripID()).subscribe(data =>{

  //   console.log(data.data)

  //   this.chatId=data.data;

  // });


  // this.chatService.getChats(this.chatId).subscribe(data =>{

  //   console.log(data.data)

  //   this.chats=data.data;

  // });

}


}


