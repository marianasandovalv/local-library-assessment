

 const { findAccountById } = require("./accounts");

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
  // using find() method to access the author array and to match author with id
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
  // using fin() to access the book arrat and match with id
}

function partitionBooksByBorrowedStatus(books) {
  // make an array of non returned books and returned books
  const nonReturnedBooks = getNonReturnedBooks(books);
  const returnedBooks = getReturnedBooks(books);
 
  const result = [];
  result.push(nonReturnedBooks);
  result.push(returnedBooks);
  return result;
}
//helper function. returns an array of non returned books
const getNonReturnedBooks = (books) => {
  return books.filter((book) => book.borrows.some((result) => !result.returned));
}

const getReturnedBooks = (books) => {
  return books.filter((book) => book.borrows.every((result) => result.returned));
}



function getBorrowersForBook(book, accounts) {
  // create array of transactons from the given book
  const transactions = book.borrows;

  // use map to add the transaction id's account info to the transaction
  const result = transactions.map((transaction) => {
    const accountInfo = findAccountById(accounts, transaction.id);
    const newTransaction = {
      ...transaction,
      ...accountInfo,
    };
    return newTransaction;
  });

  // limit the amount of accounts to 10 or fewer
  result.splice(10);

  // return the updated transaciton array
  return result;
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
