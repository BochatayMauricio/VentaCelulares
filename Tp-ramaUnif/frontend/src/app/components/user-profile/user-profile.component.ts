
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/services/customer.service';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  showData: boolean = false;
  pass: boolean = false;
  mail: boolean = false;
  user: any;
  newEmail: any = '';
  newPassword: any = '';
  newPassword2: any = '';
  userM: any = {
    email: '',
    password: ''
  };
  listOfSales: any;
  modalRef?: BsModalRef;
  constructor(private customerService: CustomerService,
    private userService: UserService,
    private errorService: ErrorService,
    private toastr: ToastrService,) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.userM.email = this.user.email;
    this.userM.password = this.user.password
    console.log(this.user.email, this.user.password)
  }

  ngOnInit(): void {

  }


  userModifier() {

    if (this.newPassword == '' && this.newPassword2 == '' && this.newEmail == '') {
      alert('Todos los campos son obligatorios')
    } else {
      if (this.newEmail != '') {
        this.userM.email = this.newEmail;

        this.customerService.updateCustomers(this.user.dni, this.userM).subscribe({
          next: (res: any) => {
            this.user.email = this.userM.email;
            localStorage.setItem('user', JSON.stringify(this.user));
            this.toastr.success(`Mail Modificado a: ${this.userM.email}`);

          }, error: (e: HttpErrorResponse) => {
            this.errorService.msjError(e);
          }
        });

      } else {
        if (this.newPassword === this.newPassword2) {
          this.userM.password = this.newPassword;
          this.customerService.updateCustomers(this.user.dni, this.userM).subscribe({
            next: () => {
              this.toastr.success(`Contraseña modificada`);
            }
          });
        } else {
          this.toastr.error(`Las contraseñas deben Coincidir`)
        }
      }
      this.newPassword = '';
      this.newPassword2 = '';
      this.newEmail = '';
    }


  }

}
