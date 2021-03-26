import { ProductDto } from './../../models/dto/productDto';
import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogSuccessfulComponent } from '../dialog-successful/dialog-successful.component';
import { DialogWaringComponent } from '../dialog-waring/dialog-waring.component';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  productName: string;
  quantity: number;
  productMain: Product;

  constructor(
    public dialog: MatDialogRef<UpdateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any[],
    public productService: ProductServiceService
    ) { }

  ngOnInit(): void {
    this.productMain = this.data[2];
    this.productName = this.productMain.productName;
    this.quantity = this.productMain.quantity;
  }

  update(event: Event): void{
    let playload = new ProductDto(this.productName, this.quantity,
      null, this.productMain.idUser);
    this.productService.updateProduct(playload).subscribe((result: number) => {
      if(result !== 0){
          console.log("Se actualizo");
      }else{
        console.log("No se actualizo");
      }
    });
    }

}

