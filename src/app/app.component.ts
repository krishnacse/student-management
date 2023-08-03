import { Component } from '@angular/core';
import { MessagingService } from './shared/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-management';
  message: any;
  constructor(private messagingService: MessagingService){}
  
  ngOnInit(){ 
    this.messagingService.requestPermission();
    this.messagingService.receiveMessaging();
    this.message = this.messagingService.currentMessage;
  }


}

