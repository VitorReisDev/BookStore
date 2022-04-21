import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { BookModel } from './../../services/fake-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {

  addedBooksToCart: BookModel[] = [];

  totalOfBooksValue = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    const parsedLocalStorageItems = JSON.parse(
      localStorage.getItem('addedBooksToCart') as string
    );
    this.addedBooksToCart = parsedLocalStorageItems;
    console.log(this.addedBooksToCart);
    this.updateTotalOfBooksValue()
  }

  delBookToCart(index: number) {
    const confirmCancel = confirm(`Deseja realmente remover ${this.addedBooksToCart[index].titulo} do carrinho?`)
    if (confirmCancel) {
      this.addedBooksToCart.splice(index, 1);
      console.log(this.addedBooksToCart);
      this.updateAddedBooksInStorage(this.addedBooksToCart);
      this.cartService.decreaseAddedBooksToCartQuantity();
    }
  }

  decreaseItemQuantity(book: BookModel, index: number): void {
    if (book.quantidade === 1) {
      return this.delBookToCart(index);
    }
    const updatedBook = {
      ...book,
      quantidade: book.quantidade - 1
    }
    this.addedBooksToCart.splice(index, 1, updatedBook)
    this.updateAddedBooksInStorage(this.addedBooksToCart);
  }

  increaseItemQuantity(book: BookModel, index: number): void {
    const updatedBook = {
      ...book,
      quantidade: book.quantidade + 1
    }
    this.addedBooksToCart.splice(index, 1, updatedBook)
    this.updateAddedBooksInStorage(this.addedBooksToCart);
  }

  updateAddedBooksInStorage(updatedBooks: BookModel[]): void {
    const parsedAddedCartBooks = JSON.stringify(updatedBooks);
    localStorage.setItem('addedBooksToCart', parsedAddedCartBooks);
    this.updateTotalOfBooksValue()
  }

  updateTotalOfBooksValue(): void {
    let totalOfBooksValue = 0
    this.addedBooksToCart.forEach((book) => {
      const totalBookValue = book.quantidade * book.preco
      totalOfBooksValue = totalOfBooksValue + totalBookValue
    })
    this.totalOfBooksValue = totalOfBooksValue
  }

  atualizarOValorTotalDoLivro(event: any, book: BookModel, index: number) {
    const updatedBookQuantity = event.target.value
    if (updatedBookQuantity === '0') {
      return this.delBookToCart(index)
    }
    const updatedBook = {
      ...book,
      quantidade: updatedBookQuantity
    }
    this.addedBooksToCart.splice(index, 1, updatedBook)
    this.updateAddedBooksInStorage(this.addedBooksToCart);
  }

  goToBookDetailsPage(id: number): Promise<boolean> {
    return this.router.navigate([`/book-details/${id}`])
  }
}
