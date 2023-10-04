
import './App.css';
import Navbar  from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Experience from './Components/Experience/Experience';
import Project from './Components/Projects/Projects';
import About from './Components/About/About';
import MyTools from './Components/MyTools/MyTools';
import Contact from './Components/Contact/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Header />
      <Experience />
      <Project />
      <About />
      <MyTools />
      <Contact />
      <ToastContainer />
    </BrowserRouter>
    </>
  )
}

export default App
