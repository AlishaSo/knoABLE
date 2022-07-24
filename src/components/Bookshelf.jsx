import FoundBooks from './FoundBooks';
import {nanoid} from 'nanoid';

export default function Bookshelf(props) {
  console.log(props.booksList)

  function renderBooks() {
    return props.booksList.map(book => {
      return (<FoundBooks 
        key = {nanoid()}
        title = {book.title}
        author = {book.author}
        description = {book.description}
        isbns = {book.isbns ? book.isbns : (book.ranks_history.primary_isbn10, book.ranks_history.primary_isbn13)}
        bookCover = {book.bookCover}
      />)
    })
  }
  
  return (
    <div className='bookshelf'>
      {renderBooks()}
    </div>
  )
}