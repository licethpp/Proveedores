import { Component, OnInit } from '@angular/core';
import { Artikel } from 'app/modelos/artikel';
import { ArtikelApiService } from './artikel-api.service';
 import { HttpClient,HttpResponse} from "@angular/common/http";
import { JsonPipe } from '@angular/common';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

class DataTablesResponse {
  data! :any[];
  draw!: number;
  recordsFiltered!: number;
  recordsTotal!: number;
}

@Component({
  selector: 'table-pagination-example',
  templateUrl: './artikelen.component.html',
  styleUrls: ['./artikelen.component.css']
})


export class ArtikelenComponent implements OnInit, AfterViewInit {
  dtOptions:DataTables.Settings = {};  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator 
 @ViewChild(MatSort) sort!: MatSort;
   artikels = new MatTableDataSource<Artikel>()


  displayedColumns: string[] = ['ID', 'Naam', 'prijs', 'voorraad'];


  constructor( private ArtikelApiService : ArtikelApiService,private http: HttpClient) { }

 // ngOnInit() {
 
//this.ArtikelApiService.getArtikelen().subscribe(res=> this.artilelList=res)
//
 // }

 ngAfterViewInit() {
  this.artikels.paginator = this.paginator;
  this.artikels.sort = this.sort;
}



 ngOnInit(): void {

   
      this.http.get<Artikel[]>('https://localhost:44353/api/Artikelen').subscribe(data=>{
        this.artikels.data = data
        console.log(this.artikels)

      })
      

    };
  
}

//}
