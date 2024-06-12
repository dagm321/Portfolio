import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Login from './components/Admin-components/Login';
import Add_items from './components/Admin-components/Add_items';
import Messages from './components/Admin-components/Messages';
import Main_admin from './components/Admin-components/Main_admin';

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
            <Route path='/admin' element={<Login/>} />
            <Route path='/admin_home' element={<Main_admin/>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
