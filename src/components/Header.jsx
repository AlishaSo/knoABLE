import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
import {useState, useEffect} from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navBar = document.querySelector('nav');
    const closeMenu = e => {
      if(e.originalTarget.tagName != 'BUTTON' && e.originalTarget.tagName != 'SPAN')
        setMenuOpen(false);
    }
    document.body.addEventListener('click', closeMenu);

    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  return (
    <header>
      <button className='nav-toggle' onClick={() => setMenuOpen(prevMenuOpen => !prevMenuOpen)}>
        <span className='hamburguer'></span>
      </button>
      <NavLink to='/'><img className='logo' src={logo} alt="knoable app logo, stylized with 'kno' in lowercase, and 'able' in uppercase. Next to the text, there's an image of a brain. The whole logo is a light blue color" /></NavLink>
      <nav className={`${menuOpen ? 'visible' : ''}`}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/find'>Find</NavLink>
        <NavLink to='/discover'>Discover</NavLink>
      </nav>
    </header>
  )
}