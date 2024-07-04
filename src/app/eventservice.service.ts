import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {
  private eventSubject = new Subject<{ timestamp: Date, intensity: number }>();

  eventObservable$ = this.eventSubject.asObservable();

  addEvent(event: { timestamp: Date, intensity: number }) {
    this.eventSubject.next(event);
  }
}
