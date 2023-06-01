import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodListComponent } from './food-list.component';

const routes: Routes = [
  {
    path: '',
    component: FoodListComponent,
    data: {
      title: `FoodList`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodListRoutingModule {
}
