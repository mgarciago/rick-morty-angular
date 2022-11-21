import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationsDetailComponent } from './creations-detail.component';

const routes: Routes = [
  {
    path: "", component: CreationsDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreationsDetailRoutingModule { }