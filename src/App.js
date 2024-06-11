import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/Projects' element={<Projects/>} />
            <Route path='/skills' element={<Skills/>}/>
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
