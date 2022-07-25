import {nanoid} from 'nanoid';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons';

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
    <div className='random-book-div' key={nanoid()}>
      <div className='book'>
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
          <ul className='buy-links-list'>
            {buy_links.map(link => <li key={nanoid()}>
              <a target='_blank' 
              rel='noopener noreferrer' 
              href={link.url}>{link.name} &nbsp;<FontAwesomeIcon className='link-icon' icon={faArrowUpRightFromSquare} /></a> 
            </li>)}
          </ul>
        </>
        }
      </div>
    </div>
  )
}