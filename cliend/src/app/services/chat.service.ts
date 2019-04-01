
import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';



@Injectable()

export class ChatService {

 domain = "https://goamigo-mohit.herokuapp.com";

 constructor(private http: Http) { }



 getChatsByTripId(tripId){

   console.log(tripId)

   return this.http.get(this.domain+ '/chat/getchatByTripId?tripId='+tripId).map(res => res.json());

 }


 getAll121Chats(senderId){

   return this.http.get(this.domain+ '/chat/getAll121Chats?senderId='+senderId).map(res => res.json());

 }

 get121Chats(senderId,receiverId){

   return this.http.get(this.domain+ "/chat/get121Chats?senderId="+senderId+"&receiverId="+receiverId).map(res => res.json());

 }


 getAll121ChatsReceiver(receiverId){

  return this.http.get(this.domain+ '/chat/getAll121ChatsReceiver?receiverId='+receiverId).map(res => res.json());

}



 saveSentMessage(message){

   console.log(message)

   return this.http.post(this.domain + '/chat/savechat',message).map(res => res.json());

 }


 saveTripChat(chat){

   return this.http.post(this.domain + '/chat/groupchatdetails',chat).map(res => res.json());

 }

}

