import { DialogWaringComponent } from './../../dialog/dialog-waring/dialog-waring.component';
import { DialogSuccessfulComponent } from './../../dialog/dialog-successful/dialog-successful.component';
import { User } from './../../models/user';

import { UserServiceService } from './../../services/user-service.service';

import { ProductServiceService } from './../../services/product-service.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as moment from 'moment';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  inputProduct: FormGroup;
  usersLoaded: User[];

  constructor(
    private fb: FormBuilder,
    private productService: ProductServiceService,
    private userService: UserServiceService,
    public dialog: MatDialog) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  private buildForm(): void {
    this.inputProduct = this.fb.group({
      productName: ['',  [Validators.required]],
      quantity: ['', [Validators.required]],
      dateAdmission: [this.getCurrentDate(), [Validators.required]],
      idUser: ['1', [Validators.required]]
    });
  }

  save(event: Event): void {
    event.preventDefault();
    if (this.inputProduct.valid) {
      // tslint:disable-next-line: deprecation
      this.productService.registerProduct(this.inputProduct.value).subscribe((result: number) => {
        if (result !== 0){
          this.showSuccessfulDialogue();
        }else{
          this.showWaringDialogue();
        }
        // this.inputProduct.reset();
      });
    }else{
      this.inputProduct.markAllAsTouched();
    }
  }

  loadUsers(): void{
    // tslint:disable-next-line: deprecation
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.usersLoaded = data;
    });
  }

  getCurrentDate(): string{
    const now = moment(); // add this 2 of 4
    return now.format();
  }

  showSuccessfulDialogue(): void{
    this.dialog.open(
      DialogSuccessfulComponent, {data: 'Producto registrado con exito....!'
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

  showWaringDialogue(): void{
    this.dialog.open(
      DialogWaringComponent, {data: 'El producto que desea registrar, ya existe....!'
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

}
