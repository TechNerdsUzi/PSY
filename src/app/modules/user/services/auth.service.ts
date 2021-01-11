import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  signInWithGoogle() {
    this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  signInWithFacebook() {
    this.fireAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  SignInWithEmailPassword(email, password) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then(() => {
      this.router.navigate(['/']);
    }, (err) => {
      alert(err.message);
    });
  }

  SignUpUser(email, password) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then(() => {
      alert("Registered :-)");
      this.router.navigate(['/login']);
    }, (err) => {
      alert(err.message);
    });
  }

  logout() {
    this.fireAuth.signOut();
  }
}
