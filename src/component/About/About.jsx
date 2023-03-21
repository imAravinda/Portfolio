import * as c from './AboutElements'
import img from '../../images/portfolioImg1.jpg'
import { GrReactjs } from 'react-icons/gr';
import { IoLogoNodejs,IoLogoJavascript } from 'react-icons/io';
import { SiHtml5,SiCss3, SiCsharp, SiAdobexd,SiMongodb,SiMysql } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { CgFigma } from 'react-icons/cg';
import { useRef, useState } from 'react';
const About = () => {
    const[select,setSelect] = useState(true);
    const[value,setValue] = useState("Skills");
    const inputRef = useRef([]);
    const handleClick = (index)=>{
        setSelect(true);
        console.log(inputRef.current.innerHTML);
       setValue(inputRef.current[index].innerHTML);
    }
    
    return ( 
        <c.Container id="About">
            <c.Section>
                <c.CoverImage data-aos="flip-right">
                    <c.Image src={img}/>
                </c.CoverImage>
            </c.Section>
            <c.Section>
                <c.Header data-aos="zoom-in-down">
                    About<c.P> Me</c.P>
                </c.Header>
                <c.Description data-aos="zoom-in-left">
                    Hi, I'm aravinda. I following bachelor of computer science degree in university of ruhuna. 
                    I have passionate in coding. I done various projects related to web development, 
                    standalone application development and etc. Also I have capability to learn new thing quickly 
                    and also I'm a seeker who seeking new knowledge. Also I have capability to work with team 
                    and I think I'm a friendly guy.  
                </c.Description>
                <c.Details>
                    <c.Headings>
                        <c.Heading data-aos="zoom-out" ref={(el) => (inputRef.current[0] = el)} onClick={() => handleClick(0)}>Skills</c.Heading>
                        <c.Heading data-aos="zoom-out" ref={(el) => (inputRef.current[1] = el)} onClick={() => handleClick(1)}>Education</c.Heading>
                        <c.Heading data-aos="zoom-out" ref={(el) => (inputRef.current[2] = el)} onClick={() => handleClick(2)}>Experience</c.Heading>
                    </c.Headings>
                    {
                       select && value === "Skills" ?
                        <c.DetailsSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    Web Application Development
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute data-aos="fade-left"
                                                data-aos-anchor="#example-anchor"
                                                data-aos-offset="500"
                                                data-aos-duration="500">
                                        <c.Icon><GrReactjs/></c.Icon>
                                        <c.Text>ReactJS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                        data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><IoLogoNodejs/></c.Icon>
                                        <c.Text>NodeJS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute 
                                         data-aos="fade-left"
                                         data-aos-anchor="#example-anchor"
                                         data-aos-offset="500"
                                         data-aos-duration="500">
                                        <c.Icon><SiHtml5/></c.Icon>
                                        <c.Text>HTML</c.Text>
                                    </c.Attribute>
                                    <c.Attribute 
                                         data-aos="fade-left"
                                         data-aos-anchor="#example-anchor"
                                         data-aos-offset="500"
                                         data-aos-duration="500">
                                        <c.Icon><SiCss3/></c.Icon>
                                        <c.Text>CSS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute 
                                         data-aos="fade-left"
                                         data-aos-anchor="#example-anchor"
                                         data-aos-offset="500"
                                         data-aos-duration="500">
                                        <c.Icon><IoLogoJavascript/></c.Icon>
                                        <c.Text>JS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute 
                                         data-aos="fade-left"
                                         data-aos-anchor="#example-anchor"
                                         data-aos-offset="500"
                                         data-aos-duration="500">
                                        <c.Icon><SiMongodb/></c.Icon>
                                        <c.Text>MongoDB</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    Standalone Application Development
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><DiJava/></c.Icon>
                                        <c.Text>Java</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><SiCsharp/></c.Icon>
                                        <c.Text>C#</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon></c.Icon>
                                        <c.Text>JavaFX</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><SiMysql/></c.Icon>
                                        <c.Text>MySql</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    UI/UX Design
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><SiAdobexd/></c.Icon>
                                        <c.Text>Adobe XD</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><CgFigma/></c.Icon>
                                        <c.Text>Figma</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                        </c.DetailsSec>
                        :
                        value === "Education" ?
                        <c.DetailsSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    Primary School
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Bauddhaloka Maha Vidyalaya</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    Secondary School
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Taxila Central College</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                  University
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>University Of Ruhuna</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                        </c.DetailsSec>
                        :
                        value === "Experience" ? 
                        <c.DetailsSec>
                            <c.DetailsSubSec data-aos="zoom-in">
                                <c.DetailHead>
                                    Intern at People's Bank
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>From 2019 To 2020</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                        </c.DetailsSec>
                        :
                        null
                    }
                </c.Details>
            </c.Section>
        </c.Container>
     );
}
 
export default About;