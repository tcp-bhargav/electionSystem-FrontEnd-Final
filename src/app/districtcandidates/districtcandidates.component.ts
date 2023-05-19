import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-districtcandidates',
  templateUrl: './districtcandidates.component.html',
  styleUrls: ['./districtcandidates.component.scss']
})
export class DistrictCandidatesComponent implements OnInit {
  districtResponses: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDistrictResponses();
  }

  fetchDistrictResponses(): void {
    for (let district = 1; district <= 125; district++) {
      const apiUrl = `https://qqrii8476e.execute-api.us-east-1.amazonaws.com/TestStage/alberta2023/candidates?district=${district}`;
      this.http.get(apiUrl).subscribe((response: any) => {
        this.districtResponses.push(response);
        console.log('API Response:', response);
      });
    }
  }
}
