import { BookModel } from './fake-data.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  /**
   * Objeto que muda de comportamento em tempo real a medida que é atualizado
   * @memberof CartService
   */
  addedBooksToCartQuantity = new BehaviorSubject(0);

  constructor() {
    this.setManuallyAddedBooksToCartQuantity();
  }

  /**
   * Define manualmente a quantidade de itens no carrinho, baseado na quantidade de livros na storage
   */
  setManuallyAddedBooksToCartQuantity() {
    this.addedBooksToCartQuantity.next(1);
    const addedBooksToCartQuantityFromStorage = this.getAddedBooksToCartFromStorage().length;
    this.addedBooksToCartQuantity.next(addedBooksToCartQuantityFromStorage);
    console.log(this.addedBooksToCartQuantity.getValue())
  }

  /**
   * Pega da storage todos os livros adicionados no carrinho e retorna eles
   * @returns {BookModel[]}
   */
  private getAddedBooksToCartFromStorage(): BookModel[] {
    const parsedLocalStorageItems = JSON.parse(
      localStorage.getItem('addedBooksToCart') as string
    );
    return parsedLocalStorageItems;
  }

  /**
   * Aumenta a quantidade de livros adicionados ao carrinho
   */
  increaseAddedBooksToCartQuantity(): void {
    this.addedBooksToCartQuantity.next(this.addedBooksToCartQuantity.getValue() + 1);
  }

  /**
   * Diminui a quantidade de livros adicionados ao carrinho
   */
  decreaseAddedBooksToCartQuantity(): void {
    this.addedBooksToCartQuantity.next(this.addedBooksToCartQuantity.getValue() - 1);
  }
}
