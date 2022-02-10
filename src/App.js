import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
    <Link to='/'>Halaman Home</Link>
    <Link to='/about'>Halaman About</Link>   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>      
    </div>
  );
}

export default App;
