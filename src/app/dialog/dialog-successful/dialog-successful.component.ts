import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-successful',
  templateUrl: './dialog-successful.component.html',
  styleUrls: ['./dialog-successful.component.scss']
})
export class DialogSuccessfulComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<DialogSuccessfulComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string
  ) { }

  ngOnInit(): void {
  }

  confirmed(): void{
    this.dialog.close(true);
  }

}
