function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id));
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) =>
    lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  //check to see if ID matches the ID inside of the borrowed books array
  //count how many times that ID matches the ID in the borrowed books array
  //return the number of times that ID shows up

  let result = 0;
  const booksBorrowedByAccount = books.forEach((book) => {
    if (!!book.borrows) {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) {
          result++;
        }
        console.log(accounts.id);
        console.log(account.id);
      });
    }
  });
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
  //loop through authors to find ID
  //loop through books to find ID
  //match the author to the book using the ID
  //loop through accounts to find ID
  //if ID matches given, loop through borrowed to find what books return false with given ID
  //return [ { book, author: {authorObject} borrows: [{object}] }]

  const borrowedBooks = [];

  books.forEach((book) => {
    let bookBorrows = book.borrows;

    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  let result = borrowedBooks.map((book) => {
    return { ...book, author: getAuthor(book, authors) };
  });

  return result;
}

// Helper function
// Returns author object
function getAuthor(book, authors) {
  const author = authors.find((author) => author.id === book.authorId);
  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
