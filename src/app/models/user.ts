export class User {
  id: number;
  name: string;
  age: number;
  idCharge: number;
  dateAdmission: Date;

  constructor(id: number, name: string, age: number, idCharge: number, dateAdmission: Date){
  this.id = id;
  this.name = name;
  this.age = age;
  this.idCharge = idCharge;
  this.dateAdmission = dateAdmission;
  }
}
