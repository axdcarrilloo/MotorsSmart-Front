import { ChargeServiceService } from './../../services/charge-service.service';
import { ChargeDto } from './../../models/dto/charge-dto';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogSuccessfulComponent } from 'src/app/dialog/dialog-successful/dialog-successful.component';
import { DialogWaringComponent } from 'src/app/dialog/dialog-waring/dialog-waring.component';

@Component({
  selector: 'app-register-charge',
  templateUrl: './register-charge.component.html',
  styleUrls: ['./register-charge.component.scss']
})
export class RegisterChargeComponent implements OnInit {

  name: string;

  constructor(
    private chargeServie: ChargeServiceService,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  save(event: Event): void{
    event.preventDefault();
    const charge = new ChargeDto(this.name);
    // tslint:disable-next-line: deprecation
    this.chargeServie.registerCharge(charge).subscribe((result: number) => {
      if (result !== 0){
        this.showSuccessfulDialogue();
      }else{
        this.showWaringDialogue();
      }
      this.name = '';
    });
  }

  showSuccessfulDialogue(): void{
    const messages = ['Registro exitoso','El producto se registro satisfactoriamente'];
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
    const messages = ['Error de registro','El cargo que desea registrar, ya existe'];
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

}
