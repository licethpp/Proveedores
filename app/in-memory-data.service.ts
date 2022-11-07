import { Injectable } from '@angular/core';
import { Proveedor } from './modelos/proveedor';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {
 createDb() {
   const proveedores :Proveedor[]=[ 
      { 
      nombre: 'Telefónica', 
      cif: 'B12345678', 
      direccion: 'Paseo de la Castellana, 100', 
      cp: '28.010', 
      localidad: 'Madrid', 
      provincia: 'Madrid', 
      telefono: 911111111, 
      email: 'info@telefonica.com', 
      contacto: 'Juan Pérez'
      },
      {
      nombre: 'Iberdrola', 
      cif: 'B87654321', 
      direccion: 'Príncipe de Vergara, 200', 
      cp: '28.015', 
      localidad: 'Madrid', 
      provincia: 'Madrid', 
      telefono: 922222222, 
      email: 'info@iberdrola.com', 
      contacto: 'Laura Martínez'
      },
      {
        nombre: 'Iberdrola', 
        cif: 'B87654321', 
        direccion: 'Príncipe de Vergara, 200', 
        cp: '28.015', 
        localidad: 'Madrid', 
        provincia: 'Madrid', 
        telefono: 922222222, 
        email: 'info@iberdrola.com', 
        contacto: 'Laura Martínez'
      }
      ]
      return { Proveedor };
    }
  constructor() { }


 
}
