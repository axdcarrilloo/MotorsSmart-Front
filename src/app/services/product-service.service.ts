import { ProductDto } from './../models/dto/productDto';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  deleteProduct(playload): Observable<number>{
    return this.http.delete<number>(environment.BASE + '/products/delete/' + playload);
  }

  convertToDto(product: Product): ProductDto{
    const dateMain = moment(product.dateAdmission);
    dateMain.format('YYYY-MM-DD');
    return new ProductDto(product.productName, product.quantity, dateMain.toString(), product.idUser);
  }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(environment.BASE + '/products/getAll/');
  }

  registerProduct(playload): Observable<number>{
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    // header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<number>(environment.BASE + '/products/register', playload, options);
  }

  findProductByName(name: string): Observable<Product>{
    return this.http.get<Product>(environment.BASE + '/products/getByName/' + name);
  }

}
