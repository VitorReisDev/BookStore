import { CartService } from './../../services/cart.service';
import { BookModel, FakeDataService } from './../../services/fake-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  bookList: BookModel[] = [];

  filteredBookList: BookModel[] = [];

  addedBooksToCart: BookModel[] = [];

  query = ''

  banners = [
    '../../../assets/img/slides/slide01.png',
    '../../../assets/img/slides/slide02.png',
    '../../../assets/img/slides/slide03.png',
    '../../../assets/img/slides/slide04.jpg',
    '../../../assets/img/slides/slide05.jpg',
  ]

  currentBanner = '../../../assets/img/slides/slide01.png'

  constructor(
    private fakeDataService: FakeDataService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookList = this.fakeDataService.getAllBooks();
    this.filteredBookList = this.bookList
    const parsedLocalStorageItems = JSON.parse(
      localStorage.getItem('addedBooksToCart') as string
    );
    this.addedBooksToCart = parsedLocalStorageItems;
    console.log(this.addedBooksToCart);
    this.setDynamicBanner()
  }

  setDynamicBanner() {
    /* const element = document.getElementById('banner');
    element?.classList.add('fade-in'); */
    setInterval(() => {
      const currentIndex = this.banners.indexOf(this.currentBanner)
      if (currentIndex === this.banners.length - 1) {
        this.currentBanner = this.banners[0]
      } else {
        this.currentBanner = this.banners[currentIndex + 1]
      }
/*       element?.classList.add('fade-in');
      element?.classList.add('fade-out'); */
      console.log(currentIndex, this.currentBanner)
    }, 5000)
  }

  addBookToCart(book: BookModel): void {
    alert(`Livro ${book.titulo} adicionado ao carrinho com sucesso!`)
    // Procura no array de livros no carrinho se o livro já foi adicionado
    const retrievedBook = this.addedBooksToCart.filter(
      (item) => item.id === book.id
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
        ...book,
        quantidade: 1,
      });
      this.cartService.increaseAddedBooksToCartQuantity();
    }

    // Atualiza os livros adicionados no storage com os novos livros adicionados
    console.log(this.addedBooksToCart);
    const parsedAddedCartBooks = JSON.stringify(this.addedBooksToCart);
    localStorage.setItem('addedBooksToCart', parsedAddedCartBooks);
  }

  goToBookDetailsPage(id: number): Promise<boolean> {
    return this.router.navigate([`book-details/${id}`])
  }

  filterBooks() {
    this.filteredBookList = this.bookList.filter((book) => book.titulo.toLowerCase().includes(this.query.toLowerCase()))
    console.log(this.filteredBookList, this.query.toLowerCase())
  }
}
