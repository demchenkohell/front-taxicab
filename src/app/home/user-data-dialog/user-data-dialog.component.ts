import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export interface AccountDialogData {
  username: string,
  phoneNumber: string
}

@Component({
  selector: 'app-user-data-dialog',
  templateUrl: './user-data-dialog.component.html',
  styleUrls: ['./user-data-dialog.component.css']
})
export class UserDataDialogComponent {
  isHide = true;

  constructor(
    public dialogRef: MatDialogRef<UserDataDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AccountDialogData,
    private fb: FormBuilder
  ) {
    this.formAcc = fb.group({
      'phoneNumber': ['',
        [Validators.required,
          Validators.minLength(10),
          Validators.pattern(/^[0-9]\d*$/)]
      ],
      'password': ['', Validators.required],
      'username': ['', Validators.required]
    })
  }

  formAcc = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    phoneNumber: new FormControl()
  })

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveAccountData(): void {

  }

  getErrorMessage(field: string) {
    return this.formAcc.get(`${field}`)?.invalid ? 'Wrong input format' : '';
  }

}
