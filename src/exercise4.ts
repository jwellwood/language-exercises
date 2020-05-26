// Data to use

const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

// Answers ***************************
interface Book {
  title: string;
  isRead: boolean;
}

const isBookRead = (books: Array<Book>, titleToSearch: string): boolean => {
  // ORIGINAL ANSWER

  // const getBook = books.filter(
  //   (book) => titleToSearch === book.title && book.isRead
  // );
  // return !getBook.length ? false : true;

  // BETTER ANSWER
  const myBook: any = books.find(
    (book) => titleToSearch === book.title && book.isRead
  );

  return Boolean(myBook) && myBook.isRead;
};
// Answers ***************************

// log function to see result
const exercise4 = () => {
  console.log({
    TASK: '************** DELIVERABLE 04 *********************',
    'Book 1': isBookRead(books, 'Unknown Book'),
    'Book 2': isBookRead(books, 'Harry Potter y la piedra filosofal'),
    'Book 3': isBookRead(books, 'Canción de hielo y fuego'),
    'Book 4': isBookRead(books, 'Devastación'),
  });
};

export = exercise4;
