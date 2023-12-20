
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerService } from 'src/app/services/customer.service';
import { SalesService } from 'src/app/services/sales.service';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-purchases.component.html',
  styleUrls: ['./user-purchases.component.css']
})
export class UserPurchasesComponent implements OnInit {
  user: any;
  listOfSales: any;
  modalRef?: BsModalRef;
  constructor(
    private salesService: SalesService,
    private modalService: BsModalService) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);

  }

  ngOnInit(): void {
    console.log(this.user.id);
    this.salesService.getSalesUser(this.user.id).subscribe((data) => {
      this.listOfSales = data,
        console.log(data);
      console.log(this.listOfSales);
    })


  }

  productInfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
