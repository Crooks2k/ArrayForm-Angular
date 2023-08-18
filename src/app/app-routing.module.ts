import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayFormComponent } from './pages/array-form/array-form.component';

const routes: Routes = [
  {path: "", component: ArrayFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
