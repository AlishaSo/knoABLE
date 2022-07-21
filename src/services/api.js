import axios from 'axios';

const BASE_URL1 = process.env.REACT_APP_BASE_URL1;
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL2 = process.env.REACT_APP_BASE_URL2;

async function getListNames() {
  try {
    const names = await axios.get(`${BASE_URL1}lists/names.json?api-key=${API_KEY}`);
    return names.data.results;
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
  console.log(booksData)
  const newBookObjs = booksData.map(async book => {
    if(book.isbns[0]) {
      const bookCover = await getBookCover(book.isbns[0].isbn13);
      book['bookCover'] = `${bookCover}`;
    }
    else {
      const bookCover = await getBookCover(book.ranks_history.primary_isbn13);
      book['bookCover'] = `${bookCover}`;
    }

    return book;
  });

  return await Promise.all(newBookObjs);
}
const finalBookObjs = async (title, publisher, author, isbn) => {
  let books = await searchForBooks(title, publisher, author, isbn);
  let modifiedBooks = await addImgToBookObj(books);
  return modifiedBooks;
}

export {getListNames, finalBookObjs};