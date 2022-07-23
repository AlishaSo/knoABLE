import axios from 'axios';

const BASE_URL1 = process.env.REACT_APP_BASE_URL1;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL2 = process.env.REACT_APP_BASE_URL2;

function getRandomNum(number) {
  return Math.floor(Math.random() * number);
}

async function getRandomBook(date) {
  try {
    const names = await axios.get(`${BASE_URL1}lists/full-overview.json?published_date=${date}&api-key=${API_KEY}`);

    const listsLength = names.data.results.lists.length;
    const randIndex = getRandomNum(listsLength);
    const booksInListLength = names.data.results.lists[randIndex].books.length;
    
    return names.data.results.lists[randIndex].books[getRandomNum(booksInListLength)];
  } catch (error) {
    console.error(error);
  }
}

 async function searchForBooks(title, publisher, author, isbn) {
  try {
    const names = await axios.get(`${BASE_URL1}lists/best-sellers/history.json?${title && `title=${title}&`}${publisher && `publisher=${publisher}&`}${author && `author=${author}&`}${isbn && `isbn=${isbn}&`}api-key=${API_KEY}`);
    return names.data.results;
  } catch (error) {
    console.error(error);
  }
}

 async function getBookCover(isbnNum) {
  try {
    const picture = await axios.get(`${BASE_URL2}${isbnNum}`);
    return picture.data.items[0].volumeInfo.imageLinks.thumbnail;
  } catch (error) {
    console.error(error);
  }
}

const addImgToBookObj = async booksData => {
  const newBookObjs = booksData.map(async book => {
    let bookCover;
    if(book.isbns[0])
      bookCover = await getBookCover(book.isbns[0].isbn13);
    else
      bookCover = await getBookCover(book.ranks_history.primary_isbn13);
    
    book['bookCover'] = `${bookCover}`;
    return book;
  });

  return await Promise.all(newBookObjs);
}

const finalBookObjs = async (title, publisher, author, isbn) => {
  let books = await searchForBooks(title, publisher, author, isbn);
  let modifiedBooks = await addImgToBookObj(books);
  return modifiedBooks;
}

export {getRandomBook, finalBookObjs};