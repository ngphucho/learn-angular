import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormatCurrencyService } from '../services/format-currency.service';
// bootstrap modal
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bai-tap7',
  templateUrl: './bai-tap7.component.html',
  styleUrls: ['./bai-tap7.component.scss'],
})
export class BaiTap7Component implements OnInit {
  // @ViewChild(BaiTap7Component) baiTap7!: BaiTap7Component;
  // @ViewChild('content') content: ElementRef;

  editInfo = { maSP: -1, tenSP: '', gia: -1 };
  products = [
    { maSP: 1, tenSP: 'Sony XZ', gia: 1000 },
    { maSP: 2, tenSP: 'Sony XZ2', gia: 1000 },
    { maSP: 3, tenSP: 'HTC U Ultra', gia: 1000 },
    { maSP: 4, tenSP: 'HTC U12 Plus', gia: 1000 },
    { maSP: 5, tenSP: 'Iphone XS MAX', gia: 1000 },
    { maSP: 6, tenSP: 'Iphone XR', gia: 1000 },
    { maSP: 7, tenSP: 'Xiaomi Mi Note 3', gia: 9900 },
    { maSP: 8, tenSP: 'Xiaomi Mi 8', gia: 1000 },
    { maSP: 9, tenSP: 'Galaxy Note 9', gia: 1000 },
    { maSP: 10, tenSP: 'Galaxy S9 Plus', gia: 1000 },
    { maSP: 11, tenSP: 'Nokia X9', gia: 1000 },
  ];
  p: number = 1;
  pageSize: number = 3;
  addProduct(maSP: number, tenSP: string, gia: number): void {
    if (this.products.findIndex((product) => product.maSP === maSP) === -1) {
      this.products.push({ maSP, tenSP, gia });
    } else {
      alert(`Mã sản phẩm ${maSP} đã tồn tại`);
    }
  }

  deleteProduct(maSP: number): void {
    let index = this.products.findIndex((product) => product.maSP === maSP);
    if (index !== -1) {
      this.products.splice(index, 1);
      alert(`Mã sản phẩm ${maSP} đã được xóa thành công`);
    }
  }
  editProduct(): void {
    let index = this.products.findIndex(
      (product) => product.maSP === this.editInfo.maSP
    );
    if (index !== -1) {
      this.products[index].tenSP = this.editInfo.tenSP;
      this.products[index].gia = this.editInfo.gia;
      this.modalService.dismissAll('close click');
    }
  }

  //bootstrap function
  closeResult = '';
  open(content: any, maSP: number, tenSP: string, gia: number) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    this.editInfo = { maSP, tenSP, gia };
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  constructor(
    public formatCurrencySer: FormatCurrencyService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {}
}
