class Book {
    constructor(title, auth, genre) {
      this.title = title;
      this.auth = auth;
      this.genre = genre;
    }
  }
  
  class Shelf {
    constructor() {
      this.books = [];
    }
    add(book) {
      this.books.push(book);
    }
    find(title) {}
    remove(book) {}
  }
  
  class Bookcase {
    constructor(size) {
      this.shelves = new Array(size).fill(new Shelf());
    }
  }
  
  let bookcase = new Bookcase(3);
  
  console.log(bookcase);
  