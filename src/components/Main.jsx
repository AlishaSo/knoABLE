import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Find from './Find';
import Discover from './Discover';

export default function Main() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/find' element={ <Find /> } />
        <Route path='/discover' element={ <Discover /> } />
      </Routes>
    </div>
  )
}