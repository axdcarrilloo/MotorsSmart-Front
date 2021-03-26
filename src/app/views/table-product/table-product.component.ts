import { UpdateProductComponent } from './../../dialog/update-product/update-product.component';
import { UserServiceService } from './../../services/user-service.service';
import { ProductServiceService } from './../../services/product-service.service';
import { Product } from './../../models/product';
import { ProductDto } from './../../models/dto/productDto';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogSuccessfulComponent } from 'src/app/dialog/dialog-successful/dialog-successful.component';
import { DialogWaringComponent } from 'src/app/dialog/dialog-waring/dialog-waring.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-table-product',
  templateUrl: './table-product.component.html',
  styleUrls: ['./table-product.component.scss']
})
export class TableProductComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject<any>();
  resultProducts: ProductDto[];
  usersLoaded: User[];
  idUserSelected: number;
  contrainsSearch: string;

  constructor(
    private productService: ProductServiceService,
    public dialog: MatDialog,
    private userService: UserServiceService
    ) { }

  ngOnInit(): void {
    this.loadUsers();
    this.idUserSelected = 1;
    this.loadTable();
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  loadUsers(): void{
    // tslint:disable-next-line: deprecation
    this.userService.getAllUsers().subscribe((data: User[]) => {
      this.usersLoaded = data;
    });
  }

  loadTable(): void{
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 50
    };
    // tslint:disable-next-line: deprecation
    this.productService.getAllProducts().subscribe((data: Product[]) => {
      this.resultProducts = this.convertDto(data);
      // this.dtTrigger.next();
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
    // tslint:disable-next-line: deprecation
    this.productService.deleteProduct(playload.productName, this.idUserSelected).subscribe((data: number) => {
      if (data !== 0){
        console.log('Eliminando producto ' + playload.productName);
        this.showSuccessfulDialogue();
        this.loadTable();
      }else{
        this.showWaringDialogue();
      }
    });
  }

  showSuccessfulDialogue(): void{
    const messages = ['Producto eliminado','El producto se elimino satisfactoriamente'];
    this.dialog.open(
      DialogSuccessfulComponent, {data: messages
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
    const messages = ['Error de eliminacion','Este usuario no puede eliminar este producto'];
    this.dialog.open(
      DialogWaringComponent, {data: messages,
    // tslint:disable-next-line: deprecation
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

  onKey(event: Event): void{
    const characters = this.contrainsSearch.length;
    if (characters >= 3){
      // tslint:disable-next-line: deprecation
      this.productService.getProductByContrains(this.contrainsSearch).subscribe((data: Product[]) => {
        this.resultProducts = [];
        this.resultProducts = this.convertDto(data);
      });
    }else{
      this.loadTable();
    }
  }

  updateProduct(playload): void{
    playload.idUser = this.idUserSelected;
    const objects = ['Modificando producto','', playload];
    this.dialog.open(
      UpdateProductComponent, {data: objects,
    }).afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed){
        console.log('Se acepto');
      }else{
        console.log('Se rechazo');
      }
    });
  }

}
