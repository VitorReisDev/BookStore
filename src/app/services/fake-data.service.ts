import { Injectable } from '@angular/core';

export interface BookModel {
  id: number,
  imagem: string,
  titulo: string,
  preco: number,
  quantidade: number,
  autor: string,
  descricao: string
}

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  arrayDeLivros: BookModel[] = [
    {
      id: 1,
      imagem: '../../../assets/img/cards/naruto.jpg',
      titulo: 'Naruto Classico - Vol. 1',
      preco: 20.00,
      quantidade: 0,
      autor: 'Por Masashi Kishimoto  (Autor)',
      descricao: ' Esta é a Vila Oculta da Folha. Naruto é o garoto mais problemático da Academia Ninja e está sempre aprontando todas!! Seu grande sonho é se tornar um shinobi digno do título de Hokage, o mais forte e respeitado ninja da vila, e superar todos os Hokages anteriores...!! Mas um segredo em torno de seu nascimento o mantém distante tanto de seu sonho quanto das pessoas...!! Não perca mais uma chance de acompanhar a empolgante jornada de Naruto, o garoto ninja que conquistou o mundo inteiro, nesta nova edição de luxo com pôsteres, freetalks exclusivos do autor e muito mais!'
    },

    {
      id: 2,
      imagem: '../../../assets/img/cards/solo leveling.jpg',
      titulo: 'Solo Leveling - Vol. 3',
      preco: 35.00,
      quantidade: 0,
      autor: 'Por Chu-Gong  (Autor)',
      descricao: '10 anos atrás, depois que o “Portão” que conectou o mundo real com o mundo dos monstros foi aberto, algumas pessoas comuns receberam o poder de caçar monstros dentro do Portão. Eles são conhecidos como "Caçadores". No entanto, nem todos os caçadores são poderosos. Meu nome é Sung Jin-Woo, um caçador de Rank E. Eu sou alguém que tem que arriscar sua vida no mais baixo dos calabouços, o "mundo mais fraco". Não tendo nenhuma habilidade para mostrar, eu mal ganhei o dinheiro necessário para minha sobrevivência lutando em masmorras de baixo nível... pelo menos até eu encontrar uma masmorra escondida com a dificuldade mais difícil dentro das masmorras Rank D! No final, quando eu estava aceitando a morte, de repente eu recebi um poder estranho, um registro de busca que só eu podia ver, um segredo para subir de nível que só eu sei! Se eu treinasse de acordo com minhas missões e monstros caçados, meu nível subiria.'

    },

    {
      id: 3,
      imagem: '../../../assets/img/cards/Kimetsu.png',
      titulo: 'Kimetsu no Yaiba - Vol. 10',
      preco: 22.00,
      quantidade: 0,
      autor: ' por Koyoharu Gotouge  (Autor, Ilustrador)',
      descricao: 'A Oiran Warabihime é a oni que controla todo o distrito das flores! Ao se juntar à parte de seu corpo que estava dividida, ela fica ainda mais poderosa e ataca Tanjirou com todas as suas forças!! Nosso herói recorre à Hinokami Kagura, mas parece que está prestes a exceder seu limite!! Nezuko e Uzui aparecem para lutar no lugar de Tanjirou, mas a batalha toma rumos inesperados!!'
    },

    {
      id: 4,
      imagem: '../../../assets/img/cards/SnK.png',
      titulo: 'Shingeki no Kyojin - Vol. 30',
      preco: 28.00,
      quantidade: 0,
      autor: 'por Hajime Isayama  (Autor)',
      descricao: 'O plano confiado a Eren por Zeke foi a eutanásia do povo eldiano. O contato físico entre Eren e Zeke, respectivamente o detentor do Titã Original e o herdeiro do sangue real, é a chave para o seu sucesso. Zeke, que se encontrava livre do cerco de Levi e da divisão de reconhecimento, dá de cara com o exército marleyano. Conseguirão Eren e Zeke entrar em contato...?'
    },

    {
      id: 5,
      imagem: '../../../assets/img/cards/Jujutsu.jpg',
      titulo: 'Jujutsu Kaisen - Vol. 8',
      preco: 25.00,
      quantidade: 0,
      autor: 'por Gege Akutami  (Autor, Ilustrador)',
      descricao: 'Itadori e seu grupo recolhem um dos dedos de Sukuna após abater Kechizu e Eso, dois fetos encarnados das "Nove Pinturas da Morte". Como resultado, eles recebem a recomendação para serem promovidos a feiticeiros de nível 1. Quais são as intenções de Gojou, que orquestra tudo nos bastidores? A história volta ao passado, para narrar o incidente com Gojou e Getou quando eram estudantes do 2º ano na Escola Técnica de Jujutsu.'
    },

    {
      id: 6,
      imagem: '../../../assets/img/cards/one-piece.jpg',
      titulo: 'One Piece - Vol. 98',
      preco: 10.00,
      quantidade: 0,
      autor: 'por Eiichiro Oda  (Autor)',
      descricao: 'Durante a batalha decisiva em Onigashima, que esquenta cada vez mais, Yamato, a filha de Kaido, surge diante de Luffy querendo lutar ao seu lado! Enquanto isso, Kaido revela em detalhes o "Plano da Nova Onigashima" e, junto de Big Mom, está prestes a mergulhar o mundo inteiro em caos!!'
    },

    {
      id: 7,
      imagem: '../../../assets/img/cards/blue-lock.jpg',
      titulo: 'Blue Lock - Vol. 3',
      preco: 27.00,
      quantidade: 0,
      autor: 'por Yusuke Nomura (Autor, Artista)',
      descricao: 'Após uma derrota desastrosa na Copa do Mundo de 2018, a seleção japonesa luta para se reagrupar. Mas o que está faltando? Um absoluto Ace Striker, que pode guiá-los para a vitória. A Federação de Futebol está empenhada em criar um atacante que tem fome de gols e sede de vitória, e que pode ser o instrumento decisivo para reverter uma partida perdida... e para isso, eles reuniram 300 dos melhores e melhores jogadores jovens mais brilhantes. Quem emergirá para liderar a equipe... e eles serão capazes de superar os músculos e o ego de todos que estiverem em seu caminho?'
    },

    {
      id: 8,
      imagem: '../../../assets/img/cards/Boku-no-Hero-Academia.jpg',
      titulo: 'Boku no Hero - Vol. 26',
      preco: 25.00,
      quantidade: 0,
      autor: 'por Kohei Horikoshi  (Autor)',
      descricao: 'Midoriya herda o superpoder do maior herói do mundo, mas a grandeza não será fácil. <br>Como seria o mundo se 80 por cento da população manifestasse superpoderes chamados "peculiaridades"? Heróis e vilões estariam lutando em todos os lugares! Ser um herói significaria aprender a usar seu poder, mas onde você iria estudar? A Academia de Heróis, é claro! Mas o que você faria se fosse um dos 20% que nasceram Quirkless?',

    },

    {
      id: 9,
      imagem: '../../../assets/img/cards/dr-stone.jpg',
      titulo: 'Dr.Stone - Vol. 1',
      preco: 18.00,
      quantidade: 0,
      autor: 'por Riichiro Inagaki  (Autor)',
      descricao: 'Em um instante, todos os humanos do mundo viraram pedra. Este acontecimento misterioso envolveu o estudante Taiju e, depois de milhares de anos, ele e o seu amigo Senku despertam e decidem reconstruir a civilização do zero! E assim começa uma grande e única aventura de sobrevivência num mundo de ficção científica!'
    },
  ];

  constructor() {}

  getAllBooks(): BookModel[] {
    return this.arrayDeLivros;
  }

  getBook(id: number): BookModel {
    return this.arrayDeLivros.filter((book) => book.id === id)[0]
  }
}
