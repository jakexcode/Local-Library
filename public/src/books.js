
//this function returns an array of authors with the given ID
function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

//this function returns an array of the books with the given ID
function findBookById(books, id) {
  return books.find(book => book.id.includes(id));
}

//this funciton returns an array of two arrays. 
//1. an array of the available books
//2. an array of the books currently borrowed
function partitionBooksByBorrowedStatus(books) {
  //returns an array of the books that are available
  const availableList = books.filter((book) => book.borrows[0].returned === true);

  //returns an array of the books that are currently borrowed
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return [borrowedList, availableList];
}

//this function returns an array of all of the transactions within a books borrows array
//the result includes the account objects information
function getBorrowersForBook(book, accounts) {
  const result = [];
  for (let account of accounts) {
    for (let i = 0; i < book.borrows.length; i++) {
      if(account.id === book.borrows[i].id) {
        const returned = book.borrows[i].returned
        result.push({...account, returned })
      }
    }
  }
  return result.slice(0,10);
}




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
