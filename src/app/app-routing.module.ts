import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { PartiestableComponent } from './partiestable/partiestable.component';
import { ElectedComponent } from './elected/elected.component';
import { DistrictCandidatesComponent } from './districtcandidates/districtcandidates.component';
import { VotesComponent } from './votes/votes.component';


const routes: Routes = [

  
  { path: 'parties-table', component: PartiestableComponent }, // Add this line
  { path: 'elected', component: ElectedComponent },
  { path: 'candidates', component: DistrictCandidatesComponent },
  { path: 'candidates/:district', component: DistrictCandidatesComponent },
  { path: 'votes', component: VotesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

