
//this function finds the accounts by the given ID
function findAccountById(accounts, id) {
  return accounts.find((account) => account.id.includes(id));
}

//this function sorts the accounts by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((lastA, lastB) =>
    lastA.name.last.toLowerCase() > lastB.name.last.toLowerCase() ? 1 : -1
  );
}



function getTotalNumberOfBorrows(account, books) {

  let result = 0;
  const booksBorrowedByAccount = books.forEach((book) => {
    //loops through the borrows array to check if the accounts ID matches
    if (!!book.borrows) {
      book.borrows.forEach((accounts) => {
        if (accounts.id === account.id) {
          result++;
        }
      });
    }
  });
  return result;
}

function getBooksPossessedByAccount(account, books, authors) {
//Creates empty array to be filled with borrowed books
  const borrowedBooks = [];

  books.forEach((book) => {
    let bookBorrows = book.borrows;

//loops through the borrows array to check if the borrowers ID matches the accounts ID
//with the condition that the book has not been returned
    bookBorrows.forEach((borrow) => {
      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  //returns a new object within an array of all of the borrowed books 
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
