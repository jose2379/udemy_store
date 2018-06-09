import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  loading: Subject<boolean>;

  constructor() { }

  fireLoader() {
    // this.loading = Observable.of(true);
  }
  stopLoader() {
    // this.loading = Observable.og(false);
  }
}
