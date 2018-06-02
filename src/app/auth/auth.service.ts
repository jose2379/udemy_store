import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { FirebaseApp } from 'angularfire2';
import { FirebaseAuth, GoogleAuthProvider } from '@firebase/auth-types';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    // this.user = this.afAuth.authState.subscribe(user => {
    //   if(user){
    //     return null;
    //   } else {
    //     return Observable.arguments(null);
    //   }
    // })
   }

   private oAuthLogin(provider){
     return this.afAuth.auth.signInWithPopup(provider)
     .then(credentials => {
       this.router.navigate(['/shop']);
     })
   }

   googleLogin(){
     const provider = new auth.GoogleAuthProvider();
     return this.oAuthLogin(provider);
   }

   emailPassword(email, password){
     return this.afAuth.auth.signInWithEmailAndPassword(email.value, password.value);
   }

   signUp(email, password){
     return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
   }

   signOut(){
     this.afAuth.auth.signOut().then(() => {
       this.router.navigate(['/login']);
     })
   }
}
