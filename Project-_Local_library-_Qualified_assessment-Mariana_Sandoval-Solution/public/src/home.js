function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let total = 0; //set count to 0
  // use forEach() method to call each element of array
  books.forEach((book) => { 
  if(!book.borrows[0].returned){
    total ++; //adding 1 each time returnred is false
  }
  });
  return total;
}

function getMostCommonGenres(books) {
   // use reduce() to create array of common genre
   const result = books.reduce((add, book) => {
     // get the genre of current books
     const genre = book.genre;

     // get the object in add that has name = genre
     const genreInfo = add.find((element) => element.name === genre);

     // create new if object not found
     if (!genreInfo) {
       const newGenreInfo = {
         name: genre,
         count: 1,
       };
       add.push(newGenreInfo);
     } else {
       // if object was found then add 1 to count
       genreInfo.count++;
     }

     return add;
   }, []);

   // sort the array by count from most common to least common
   result.sort((genreA, genreB) => genreB.count - genreA.count);

   // limit array to 5
   result.splice(5);

   return result;
 }

function getMostPopularBooks(books) {
   // using map() to create a new array of popular books
   const result = books.map((book) => {
     const popularityInfo = { 
       name: book.title, // book title 
       count: book.borrows.length, // # of times book has been borrowed
     };

     return popularityInfo;
   });

   // sort the new array by most popular to least 
   result.sort((titleA, titleB) => titleB.count - titleA.count);

   // limit to 5 elements
   result.splice(5);

   return result;
 }

 function getMostPopularAuthors(books, authors) {
  // using map to create an array for most popular authors
  const result = authors.map((author) => {
    // getting full name of authors
    const fullName = `${author.name.first} ${author.name.last}`;
    // getting books by that author using helper function that finds author by id
    const booksByAuthor = getBooksByAuthorId(books, author.id);
    // using reduce to get accumulated results based of borrows
    const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
    const newAuthorInfo = {
      name: fullName,
      count: totalBorrows,
    };

    return newAuthorInfo;
  });

  // sort the new array by count: greatest to least
  result.sort((authorA, authorB) => authorB.count - authorA.count);

  // limit array to 5
  result.splice(5);

  return result;
}

// helper function
const getBooksByAuthorId = (books, authorId) => {
  return books.filter((book) => book.authorId === authorId);
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
