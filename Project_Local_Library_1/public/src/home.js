function getTotalBooksCount(books) {
  const numberOfBooks = books.map((book) => book);
  return numberOfBooks.length;
}

function getTotalAccountsCount(accounts) {
  const numberOfAccounts = accounts.map((account) => account);
  return numberOfAccounts.length;
}


//needs to be fixed
function getBooksBorrowedCount(books) {
  const borrowedList = books.filter((book) => book.borrows[0].returned === false);
  return borrowedList.length;
}



function getMostCommonGenres(books) {
 const commonGenres = [];

 for (let book of books) {
   const genre = commonGenres.find(
     (currentGenre) => currentGenre.name === book.genre
   );
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


//needs to be fixed
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
