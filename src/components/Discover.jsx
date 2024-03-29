import {getRandomBook} from '../services/api';
import {useState} from 'react';
import RandomBook from './RandomBook';

export default function Discover() {
  const [bookInfo, setBookInfo] = useState({});
  const todaysDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');

  function handleSubmit(event) {
    event.preventDefault();
    const userInputDate = event.target.dateSelect.value;

    getData(userInputDate);
  }
  
  async function getData(date) {
    const data = await getRandomBook(date);
    console.log(data)
    setBookInfo(data);
  }

  return (
    <div className='discover-div'>
      <h2 className='page-title'>Would you like to discover a new NYT bestseller book?</h2>
      <form onSubmit={handleSubmit}>
        <label>Please enter a date to search within: </label>
        <input
          type='date'
          name='dateSelect'
          min='2008-06-22'
          max={todaysDate}
        />
        <button className='discover-btn btn'>Get a NYT bestseller</button>
      </form>
      
      {Object.keys(bookInfo).length > 0 && <RandomBook bookInfo={bookInfo} />}
    </div>
  )
}