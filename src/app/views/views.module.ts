
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register-product/register.component';
import { ConsultationComponent } from './consultation-product/consultation.component';
import { TableProductComponent } from './table-product/table-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { RegisterChargeComponent } from './register-charge/register-charge.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent, ConsultationComponent, TableProductComponent, RegisterChargeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule
  ]
})
export class ViewsModule { }
