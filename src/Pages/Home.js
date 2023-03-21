import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import Cover from "../component/Cover/Cover";
import Projects from "../component/Projects/Projects";

const Home = () => {
    return ( 
        <>
            <Cover/>
            <About/>
            <Projects/>
            <Contact/>
        </>
     );
}
 
export default Home;