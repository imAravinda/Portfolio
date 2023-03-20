import { FaCopyright } from "react-icons/fa";
import * as c from './FooterElements';
const Footer = () => {
    return ( 
        <c.Container>
            <c.Sec>
                Copyright <c.Icon><FaCopyright/></c.Icon> <c.P>Aravinda</c.P> | All Rights Reserved
            </c.Sec>
            <c.Sec>
                Developed By <c.P> Aravinda Chathuranga</c.P>
            </c.Sec>
        </c.Container>
     );
}
 
export default Footer;