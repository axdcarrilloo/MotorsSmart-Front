export class Product {
  productName: string;
  quantity: number;
  dateAdmission: Date;
  idUser: number;

  constructor(
    productName: string,
    quantity: number,
    dateAdmission: Date,
    idUser: number
  ){
    this.productName = productName;
    this.quantity = quantity;
    this.dateAdmission = dateAdmission;
    this.idUser = idUser;
  }
}
