export class ProductDto {
  productName: string;
  quantity: number;
  dateAdmission: string;
  idUser: number;

  constructor(
    productName: string,
    quantity: number,
    dateAdmission: string,
    idUser: number
  ){
    this.productName = productName;
    this.quantity = quantity;
    this.dateAdmission = dateAdmission;
    this.idUser = idUser;
  }
}
