import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DistrictCandidatesComponent } from './districtcandidates/districtcandidates.component';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  districtResponses: any[] = [];
  parties: string[] = []; // Define the 'parties' property
  districtVotes: any[] = []; // Define the 'districtVotes' property
  title = 'myapp';


  isCandidatesRouteActive(): boolean {
    return this.router.url.includes('/candidates');
  }

  isVotesRouteActive(): boolean {
    return this.router.url.includes('/votes');
  }

  getDistrictsArray(): number[] {
    const districts = [];
    for (let district = 1; district <= 125; district++) {
      districts.push(district);
    }
    return districts;
  }

  sortedDistrictResponses(): any[] {
    return this.districtResponses.sort((a, b) => a.key - b.key);
  }

  
}
