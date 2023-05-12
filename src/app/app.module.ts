import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';


import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PartiestableComponent } from './partiestable/partiestable.component';
import { CandidatesForAllRidingsComponent } from './candidatesforallridings/candidatesforallridings.component';
import { ElectedComponent } from './elected/elected.component';
import { RidingsComponent } from './ridings/ridings.component';
import { TotalsByPartyComponent } from './totalsbyparty/totalsbyparty.component';
import { TotalsbyridingComponent } from './totalsbyriding/totalsbyriding.component';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://example.com/api';
  private apiKey = 'your-api-key';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(this.apiUrl, { headers });
  }

}




@NgModule({
  declarations: [
    AppComponent,
    PartiestableComponent,
    CandidatesForAllRidingsComponent,
    ElectedComponent,
    RidingsComponent,
    TotalsByPartyComponent,
    TotalsbyridingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

