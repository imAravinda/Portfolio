import coverImage from "../../images/CoverImg.jpeg";
import { P1 } from "../NavBar/NavbarElements";
import * as c from "./CoverElements"
const Cover = () => {
    return ( 
        <c.Container>
            <c.Section>
                <c.Role>
                    Web Developer
                </c.Role>
                <c.Header>
                    Hi, I'm<c.P> Aravinda</c.P>
                </c.Header>
                <c.Header>
                   From Sri Lanka
                </c.Header>
            </c.Section>
            <c.Section>
                <c.CoverImage>
                    <c.Image src={coverImage}/>
                </c.CoverImage>
            </c.Section>
        </c.Container>
     );
}
 
export default Cover;