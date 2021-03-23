export class Product {
  id?: number;
  productName: string;
  quantity: number;
  dateAdmission: Date;
  idUser: number;

  constructor(
    id: number,
    productName: string,
    quantity: number,
    dateAdmission: Date,
    idUser: number
  ){
    this.id = id;
    this.productName = productName;
    this.quantity = quantity;
    this.dateAdmission = dateAdmission;
    this.idUser = idUser;
  }
}
