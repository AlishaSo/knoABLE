import {useState} from 'react';
import {finalBookObjs} from '../services/api';
import Bookshelf from './Bookshelf';

export default function Find() {
  const [booksList, setBooksList] = useState([]);
  
  function handleSubmit(event) {
    event.preventDefault();
    const titleInput = event.target.title.value;
    const publisherInput = event.target.publisher.value;
    const authorInput = event.target.author.value;
    const isbnInput = event.target.isbn.value;

    getData(titleInput, publisherInput, authorInput, isbnInput);
  }

  async function getData(title, publisher, author, isbn) {
    if(title || publisher || author || isbn) {
      const booksData = await finalBookObjs(title, publisher, author, isbn)
      setBooksList(booksData);
    }
    else {
      alert('Please enter some search criteria');
    }
  }

  return (
    <div>
      <h2>Find a book that is &mdash; or has been &mdash; a NYT besteseller!</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Title: </label>
        <input type='text' name='title' />

        <label htmlFor='publisher'>Publisher: </label>
        <input type='text' name='publisher' />
        
        <label htmlFor='author'>Author: </label>
        <input type='text' name='author' />

        <label htmlFor='isbn'>ISBN: </label>
        <input type='text' name='isbn' />

        <button>Find me a bestseller</button>
      </form>

      {booksList.length > 0 && <Bookshelf booksList = {booksList} />}
    </div>
  )
}