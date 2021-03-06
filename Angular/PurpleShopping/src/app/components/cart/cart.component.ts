import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts = [];
  cartTotal = 0;

  constructor(private messengerservice: MessengerService) {}

  ngOnInit(): void {
    this.messengerservice.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product) {
    const productExits = this.isAddedProductToCart(product.id);

    if(!productExits)
    {
      this.carts.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        image: product.productImages[0].url,
        price: product.feature.price,
      });
    }

    this.cartTotal = this.cartTotal + product.feature.price;
  }

  deleteProductToCart(product) {
    const index = this.carts.indexOf(product);

    if (index > -1) {
      this.carts.splice(index, 1);
      this.cartTotal = this.cartTotal - product.price * product.qty;
    }

  }

  isAddedProductToCart(productId: number): boolean {
    for (let i in this.carts) {

      if (this.carts[i].productId == productId) {
        this.carts[i].qty++;
        return true;
      }

    }
    return false;
  }

  modalOpenCart() {
    var elm = document.getElementById('modalCart');
    if (elm.style.visibility == 'visible')
      elm.style.visibility = 'hidden';
    else 
      elm.style.visibility = 'visible';
  }
}
