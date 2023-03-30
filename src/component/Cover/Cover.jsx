import { Cursor,useTypewriter } from "react-simple-typewriter";
import coverImage from "../../images/CoverImg.jpeg";
import { P1 } from "../NavBar/NavbarElements";
import * as c from "./CoverElements"
const Cover = () => {
    const [text] = useTypewriter({
        words: ["Software Developer.", "Full Stack Developer.", "UI/UX Designer.","Web Developer."],
        loop: true,
        typeSpeed: 10,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });
    return ( 
        <c.Container id="Cover">
            <c.Section>
                <c.Role data-aos="fade-right">
                    A {text}
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#50C878"
                    />
                </c.Role>
                <c.Header data-aos="fade-right">
                    Hi, I'm<c.P> Aravinda</c.P>
                </c.Header>
                <c.Header data-aos="fade-right">
                   From Sri Lanka
                </c.Header>
            </c.Section>
            <c.Section>
                <c.CoverImage data-aos="fade-left">
                    <c.Image src={coverImage}/>
                </c.CoverImage>
            </c.Section>
        </c.Container>
     );
}
 
export default Cover;