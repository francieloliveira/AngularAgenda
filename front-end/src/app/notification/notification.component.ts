import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})

export class NotificationComponent {
  @Input() notification: any;
  constructor(public notificationService: NotificationService) {}
  hideNotification(message: string): void {
    this.notificationService.hideNotification(message);
  }
}
