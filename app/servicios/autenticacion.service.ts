import { Injectable } from '@angular/core';
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  
  constructor(private router: Router,
    private activatedRouter: ActivatedRoute) { }

  registroUsuario (userdata:any) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, 
   userdata.password)
    .catch(
      error => {
        console.log(error);
        }
        )
        }

  inicioSesion (userdata: { email: string; password: string; }) {
          firebase.auth().signInWithEmailAndPassword(userdata.email, 
          userdata.password)
          .then(response => {
          console.log(response);
         this.router.navigate(['/inicio'])
        })
        .catch(
        error => {
        console.log(error);
        }
        )
        }
        isAuthenticated() {
          const user = firebase.auth().currentUser;
          if (user) {
          return true;
          } else
          {
          return false;
          }
          }
          logout() {
            firebase.auth().signOut();
            } 
}

