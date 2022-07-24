import {nanoid} from 'nanoid';

export default function RandomBooks(props) {
  const {
    title,
    author,
    description,
    primary_isbn10,
    primary_isbn13,
    book_image,
    buy_links
  } = props.bookInfo;

  return (
    <div className='book' key={nanoid()}>
      <img src={book_image} alt='Book cover' />
      <h2>{title}</h2>
      <h3>by {author}</h3>
      <p>{description}</p>
      <h4>ISBNs:</h4>
      <ul>
        <li>{primary_isbn10}</li>
        <li>{primary_isbn13}</li>
      </ul>
      {buy_links.length > 0 && 
      <>
        <h4>Buy:</h4>
        <ul>
          {buy_links.map(link => <li key={nanoid()}><a href={link.url}>{link.name}</a></li>)}
        </ul>
      </>
      }
    </div>
  )
}