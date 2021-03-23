import { RegisterChargeComponent } from './views/register-charge/register-charge.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultationComponent } from './views/consultation-product/consultation.component';
import { RegisterComponent } from './views/register-product/register.component';

const routes: Routes = [
  { path: 'Register', component: RegisterComponent },
  { path: 'Consultation', component: ConsultationComponent },
  { path: 'RegisterCharge', component: RegisterChargeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
