import { ViewsModule } from './views/views.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { DialogSuccessfulComponent } from './dialog/dialog-successful/dialog-successful.component';
import { DialogWaringComponent } from './dialog/dialog-waring/dialog-waring.component';
import { UpdateProductComponent } from './dialog/update-product/update-product.component';

@NgModule({
  declarations: [
    AppComponent, DialogSuccessfulComponent, DialogWaringComponent, UpdateProductComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatMenuModule, MatButtonToggleModule,
    HttpClientModule, MatDialogModule, MatButtonModule, MatInputModule, ViewsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogSuccessfulComponent
  ]
})
export class AppModule { }
