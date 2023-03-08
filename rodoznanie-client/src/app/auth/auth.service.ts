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
  //Login
  //GoogleAuth
  //get isLoggedIn
  //setUserData
  //logout
}
