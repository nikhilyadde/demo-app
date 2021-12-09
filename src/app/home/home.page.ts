import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from '../cart.service';
import { CartPage } from '../cart/cart.page';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
 
  cart = [];
  items = [];
  cartItemCount: BehaviorSubject<number>;
 
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
 
  constructor(private router: Router, private cartService: CartService , private modalCtrl: ModalController) { }
 
  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
 
  addToCart(product) {
    this.cartService.addProduct(product);
  }
 
  async openCart() {
    
 
    let modal = await this.modalCtrl.create({
      component: CartPage,
      cssClass: 'cart'
    });
    
    modal.present();
  }
}