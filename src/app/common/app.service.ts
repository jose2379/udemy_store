import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loading: Subject<boolean>;

  constructor() {
    // this.loading.next(true);
   }

  fireLoader() {
    // this.loading = Observable.apply(true);
  }
  stopLoader() {
    // this.loading = Observable.apply(false);
  }
}
