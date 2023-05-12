import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-elected',
  templateUrl: './elected.component.html',
  styleUrls: ['./elected.component.scss']
})
export class ElectedComponent implements OnInit {
  elected: any[] = []; // Array to store the elected candidates data received from the API

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchElectedData(); // Call the API when the component is initialized
  }

  fetchElectedData() {
    const endpointUrl = 'https://kbjbworijh.execute-api.us-east-1.amazonaws.com/AlbertaTestStage/alberta2023/elected'; // Replace with the actual API endpoint URL

    this.http.get<any[]>(endpointUrl).subscribe(data => {
      this.elected = data; // Store the received elected candidates data in the 'elected' array
    });
  }
}
