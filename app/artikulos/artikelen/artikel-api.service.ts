import { Injectable } from '@angular/core';
import { Artikel } from "../../modelos/artikel";
import { HttpClient,HttpResponse} from "@angular/common/http";
import { map, Observable } from "rxjs";
//import { environment } from 'src/environments/environment';
import { environment } from 'environments/environment';





@Injectable({
  providedIn: 'root'
})
export class ArtikelApiService {
  artikels!: Artikel[];
  artikelUrl = "https://localhost:44353/api/Artikelen"; // URL to web api

  constructor(private http: HttpClient) {}

   getArtikelen(): Observable<Artikel> {
    return this.http.get<Artikel>(this.artikelUrl);
  }

  getArtikelen2(): Observable<Artikel[]> {
    return this.http.get<Artikel[]>(`${environment.production}artikels`).pipe( map((data: any) => {return data;
      })
    )
  }

}
