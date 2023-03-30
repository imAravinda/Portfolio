
import { Link} from "react-scroll";
import {NavLink} from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Navbar,
  NavActive,
  Links1,
  Links2,
  Ul,
  Li,
  Hamburger,
  Span,
  Logo,
  P1,
  P,
  Nav
} from './NavbarElements'
import { useState } from "react";
const NavBar = (props) => {
  const [navbar,setNavbar] = useState(false);

    const changeBackground = ()=>{
        if(window.scrollY >= 100){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll',changeBackground);
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
      setIsOpen(!isOpen);
    };
  return ( 
    <Navbar>
      {
        navbar ? 
        <NavActive data-aos={"fade-down"}>
                    <Links1>
                    <NavLink to="./" onClick={props.ScrollToTop} className="li"><Logo ><P1>A</P1><P>RAVINDA</P></Logo></NavLink>
                    </Links1>
                    <Hamburger onClick={handleMenu}>
                      {isOpen ? <FaTimes /> : <FaBars />}
                    </Hamburger>
                    <Links2>
                        <Ul isOpen={isOpen}>
                            <Li className="li" ><Link to="Cover" spy={true} offset={-100} smooth={true}>Home<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="About" spy={true} offset={-100} smooth={true}>About<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="Projects" spy={true} offset={-100} smooth={true}>Projects<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="Skills" spy={true} offset={-100} smooth={true}>Skills<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="Contact" spy={true} offset={-100} smooth={true}>Contact<Span className="Ho"></Span></Link></Li>
                            {/* <Li className="li" onClick={ScrollToTop}><Link to=" ">Contact Us<Span className="Ho"></Span></Link></Li> */}
                        </Ul>
                    </Links2>
      </NavActive> : 
      <Nav>
            <Links1>
                <NavLink to="./" onClick={props.ScrollToTop} className="li"><Logo ><P1>A</P1><P>RAVINDA</P></Logo></NavLink>
            </Links1>
            <Hamburger onClick={handleMenu}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </Hamburger>
            <Links2>
                <Ul isOpen={isOpen}>
                    <Li className="li" ><Link to="Cover" spy={true} offset={-100} smooth={true}>Home<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="About" spy={true} offset={-100} smooth={true}>About<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="Projects" spy={true} offset={-100} smooth={true}>Projects<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="Skills" spy={true} offset={-100} smooth={true}>Skills<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="Contact" spy={true} offset={-100} smooth={true}>Contact<Span className="Ho"></Span></Link></Li>
                    {/* <Li className="li" onClick={ScrollToTop}><Link to=" ">Contact Us<Span className="Ho"></Span></Link></Li> */}
                </Ul>
            </Links2>
      </Nav>
      }
    </Navbar>
 );
}
 
export default NavBar;