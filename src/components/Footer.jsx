import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse} from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faShuffle} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer>
      <NavLink to='/'><FontAwesomeIcon className='fa-icon' icon={faHouse} size='2x' inverse /></NavLink>
      <NavLink to='/find'><FontAwesomeIcon className='fa-icon' icon={faMagnifyingGlass} size='2x' inverse /></NavLink>
      <NavLink to='/discover'><FontAwesomeIcon className='fa-icon' icon={faShuffle} size='2x' inverse /></NavLink>
    </footer>
  )
}