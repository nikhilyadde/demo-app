import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private data = [
    {
      category: 'Pot',
      expanded: true,
      products: [
        { id: 0, name: 'Ficus Compactata', price: '299', amount:0,image:'/assets/pot.jpg'},
        { id: 1, name: 'MoneyPlant', price: '399', amount:0 },
        { id: 2, name: 'Bamboo', price: '499', amount:0 },
        { id: 3, name: 'Hahnii Plant', price: '250', amount:0 },
        { id: 4, name: 'Peace Lily',price: '199', amount:0}
      ]
    },
    {
      category: 'Indoor Plant',
      products: [
        { id: 4, name: 'Mac & Cheese', price: '8', amount:0 },
        { id: 5, name: 'Bolognese', price: '6' , amount:0}
      ]
    },
    {
      category: 'Air Purifier',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8' , amount:0},
        { id: 7, name: 'Basic', price: '5' , amount:0},
        { id: 8, name: 'Ceaser', price: '9' , amount:0}
      ]
    },
    {
      category: 'Fruit Plant',
      products: [
        { id: 6, name: 'Ham & Egg', price: '8', amount:0 },
        { id: 7, name: 'Basic', price: '5' , amount:0},
        { id: 8, name: 'Ceaser', price: '9' , amount:0}
      ]
    }
  ];
 
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
 
  constructor() { }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
//  addProduct(product) {
  //  this.cart.push(product);
 // }
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}