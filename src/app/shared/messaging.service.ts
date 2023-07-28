import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AngularFireMessaging } from '@angular/fire/compat/messaging'
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  currentMessage = new BehaviorSubject<any>(null);
  constructor(private angularFireMessaging : AngularFireMessaging) { }

  requestPermission(){
    this.angularFireMessaging.requestToken.subscribe((token) => {
      console.log(token);      
    },(err) =>{
      console.log("unable to get user permission",err);
    })
  }

  receiveMessaging(){
    this.angularFireMessaging.messages.subscribe((payload)=>{
      console.log("new message received",payload);
      this.currentMessage.next(payload);
    })
  }
}
