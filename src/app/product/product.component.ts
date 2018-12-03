import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Product Component';
  productName = '';
  isDisabled = true;
  products = [
    'Atari 800XL',
    'Nintendo DX'
  ];

  constructor() {
    setTimeout(() => {
      this.productName = '';
      this.isDisabled = false;
      console.log(this.productName);
    }, 3000);
  }

  onAddProduct() {
    this.products.push(this.productName);
    this.productName = '';
    console.log(this.productName);
  }

  ngOnInit() {
  }

}
