import logo from './logo.svg';
import './App.css';
import Aos from 'aos';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Cover from './component/Cover/Cover';
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
// import "aos/dist/aos.css";
import Fallback from './component/FallBack/FallBack';
const NavBar = lazy(() => import('./component/NavBar/Navbar'));
const Home = lazy(() => import('./Pages/Home'));
const Footer = lazy(() => import('./component/Footer/Footer'));
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
      <Suspense fallback={<Fallback />}>
        <NavBar ScrollToTop={scrollToTop}/>
          <Routes>
            <Route path="/" element={<Home ScrollToTop={scrollToTop}/>}/>
          </Routes>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
