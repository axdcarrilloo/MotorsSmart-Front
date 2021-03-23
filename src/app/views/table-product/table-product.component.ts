import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product';
import { ProductDto } from './../../models/dto/productDto';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DialogSuccessfulComponent } from 'src/app/dialog/dialog-successful/dialog-successful.component';
import { DialogWaringComponent } from 'src/app/dialog/dialog-waring/dialog-waring.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss']
})
export class TableProductComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  resultProducts: ProductDto[];

  constructor(private productService: ProductServiceService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadTable();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  loadTable(): void{
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    // tslint:disable-next-line: deprecation
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.resultProducts = this.convertDto(data);
      this.dtTrigger.next();
    });
  }

  convertDto(products: Product[]): ProductDto[]{
    const pdtDtos = [];
    products.forEach(pro => {
      const proDto = this.productService.convertToDto(pro);
      pdtDtos.push(proDto);
    });
    return pdtDtos;
  }

  delete(playload, i): void{
    console.log('Eliminando producto ' + playload.productName);
    // tslint:disable-next-line: deprecation
    this.productService.deleteProduct(playload.productName).subscribe((data: number) => {
      if (data !== 0){
        this.showSuccessfulDialogue();
        this.resultProducts.splice(i);
      }else{
        this.showWaringDialogue();
      }
    });
  }

  showSuccessfulDialogue(): void{
    this.dialog.open(
      DialogSuccessfulComponent, {data: 'Eliminacion exitosa....!'
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
      DialogWaringComponent, {data: 'Fallo la eliminacion....!'
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
