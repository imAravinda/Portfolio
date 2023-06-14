import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt, FaFacebook, FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import * as c from "./ContactElements";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';
import CV from "../../Files/curriculum_vitae.pdf";
import { useRef } from "react";
import { Toaster, toast } from "react-hot-toast";
const Contact = () => {
  const email = "acfernando1999@gmail.com";
  const phone = "0716051474";
  const Email = () => {
    window.location.href = `mailto:${email}?`;
  };
  const Phone = () => {
    window.location.href = `tel:${phone}?`;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qripdto', 'template_x16c5y8', form.current, '7NgEaCxvljd7afyR6')
      .then((result) => {
          toast.success("Email Send Successfully",{
            style: {
                background: '#50C878',
                color: '#fff',
                borderRadius: '4px',
              },
          })
      }, (error) => {
        toast.error(error.text,{
            style: {
                background: '#50C878',
                color: '#fff',
                borderRadius: '4px',
              },
          })
      });
  };

  return (
    <c.Container id="Contact">
      <c.DetailSection>
        <c.Heading data-aos="zoom-in">
          Contact <c.P>Me</c.P>
        </c.Heading>
        <c.ContactDetails>
          <c.Contact data-aos="fade-right">
            <c.Icon onClick={Email}>
              <MdEmail />
            </c.Icon>
            <c.Desc>acfernando1999@gmail.com</c.Desc>
          </c.Contact>
          <c.Contact data-aos="fade-right" data-aos-duration="1000">
            <c.Icon onClick={Phone}>
              <FaPhoneSquareAlt />
            </c.Icon>
            <c.Desc>0716051474</c.Desc>
          </c.Contact>
        </c.ContactDetails>
        <c.SocialMedia>
          <Link
            to="https://www.facebook.com/aravinda.chathuranga.3"
            className="li"
          >
            <c.Icon data-aos="zoom-in-down">
              <FaFacebook />
            </c.Icon>
          </Link>
          <Link to="https://www.instagram.com/__a_r_a_a__/" className="li">
            <c.Icon data-aos="zoom-in-down" data-aos-duration="1000">
              <GrInstagram />
            </c.Icon>
          </Link>
          <Link
            to="https://www.linkedin.com/in/aravinda-chathuranga-7a868a210/"
            className="li"
          >
            <c.Icon data-aos="zoom-in-down" data-aos-duration="1500">
              <ImLinkedin />
            </c.Icon>
          </Link>
          <Link to="https://github.com/imAravinda" className="li">
            <c.Icon data-aos="zoom-in-down" data-aos-duration="2000">
              <FaGithub />
            </c.Icon>
          </Link>
        </c.SocialMedia>
        <c.ButtonSection data-aos="zoom-in-up">
          <a className="link"
            href={CV}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            <c.Button>Download CV</c.Button>
          </a>
        </c.ButtonSection>
      </c.DetailSection>
      <c.FormSection ref={form} onSubmit={sendEmail}>
      <Toaster
          containerStyle={{
            position: "relative",
            top:'-11rem',
            left:'18rem',
            zIndex: 999999999,
          }}
          toastOptions={{
            success: {
              iconTheme: {
                primary: 'white',
                secondary: 'black',
              },
            },
          }}
          reverseOrder={false}
        />
        <c.TextFeild data-aos="zoom-out-down">
          <c.InputText type="text" placeholder="Your Name" name="user_name"/>
        </c.TextFeild>
        <c.TextFeild data-aos="zoom-out-down">
          <c.InputText type="text" placeholder="Your Email" name="user_email"/>
        </c.TextFeild>
        <c.TextBox data-aos="zoom-out-down">
          <c.InputTextArea type="text" placeholder="Your Message" name="message"/>
        </c.TextBox>
        <c.ButtonSection data-aos="fade-right">
          <c.Button>Submit</c.Button>
        </c.ButtonSection>
      </c.FormSection>
    </c.Container>
  );
};

export default Contact;
