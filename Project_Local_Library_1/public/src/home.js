
//Returns the number of books in the array
function getTotalBooksCount(books) {
  const numberOfBooks = books.map((book) => book);
  return numberOfBooks.length;
}

//Returns the number of accounts in the array
function getTotalAccountsCount(accounts) {
  
  const result = accounts.reduce((account) => {
  account = accounts.map((account) => account);
  return account.length;
  }, 0);
  return result; 
}


//Returns the number of borrowed books in the array
function getBooksBorrowedCount(books) {
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return borrowedList.length;
}


//Returns the top five most common genres
function getMostCommonGenres(books) {
 const commonGenres = [];

 //Loops through books and finds the matching genre
 for (let book of books) {
   const genre = commonGenres.find(
     (currentGenre) => currentGenre.name === book.genre
   );
  
  //if true this adds to the existing genre
  //if false pushes new object to the empty array
   if (genre) {
     genre.count++;
   } else {
     commonGenres.push({ name: book.genre, count: 1});
   }
 }
  return topFive(commonGenres);
 
}

//Helper function to return the top five results
function topFive(array) {
  let result = array.sort((countA, countB) => (
    countA.count < countB.count ? 1: -1
  )).slice(0, 5);

  return result;
}


//returns the top five most popular books
function getMostPopularBooks(books) {
   const popBooks = [];
   
 for (let book of books) {
   const popularity = book.borrows.length
   const greatBooks = popBooks.find(
     (popularBook) => popularBook.name === book
   );
   if (greatBooks) {
     greatBooks.count++;
   } else {
     popBooks.push({ name: book.title, count: popularity});
   }
 }
  return topFive(popBooks);
}


//returns the top five most popular authors
function getMostPopularAuthors(books, authors) {
  const popularAuthors = [];

  for (let author of authors) {
    const authorName = `${author.name.first} ${author.name.last}`;
    let count = 0;
    for (let book of books) {
      if (author.id === book.authorId) {
        count += book.borrows.length;
      }
    }
    const authorObject = { name: authorName, count: count };
    popularAuthors.push(authorObject);
  }

  return topFive(popularAuthors);
}


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
