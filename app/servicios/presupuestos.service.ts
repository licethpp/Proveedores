import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import 'firebase/compat/auth';
import 'firebase/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {
  
  
  presURL = 'https://comprasapp-9ae51-default-rtdb.europe-west1.firebasedatabase.app/presupuestos.json'; 
  preURL = 'https://comprasapp-9ae51-default-rtdb.europe-west1.firebasedatabase.app/presupuestos'; 

  
  //configUrl = 'assets/config.json';

  constructor(public http: HttpClient,public afs: AngularFirestore) { 
 
  }
  

  getPresupuestos()  {
  return this.http.get( 'https://comprasapp-9ae51-default-rtdb.europe-west1.firebasedatabase.app/presupuestos.json');
   }

   
  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json'
    });
    return this.http.post( this.presURL, newpres, {headers}).pipe(map((response: any) => response.json()))
      
   ;
  }
   
  getPresupuesto( id$: string )  {
    const url = `${ this.preURL }/${ id$ }.json`; 
    return this.http.get( url ).pipe(map(res=> res.valueOf()))
    console.log(id$)
    }

    

   putPresupuesto( presupuesto: any, id$: string){ 
    const newpre = JSON.stringify(presupuesto);
    const headers = new  HttpHeaders({
      'Accept': 'text/html',
      'Content-Type': 'text/plain; charset=utf-8'
    })
    const url = `${ this.preURL }/${ id$ }.json`; 
     return this.http.put( url, newpre, {headers}).pipe (map(res=> res)) 

    }

   delPresupuesto ( id$: string ) {
    const url = `${ this.preURL }/${ id$}.json`;
    return this.http.delete( url ).pipe(map((rest:any)=> rest.json()));
    }



    ngOnInit() {
       }
    }
   

  
   

