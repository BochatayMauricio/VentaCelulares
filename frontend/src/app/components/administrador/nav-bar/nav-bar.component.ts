import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { Parser } from '@angular/compiler';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

    administrator: any

  constructor(private modalService: BsModalService,
    private router: Router) {

    this.administrator = localStorage.getItem('user');
    this.administrator = JSON.parse(this.administrator)

  }

  modalRef?: BsModalRef;
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  logOut() {
    localStorage.removeItem('token');
    this.modalRef?.hide()
    this.router.navigate(['/login'])
  }

  openPublications(){
    this.router.navigate([`admin/publications/${this.administrator.id}`])
  }
}




