import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-totalsbyriding',
  templateUrl: './totalsbyriding.component.html',
  styleUrls: ['./totalsbyriding.component.scss']
})
export class TotalsbyridingComponent implements OnInit {
  totalsByRiding: any[] = []; // Array to store the totals by riding data received from the API

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchTotalsByRidingData(); // Call the API when the component is initialized
  }

  fetchTotalsByRidingData() {
    const endpointUrl = 'https://kbjbworijh.execute-api.us-east-1.amazonaws.com/AlbertaTestStage/alberta2023/totals_by_riding'; // Replace with the actual API endpoint URL

    this.http.get<any[]>(endpointUrl).subscribe(data => {
      this.totalsByRiding = data; // Store the received totals by riding data in the 'totalsByRiding' array
    });
  }
}
