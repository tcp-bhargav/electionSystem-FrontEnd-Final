import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-partiestable',
  templateUrl: './partiestable.component.html',
  styleUrls: ['./partiestable.component.scss']
})
export class PartiestableComponent implements OnInit {
  parties: any[] = []; // Array to store the party data received from the API

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPartyData(); // Call the API when the component is initialized
  }

  fetchPartyData() {
    
    const endpointUrl = 'https://qqrii8476e.execute-api.us-east-1.amazonaws.com/TestStage/alberta2023/parties'; // Replace with the actual API endpoint URL
  
      this.http.get<any[]>(endpointUrl).subscribe(data => {
        this.parties = data;
      });
    }

  }

