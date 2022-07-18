import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <header>
      <img className='logo' src={logo} alt="knoable app logo, stylized with 'kno' in lowercase, and 'able' in uppercase. Next to the text, there's an image of a brain. The whole logo is a light blue color" />
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/find'>Find</NavLink>
        <NavLink to='/discover'>Discover</NavLink>
      </nav>
    </header>
  )
}