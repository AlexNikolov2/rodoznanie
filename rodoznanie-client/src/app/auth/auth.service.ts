import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../shared/interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public firestore: AngularFirestore,
    public fireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  //Register
  Register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    return this.fireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        const uid = result.user?.uid;
        const email = result.user?.email;
        const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
          `Users/${result.user!.uid}`
        );
        const userData = { uid, firstName, lastName, email };
        userRef.set(userData);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //Login
  Login(email: string, password: string) {
    return this.fireAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  //GoogleAuth
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => {
      this.router.navigate(['/map']);
    });
  }

  //AuthLogin
  AuthLogin(provider: any) {
    return this.fireAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['/map']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  //get isLoggedIn
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null;
  }

  //setUserData
  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
      `Users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  //logout
  Logout() {
    return this.fireAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  //getUserId

  getUserId(): any {
    return this.userData.uid;
  }

  //getuseremail

  getUserEmail(): any {
    return `${this.userData.email}`;
  }
}
