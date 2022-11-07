import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {  catchError, map } from 'rxjs/operators';
import { Observable, pipe, throwError } from 'rxjs';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPost } from '../modelos/IPost';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Proveedor } from '../modelos/proveedor';
import { InMemoryDbService } from 'angular-in-memory-web-api';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'applica-tion/json' }) };
@Injectable({
  providedIn: 'root'
})
export class ProveedoresService  {
   nieuwproveedor = new Proveedor();
  private proveedorenUrl = 'api/proveedores';
  //const proveedores: Proveedor[] = [
   
  constructor(public http: HttpClient,public afs: AngularFirestore
  ) { }


     
  getProveedores(Proveedor?:any){
    return this.getProveedores; 
    }

    getStudentList(): Observable < any[] > {
      return this.http.get < any > (this.proveedorenUrl);
  }

    addProvedoor(proveedor: Proveedor): Observable<Proveedor> {
      return this.http.post<Proveedor>(this.proveedorenUrl, proveedor, httpOptions).pipe(
        catchError(this.handleError<Proveedor>('addProvedoor'))
      );
      }
  handleError<T>(arg0: string): (err: any, caught: Observable<Proveedor>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  
  
     
   }
  

