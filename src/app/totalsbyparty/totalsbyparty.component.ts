import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-totalsbyparty',
  templateUrl: './totalsbyparty.component.html',
  styleUrls: ['./totalsbyparty.component.scss']
})
export class TotalsByPartyComponent implements OnInit {
  totalsByParty: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchTotalsByParty();
  }

  fetchTotalsByParty() {
    const endpointUrl = 'https://kbjbworijh.execute-api.us-east-1.amazonaws.com/AlbertaTestStage/alberta2023/totals_by_party'; // Replace with the actual API endpoint URL

    this.http.get<any[]>(endpointUrl).subscribe(data => {
      this.totalsByParty = data;
    });
  }
}
