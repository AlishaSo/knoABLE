import {useState, useEffect} from 'react';
import {search} from '../services/api';

export default function Find() {
  const [listNames, setListNames] = useState([]);
  
  function handleSubmit(event) {
    event.preventDefault();
    const titleInput = event.target.title.value;
    const publisherInput = event.target.publisher.value;
    const authorInput = event.target.author.value;
    const isbnInput = event.target.isbn.value;

    getData(titleInput, publisherInput, authorInput, isbnInput);
  }

  async function getData(titleInput, publisherInput, authorInput, isbnInput) {
    if(titleInput || publisherInput || authorInput || isbnInput) {
      const data = await search(titleInput, publisherInput, authorInput, isbnInput);
      console.log(data);
      setListNames(data);
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

        <button>Find me a besteseller</button>
      </form>
    </div>
  )
}