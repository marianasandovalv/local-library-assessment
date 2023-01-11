



function findAccountById(accounts, id ) {
  return accounts.find((account) => account.id === id );
  // using find() method to access account array and id key.
}
//console.log(findAccountById);

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last; //defining variable accountA,AccountB
    const lastNameB = accountB.name.last;
    return lastNameA.toLowerCase() < lastNameB.toLowerCase() ? -1 : 1;
  });


  //return accounts.sort((accountA, accountB) =>
   //accountA.lastName.
   //toLowerCase() > accountB.lastName.toLowerCase()? 1:-1);
   //commented code did not work bacause variables were not defined 
}
//console.log(sortAccountsByLastName);

function getTotalNumberOfBorrows(account, books) {
  const {id} = account; // defining {id} variable 
  let total = 0; // declaring a total variable to do a count and start at 0

  for (let book in books){ 
    //declaring book as a variable and looping through books array
const {borrows} = books[book];
 //declaring a new variable {borrows} and assigning bookobject within books array

  borrows.forEach((account) => {if(account.id === id){ 
    total ++;
  }
});
//using forEach() method to create a function for each borrows element in the books array.
// and counting the # of time an accounts id apears in any borrows array
}
return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  let result = []; //declaring an empty array
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });
//using filter() to filter through the array of books
//using some()method and returning only the account id and books that are check out
//map()method to
  result = result.map((book) => {
    const author = getAuthorById(authors, book.authorId);
    //helper function
    const newBook = {
      ...book, author
    };
    return newBook
    });
    return result;
    

}

//helper function to support function getBooksPossessedByAccount(account, books, authors)
//takes an author array and author id and returns author object
const getAuthorById = (authors, id) => {
  return authors.find((author) => author.id === id);
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
