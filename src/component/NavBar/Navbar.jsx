
import { Link} from "react-scroll";
import {NavLink} from 'react-router-dom';
import {
  Navbar,
  NavActive,
  Links,
  Ul,
  Li,
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
  return ( 
    <Navbar>
      {
        navbar ? 
        <NavActive data-aos={"fade-down"}>
                    <Links>
                    <NavLink to="./" onClick={props.ScrollToTop} className="li"><Logo ><P1>A</P1><P>RAVINDA</P></Logo></NavLink>
                    </Links>
                    <Links>
                        <Ul>
                            <Li className="li" ><Link to="Cover" spy={true} offset={-100} smooth={true}>Home<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="About" spy={true} offset={-100} smooth={true}>About<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="Projects" spy={true} offset={-100} smooth={true}>Projects<Span className="Ho"></Span></Link></Li>
                            <Li className="li" ><Link to="Contact" spy={true} offset={-100} smooth={true}>Contact<Span className="Ho"></Span></Link></Li>
                            {/* <Li className="li" onClick={ScrollToTop}><Link to=" ">Contact Us<Span className="Ho"></Span></Link></Li> */}
                        </Ul>
                    </Links>
      </NavActive> : 
      <Nav>
            <Links>
                <NavLink to="./" onClick={props.ScrollToTop} className="li"><Logo ><P1>A</P1><P>RAVINDA</P></Logo></NavLink>
            </Links>
            <Links>
                <Ul>
                    <Li className="li" ><Link to="Cover" spy={true} offset={-100} smooth={true}>Home<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="About" spy={true} offset={-100} smooth={true}>About<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="Projects" spy={true} offset={-100} smooth={true}>Projects<Span className="Ho"></Span></Link></Li>
                    <Li className="li" ><Link to="Contact" spy={true} offset={-100} smooth={true}>Contact<Span className="Ho"></Span></Link></Li>
                    {/* <Li className="li" onClick={ScrollToTop}><Link to=" ">Contact Us<Span className="Ho"></Span></Link></Li> */}
                </Ul>
            </Links>
      </Nav>
      }
    </Navbar>
 );
}
 
export default NavBar;