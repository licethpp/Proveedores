import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HttpClientModule } from "@angular/common/http";
import { DataTablesModule } from 'angular-datatables';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProveedoresService } from "./proveedores/proveedores.service";
import { ProveedoresComponent } from './proveedores/proveedores.component'
import { InicioComponent } from './inicio/inicio.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AddproveeComponent } from './addprovee/addprovee.component';
import { AddpresComponent } from './addpres/addpres.component';
import { PresupuestosService } from '../app/servicios/presupuestos.service';
import { PresupuestosComponent } from './presupuestos/presupuestos.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { EditpresComponent } from './editpres/editpres.component';
import { RegistroComponent } from './registro/registro.component';
import { AutenticacionService } from './servicios/autenticacion.service';
import { InisesComponent } from './inises/inises.component';
import firebase from 'firebase/compat/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { ArtikulosModule } from './artikulos/artikulos.module';
import { ArtikelenComponent } from './artikulos/artikelen/artikelen.component';
import { ArtikelApiService } from './artikulos/artikelen/artikel-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



const routes: Routes = [ 
  { path: '', component: InicioComponent }, 
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'addprovee', component: AddproveeComponent },
  { path: 'addpres', component: AddpresComponent},
  {path: 'presupuestos', component: PresupuestosComponent},
  {path: 'Artikelen', component: ArtikelenComponent},

  { path: 'editpres/:id', component: EditpresComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'iniciosesion', component: InisesComponent },
  { path: '**', component: InicioComponent},


  ];

firebase.initializeApp(environment.firebase);
@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveeComponent,
    PresupuestosComponent,
    EditpresComponent,
    RegistroComponent,
    InisesComponent,
    ArtikelenComponent,

  ],
  imports: [
    BrowserModule,
    CommonModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    ArtikulosModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)

  ],
 
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase },ProveedoresService, PresupuestosService,ArtikelApiService, ScreenTrackingService,UserTrackingService,AutenticacionService],
  bootstrap: [AppComponent],
})
export class AppModule { }
