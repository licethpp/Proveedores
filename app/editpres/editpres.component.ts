import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { PresupuestosService } from '../servicios/presupuestos.service';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css']
})

export class EditpresComponent implements OnInit {

 presupuestoForm :any
 presupuesto:any
 base :any
 tipo : any
 iva: any = 0;
 total: any = 0;
 id!: string;
  http: any;



constructor( private pf: FormBuilder,private presupuestoService: PresupuestosService,private router: Router,private activatedRouter: ActivatedRoute ) 
{ 
    //your code to update the model
  this.activatedRouter.params.subscribe( parametros => {
    console.log(parametros)
  this.id = parametros['id'];

  this.presupuestoService.getPresupuesto(this.id).subscribe( presupuesto => {
    console.log(presupuesto)
    this.presupuesto = presupuesto
  })
  
  });
  
}    
   ngOnInit(){
   this.presupuestoForm = this.pf.group({
    proveedor: ['', Validators.required ],
    fecha: ['', Validators.required ],
    concepto: ['', [ Validators.required, Validators.minLength(10)] ],
    base: ['', Validators.required ],
    tipo: ['', Validators.required ],
    iva: this.iva ,
    total: this.total
  });
  this.onChanges();

}
onChanges(): void{
  this.presupuestoForm.valueChanges.subscribe((valor: { base: any; tipo: any; }) => {
  this.base = valor.base;
  this.tipo = valor.tipo;
  this.presupuestoForm.value.iva = this.base * this.tipo;
  this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
  });
}

onSubmit(){

this.presupuesto = this.savePresupuesto();
 this.presupuestoService.putPresupuesto( this.presupuesto, this.id ).subscribe(newpre => {
  this.router.navigate(['/presupuestos'])
 })
  }

  
  savePresupuesto() {
    const savePresupuesto = {
      
     proveedor: this.presupuestoForm.get('proveedor',).value,
    fecha: this.presupuestoForm.get('fecha').value,
    concepto: this.presupuestoForm.get('concepto').value,
    base: this.presupuestoForm.get('base').value,
    tipo: this.presupuestoForm.get('tipo').value,
    iva: this.presupuestoForm.get('iva').value,
    total: this.presupuestoForm.get('total').value
    }
     return savePresupuesto;
    };
}
