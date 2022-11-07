import { Component, OnInit } from '@angular/core';
import { PresupuestosService } from 'app/servicios/presupuestos.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})
export class AddpresComponent implements OnInit {

  presupuestoForm:FormGroup;
  presupuesto: any;
   base: any;
   tipo: any;
   iva: any = 0;
   total: any = 0;

  constructor(private pf: FormBuilder,private presupuestoService: PresupuestosService) { 
    
  }

  ngOnInit(): void {
    this.presupuestoForm = this.pf.group({
      proveedor: '',
      fecha: '',
      concepto: '',
      base: '',
      tipo: '',
      iva: '',
      total: ''
      });
     this.onChanges(); 
  }
  

  onChanges():void{
  this.presupuestoForm.valueChanges.subscribe((valor: { base: any; tipo: any; }) => { 
    this.base = valor.base; 
    this.tipo = valor.tipo;
    this.presupuestoForm.value.iva = this.base * this.tipo; 
    this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
    }

  onSubmit() {
  this.presupuesto = this.savePresupuesto();
 this.presupuestoService.postPresupuesto( this.presupuesto )
 .subscribe(newpres => {
 })
 this.presupuestoForm.reset();
  }

 savePresupuesto() {
const savePresupuesto = {
     
     proveedor:this.presupuestoForm.get('proveedor').value,
      fecha: this. presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value, 
      total: this.presupuestoForm.get('total').value 
      };
      return savePresupuesto;

  }  
}

      
