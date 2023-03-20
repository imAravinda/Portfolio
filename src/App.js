import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar/Navbar';
import Aos from 'aos';
import { useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Cover from './component/Cover/Cover';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';


function App() {
  useEffect(() => {
    Aos.init({duration:1000});
  }, [])

  useEffect(() => {
    const scrollToTop = ()=>{
      if(window.pageYOffset > 200)
      {
        window.scrollTo(
          {
            top: 0, 
            behavior: "smooth",
          }
        );
      }
    }

  }, [])
  
  const scrollToTop = ()=>{
    if(window.pageYOffset > 200)
    {
      window.scrollTo(
        {
          top: 0, 
          behavior: "smooth",
        }
      );
    }
  }
  return (
    <div className="App">
      <NavBar ScrollToTop={scrollToTop}/>
      <Cover/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
