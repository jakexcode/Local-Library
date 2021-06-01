function findAuthorById(authors, id) {
  return authors.find(author => author.id === id);
}

function findBookById(books, id) {
  return books.find(book => book.id.includes(id));
}

function partitionBooksByBorrowedStatus(books) {
  const availableList = books.filter((book) => book.borrows[0].returned === true);
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return [borrowedList, availableList];
}


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
