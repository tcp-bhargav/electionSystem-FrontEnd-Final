import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {
  districtVotes: any[] = [];
  parties: string[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchDistrictVotes();
    this.startPolling();
  }

  fetchDistrictVotes(): void {
    const apiUrl = 'https://qqrii8476e.execute-api.us-east-1.amazonaws.com/TestStage/alberta2023/votes';

    this.http.get<any[]>(apiUrl).subscribe((data: any[]) => {
      this.districtVotes = data;
      this.parties = this.getPartyNames(data);
      console.log('API Response:', data);
    });
  }

  getPartyNames(data: any[]): string[] {
    const parties: string[] = [];
    for (const districtData of data) {
      const districtParties = Object.keys(districtData.parties);
      for (const party of districtParties) {
        if (!parties.includes(party)) {
          parties.push(party);
        }
      }
    }
    return parties;
  }

  startPolling(): void {
    // Refresh data every 5 seconds
    interval(5000).subscribe(() => {
      this.fetchDistrictVotes();
    });
  }
}
