import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public firestore: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {}

  //Register
  Register(email: string, password: string) {}
  //Login
  Login(email: string, password: string) {}
  //GoogleAuth
  GoogleAuth() {}
  //get isLoggedIn
  get isLoggedIn(): boolean {
    return true; //test
  }
  //setUserData
  SetUserData(user: any) {}
  //logout
  Logout() {}
}
