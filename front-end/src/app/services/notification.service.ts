import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Notification {
  message: string;
  type: 'success' | 'error';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationsSubject = new BehaviorSubject<Notification[]>([]);

  notifications$ = this.notificationsSubject.asObservable();

  constructor() {}

  showNotification(message: string, type: 'success' | 'error'): void {
    this.notificationsSubject.next([{ message, type }, ...this.notificationsSubject.value]);
  }

  hideNotification(message: string): void {
    this.notificationsSubject.next(this.notificationsSubject.value.filter(notification => notification.message !== message));
  }
}
