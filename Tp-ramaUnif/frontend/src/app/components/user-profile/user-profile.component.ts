
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerService } from 'src/app/services/customer.service';



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
  listOfSales: any;
  modalRef?: BsModalRef;
  constructor(private customerService: CustomerService) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }

  ngOnInit(): void {

  }



}
