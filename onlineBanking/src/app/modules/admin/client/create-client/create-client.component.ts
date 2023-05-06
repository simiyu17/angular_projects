import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {

  createClientForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder, private clientService: ClientService, private router: Router, private dialogRef: MatDialogRef<CreateClientComponent>, private gs: GlobalService) {
    this.createNewClientForm()
  }

  createNewClientForm(): void {
    this.createClientForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      clientGovernmentId: [null, Validators.required],
      cellPhone: [null, Validators.required],
      emailAddress: [null, Validators.required]
    });
  }

  onSubmitNewClient(): void {
    if (this.createClientForm.valid) {
      this.clientService.createClient(this.createClientForm.value)
        .subscribe({
          next: (response) => {
            this.gs.openSnackBar("Done sucessfully!!", "Dismiss");
            this.dialogRef.close();
          },
          error: (error) => {
            if (error.error.message) {
              alert(error.error.message);
            }
            this.gs.openSnackBar(`An error occured ${error.error}`, "Dismiss");
            console.log(error)
          }
        });
    }
  }
}
