import { MdEmail } from 'react-icons/md';
import { FaPhoneSquareAlt,FaFacebook,FaGithub} from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { GrInstagram } from 'react-icons/gr';
import * as c from './ContactElements';
const Contact = () => {
    return ( 
        <c.Container>
            <c.DetailSection>
                <c.Heading>
                    Contact <c.P>Me</c.P>
                </c.Heading>
                <c.ContactDetails>
                    <c.Contact>
                        <c.Icon>
                            <MdEmail/>
                        </c.Icon>
                        <c.Desc>
                            acfernando1999@gmail.com
                        </c.Desc>
                    </c.Contact>
                    <c.Contact>
                        <c.Icon>
                            <FaPhoneSquareAlt/>
                        </c.Icon>
                        <c.Desc>
                            0716051474
                        </c.Desc>
                    </c.Contact>
                </c.ContactDetails>
                <c.SocialMedia>
                    <c.Icon><FaFacebook/></c.Icon>
                    <c.Icon><GrInstagram/></c.Icon>
                    <c.Icon><ImLinkedin/></c.Icon>
                    <c.Icon><FaGithub/></c.Icon>
                </c.SocialMedia>
                <c.ButtonSection>
                    <c.Button>Download CV</c.Button>
                </c.ButtonSection>
            </c.DetailSection>
            <c.FormSection>
                <c.TextFeild>
                    <c.InputText type="text" placeholder='Your Name'/>
                </c.TextFeild>
                <c.TextFeild>
                    <c.InputText type="text" placeholder='Your Email'/>
                </c.TextFeild>
                <c.TextBox>
                    <c.InputTextArea type="text" placeholder='Your Message'/>
                </c.TextBox>
                <c.ButtonSection>
                    <c.Button>
                        Submit
                    </c.Button>
                </c.ButtonSection>
            </c.FormSection>
        </c.Container>
     );
}
 
export default Contact;