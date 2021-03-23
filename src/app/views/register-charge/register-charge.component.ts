import { ChargeServiceService } from './../../services/charge-service.service';
import { ChargeDto } from './../../models/dto/charge-dto';
import { Charge } from './../../models/charge';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    this.dialog.open(
      DialogSuccessfulComponent, {data: 'Cargo registrado con exito....!'
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
      DialogWaringComponent, {data: 'El cargo que desea registrar, ya existe....!'
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
