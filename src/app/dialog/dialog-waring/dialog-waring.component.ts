import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-waring',
  templateUrl: './dialog-waring.component.html',
  styleUrls: ['./dialog-waring.component.scss']
})
export class DialogWaringComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<DialogWaringComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: string
  ) { }

  ngOnInit(): void {
  }

  confirmed(): void{
    this.dialog.close(true);
  }

}
