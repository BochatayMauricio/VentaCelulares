
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerService } from 'src/app/services/customer.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  listOfSales: any;
  modalRef?: BsModalRef;
  constructor(private customerService: CustomerService,
    private modalService: BsModalService) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.customerService.getSalesUser(this.user.dni).subscribe((data) => {
      this.listOfSales = data
    }))
  }

  ngOnInit(): void {

  }

  productInfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
