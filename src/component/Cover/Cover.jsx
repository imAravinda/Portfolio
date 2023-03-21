import coverImage from "../../images/CoverImg.jpeg";
import { P1 } from "../NavBar/NavbarElements";
import * as c from "./CoverElements"
const Cover = () => {
    return ( 
        <c.Container id="Cover">
            <c.Section>
                {/* <c.Role data-aos="fade-right">
                    Web Developer
                </c.Role> */}
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