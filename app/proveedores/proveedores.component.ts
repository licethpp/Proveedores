import { Component, OnInit } from '@angular/core';
import { ProveedoresService } from './proveedores.service';
import { Proveedor } from '../modelos/proveedor';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {
  mensaje= "";
  proveedores:any;
  nieuwproveedor = new Proveedor();
  constructor( private proveedoresService: ProveedoresService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedoresService.getProveedores();
    //this.mensaje = this.proveedoresService.getProveedores( )
  }




  

}
