import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { DetailsComponent } from '../components/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'details/:id',
    component: DetailsComponent ,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
