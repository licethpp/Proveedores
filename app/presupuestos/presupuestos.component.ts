import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from '../servicios/presupuestos.service';

@Component({
  selector: 'app-presupuestos',
  templateUrl: './presupuestos.component.html',
  styleUrls: ['./presupuestos.component.css']
})
export class PresupuestosComponent implements OnInit {
 presupuestos:any[] = [];

  constructor(public presupuestosService: PresupuestosService)
   { 
    this.presupuestosService.getPresupuestos().subscribe((presupuestos: { [x: string]: any; }) => {
    for ( const id$ in presupuestos) {
    const p = presupuestos[id$];
    p.id$ = id$;
    this.presupuestos.push(presupuestos[id$]);
    }
    })
  }
  
  
  ngOnInit() {
    /*this.presupuestosService.getPresupuestos().subscribe(data=>{
      console.log(data)
    })*/
  }

  eliminarPresupuesto(id$: string) {
    this.presupuestosService.delPresupuesto(id$).subscribe( res => {
    this.presupuestos = [];
    this.presupuestosService.getPresupuestos().subscribe(presupuestos => {
    for ( const id$ in presupuestos) {
    const p = presupuestos[id$];
    p.id$ = id$;
    this.presupuestos.push(presupuestos[id$]);
    }
    })
    });
    }
}
