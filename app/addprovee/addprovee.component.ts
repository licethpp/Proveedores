import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { ProveedoresService } from '../proveedores/proveedores.service';
import { Proveedor } from '../modelos/proveedor';

@Component({
  selector: 'app-addprovee',
  templateUrl: './addprovee.component.html',
  styleUrls: ['./addprovee.component.css']
})
export class AddproveeComponent implements OnInit {
nieuwproveedor = new Proveedor()
@ViewChild('formpro')formpro!: NgForm;
proveedor: any;
nombre= ''
cif= ''
direccion= ''
cp= ''
localidad= ''
provincia= ''
telefono= null
email =''
contacto= ''
  provincias: string[] = [ 
    'Álava','Albacete','Alicante','Almería','Asturias','Ávila','Badajoz','Barcelona',
    'Burgos', 'Cáceres', 'Cádiz','Cantabria','Castellón','Ciudad Real','Córdoba',
    'La Coruña','Cuenca','Gerona','Granada','Guadalajara',
    'Guipúzcoa','Huelva','Huesca','IslasBaleares','Jaén','León','Lérida','Lugo',
    'Madrid', 'Málaga','Murcia','Navarra','Orense','Palencia','Las Palmas',
    'Pontevedra','La Rioja','Salamanca','Segovia','Sevilla','Soria','Tarragona',
    'Santa Cruz de Tenerife', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 
    'Zamora','Zaragoza' ]
 

constructor(private pf: FormBuilder,private proveedoresService: ProveedoresService){


  
 this.proveedor = {
 nombre: '',
 cif: '',
 direccion: '',
 cp: '',
 localidad: '',
 provincia: '',
 telefono: null,
 email: '',
 contacto: ''
 }
 
 }
 onSubmit(){
this.proveedoresService.addProvedoor
  this.proveedor = this.saveproveedor();
  this.proveedor.reset();

 /* this.proveedor.nombre = this.formpro.value.nombre;
  this.proveedor.cif = this.formpro.value.cif;
  this.proveedor.direccion = this.formpro.value.direccion;
  this.proveedor.cp = this.formpro.value.cp;
  this.proveedor.localidad = this.formpro.value.localidad;
  this.proveedor.provincia = this.formpro.value.provincia;
  this.proveedor.telefono = this.formpro.value.telefono;
  this.proveedor.email = this.formpro.value.email;
  this.proveedor.contacto = this.formpro.value.contacto;
  this.formpro.reset();*/
  }
  saveproveedor(): any {
    const saveproveedor = {
      proveedor: this.proveedor.get('nombre').value,
      cif: this. proveedor.get('cif').value,
      direccion: this.proveedor.get('direccion').value,
      cp: this.proveedor.get('cp').value,
      localidad: this.proveedor.get('localidad').value,
      provincia: this.proveedor.get('provincia').value, 
      telefono: this.proveedor.get('telefono').value ,
      email: this.proveedor.get('email').value ,
      contacto: this.proveedor.get('contacto').value 
      };
      return saveproveedor;
      }

  ngOnInit(): void {
    this.proveedor = this.proveedoresService.getProveedores();
    this.proveedor = this.pf.group({
      nombre: ['', Validators.required ],
      cif: ['', Validators.required ],
      direccion: ['', [ Validators.required, Validators.minLength(10)] ],
      cp: ['', Validators.required ],
      localidad: ['', Validators.required ],
      provincia: ['', Validators.required ],
      telefono: ['', Validators.required ],
      email: ['', Validators.required ],
      contacto: ['', Validators.required ],

      });

  }

  add(): void {
    if (!this.nieuwproveedor.nombre.trim()){ return; }
    this.proveedoresService.addProvedoor({ name: this.nieuwproveedor.nombre, email: this.nieuwproveedor.email, telefono: this.nieuwproveedor.telefono } as unknown as Proveedor)
      .subscribe(provee => {
        this.nieuwproveedor['push'](provee);
        this.nieuwproveedor = {} as Proveedor; // of = new Land()
      });
}



}
