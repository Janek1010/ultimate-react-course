const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// DESTRUCTURING
/*
const books = getBooks();

const book  = getBook(2);

// const title = book.title;
// const author = book.author;
// nie jest to takie fajne bo duzo wywolan byloby potrzebnych z dupensa
// musi byc taka sama nazwa jak w obiekcie, tzn. ze np titles nie  zadziala

const {title,author,pages,publicationDate,genres,hasMovieAdaptation} = book;

//gorsza opcja
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// to wezmie nam pierwszy i drugi element z genres, a ten kropkowy to wezmie nam reszte wartosci z genres
const [primaryGenre,secondaryGenre, ...otherGenres] = genres; 

// REST/SPREAD Operator

const newGenres = ['epic fantasy', ...genres] // tak fajnie bo nam jakby wezmie te elementy z genres da nam tu i mamy tablice genres + 1 nowy
// inaczej bylaby lipa jak np dalbym genres bo bylaby tablica w tablicy 
// to akurat moze byc z przodu lub z tylu to ...genres

// to nizej jakby doda nowe pole moviPoblicationDate oraz nadpisze ilosc pages, jesli natomiast dam pages na poczatku to book nadpisze nasza wartosc
const updatedBook = {
  ...book,
  
  // Adding new property
  moviePublicationDate: '2001-12-19',

  // Overwriting existing property 
  pages: 1210
} // tu tez bez tych kropek mialbym obiekt book + pole a tam to mam wszystkie pola w jednym obiekcie jakby

// TEMPLATE LITERALS
const getYear = (str) => str.split("-")[0];

const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${getYear(publicationDate)}
. The book has${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

// TENARIES INSTEAD OF IF/ELSE STATEMENTS

const pageRange = pages > 1000 ? 'over a thousand' : 'less than 1000';
pageRange;
console.log(`The book has ${pageRange} pages`)

// ARROW FUNCTIONS

// tam wyzej jest

// SHORT-CIRCUTING AND LOGICAL OPERATORS: &&, ||, ??

console.log(true && "Some String")
console.log(false && "Some String")

console.log(hasMovieAdaptation && "This book has a movie"); // fajna opcja 

// falsy: 0,'',null,undefined
console.log('jonas' && 'Some string');
console.log(0 && "Some string");

console.log(true || "Some String");
console.log(false || "Some String");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT  TRANSLATED";
spanishTranslation;

// tu przyklad gdzie trzeba uwazac bo jest 0 reviews a pokaze no data
console.log(book.reviews.librarything.reviewsCount);
const countWrong = book.reviews.librarything.reviewsCount || 'no data';
countWrong;

// to jest rozwiazanie -  zwraca druga wartosc jesli pierwsza to null or undefined, ale nie kiedy jest 0 lub empty string
const count = book.reviews.librarything.reviewsCount ?? "no data";
count;

function getTotalReviewCount(book){
  const goodRead = book.reviews?.goodreads?.reviewsCount;
  // ten znak robi optionala ze jesli nie istnieje to nie bedzie probowal dostac sie dalej
  // a te 2 znaki zapytania to to co wczesniej ze wtedy 0 nam wpisze ziomal
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; 
  return goodRead + librarything;
}

console.log(getTotalReviewCount(book));


// THE ARRAY MAP METHOD
const books = getBooks();

// dla kazdego elementu robi operacje w nawiasach
const x = [1,2,3,4,5].map((el) => el *2 );
console.log(x);

const titles = books.map((book)=> book.title);
titles;

function getTotalReviewCount(book){
  const goodRead = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0; 
  return goodRead + librarything;
}

const essentialData = books.map(book=>({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book)
  }));
essentialData;

// THE ARRAY FILTER METHOD

const longBooksWithMovie = books
  .filter(book=>book.pages > 500)
  .filter(book=>book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter(book=>book.genres.includes("adventure"))
  .map(book=>book.title);

adventureBooks;

// THE ARRAY REDUCE METHOD

const pagesAllBooks = books.reduce((sum,book)=> sum+book.pages, 0);
pagesAllBooks;

// THE ARRAY SORT METHOD

const arr = [3,7,1,9,6];
const sorted = arr.slice().sort((a,b) => a-b); // b-a to rosnaca , to posortuje nam ta wczesniejsza tablice dlatego slice robimy 
sorted;
arr;

const sortedByPages = books.slice().sort((a,b)=>b.pages-a.pages);

// WORKING WITH IMMUTABLE ARRAYS

// 1) Add book object to array
const newBook = {
  id: 6,
  title: "Harry Potter and Chamber of Secrets",
  author: " J. K. Rowling"
};

const booksAfterAdd = [...books,newBook];
booksAfterAdd


// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter(book => book.id !== 3);
booksAfterDelete

// 3) Update book object on the array
const booksAfterUpdate = booksAfterDelete.map(book=>book.id === 1 ? {...book, pages: 1210} : book);

booksAfterUpdate
*/

// ASYNCHRONOUS JAVASCRIPT: PROMISES

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(res=>res.json())
//   .then(data=> console.log(data));

// console.log("jonas");

// ASYNCHRONOUS JAVASCRIPT: ASYNC/AWAIT

async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await res.json()
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos)

console.log("jonas")