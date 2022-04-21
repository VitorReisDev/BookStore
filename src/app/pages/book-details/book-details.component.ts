import { BookModel, FakeDataService } from './../../services/fake-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
})
export class BookDetailsComponent implements OnInit {
  selectedBook: BookModel = {
    id: 0,
    imagem: '',
    titulo: '',
    preco: 0,
    quantidade: 0,
    autor: '',
    descricao: '',
  };

  addedBooksToCart: BookModel[] = [];

  constructor(
    private fakeDataService: FakeDataService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.watchIdFromUrl();
    const parsedLocalStorageItems = JSON.parse(
      localStorage.getItem('addedBooksToCart') as string
    );
    this.addedBooksToCart = parsedLocalStorageItems;
    console.log(this.addedBooksToCart);
  }

  watchIdFromUrl(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get('id');
      if (!id) {
        return this.router.navigate(['/']);
      }
      this.selectedBook = this.fakeDataService.getBook(Number(id));
      if (!this.selectedBook) {
        alert('Desculpe, não encontramos nenhum livro correspondente.');
        return this.router.navigate(['/']);
      }
    });
  }

  addBookToCart(): void {
    alert(`Livro ${this.selectedBook.titulo} adicionado ao carrinho com sucesso!`);
    // Procura no array de livros no carrinho se o livro já foi adicionado
    const retrievedBook = this.addedBooksToCart.filter(
      (item) => item.id === this.selectedBook.id
    )[0];
    // Se sim, ele substitui o livro ja adicionado pelo mesmo, porém com sua quantidade aumentada
    // Se não, ele adiciona um novo livro com a quantidade 1 por padrão
    if (retrievedBook) {
      const retrievedBookIndex = this.addedBooksToCart.indexOf(retrievedBook);
      const updatedBook = {
        ...retrievedBook,
        quantidade: retrievedBook.quantidade + 1,
      };
      this.addedBooksToCart.splice(retrievedBookIndex, 1, updatedBook);
    } else {
      this.addedBooksToCart.push({
        ...this.selectedBook,
        quantidade: 1,
      });
      this.cartService.increaseAddedBooksToCartQuantity();
    }

    // Atualiza os livros adicionados no storage com os novos livros adicionados
    console.log(this.addedBooksToCart);
    const parsedAddedCartBooks = JSON.stringify(this.addedBooksToCart);
    localStorage.setItem('addedBooksToCart', parsedAddedCartBooks);
  }
}
