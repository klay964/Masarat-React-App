import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import './index.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<div>404 NOT FOUND</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
