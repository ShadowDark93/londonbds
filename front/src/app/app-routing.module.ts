import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/portafolio/detail/detail.component';
import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent,
  },
  {
    path: ':id', component: DetailComponent
  },
  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
