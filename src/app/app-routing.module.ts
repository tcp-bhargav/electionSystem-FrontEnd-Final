import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PartiestableComponent } from './partiestable/partiestable.component';
import { ElectedComponent } from './elected/elected.component';
import { TotalsbyridingComponent } from './totalsbyriding/totalsbyriding.component';


const routes: Routes = [

  { path: 'parties-table', component: PartiestableComponent }, // Add this line
  { path: 'elected', component: ElectedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
