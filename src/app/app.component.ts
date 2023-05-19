import { Component } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { DistrictCandidatesComponent } from './districtcandidates/districtcandidates.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}
  districtResponses: any[] = [];
  title = 'myapp';


  isCandidatesRouteActive(): boolean {
    return this.router.url.includes('/candidates');
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
