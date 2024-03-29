import {nanoid} from 'nanoid';

export default function FoundBooks(props) {
  const {
    title,
    author,
    description,
    isbns,
    bookCover
  } = props;

  return (
    <div className='book'>
      <img src={bookCover} alt='Book cover' />
      <h2 className='book-title'>{title}</h2>
      <h3>by {author}</h3>
      <p>{description}</p>
      {isbns.length > 0 && <>
        <h4>ISBNs:</h4>
        <ul>
          {isbns.map(isbn => {
            const randId1 = nanoid();
            const randId2 = nanoid();
            return (
              <>
                <li key={randId1} id={randId1}>ISBN10: {isbn.isbn10}</li>
                <li key={randId2} id={randId2}>ISBN13: {isbn.isbn13}</li>
              </>
            )
          })}
        </ul>
      </>
      }
    </div>
  )
}