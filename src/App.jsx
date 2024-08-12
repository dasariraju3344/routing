import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NaveBar from './components/NaveBar';
import FormSubmit from './components/FormSubmit';
import Error from './components/Error';

function App() {

  
  return (
    <center>
      <NaveBar></NaveBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/submit' element={<FormSubmit />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </center>
  )
}

export default App;
