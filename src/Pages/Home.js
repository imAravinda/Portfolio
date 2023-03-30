import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Cover from "../component/Cover/Cover";
import Projects from "../component/Projects/Projects";
import Skills from "../component/Skills/Skills";

const Home = () => {
    return ( 
        <>
            <Cover/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
        </>
     );
}
 
export default Home;