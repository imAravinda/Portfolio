import * as c from './AboutElements'
import img from '../../images/portfolioImg1.jpg'
import { GrReactjs } from 'react-icons/gr';
import { IoLogoNodejs,IoLogoJavascript } from 'react-icons/io';
import { SiHtml5,SiCss3, SiCsharp, SiAdobexd,SiMongodb,SiMysql } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { CgFigma } from 'react-icons/cg';
import { useRef, useState } from 'react';
const About = () => {
    const[select,setSelect] = useState(false);
    const[value,setValue] = useState("Skills");
    const inputRef = useRef([]);
    const handleClick = (index)=>{
        setSelect(true);
        console.log(inputRef.current.innerHTML);
       setValue(inputRef.current[index].innerHTML);
    }
    
    return ( 
        <c.Container>
            <c.Section>
                <c.CoverImage>
                    <c.Image src={img}/>
                </c.CoverImage>
            </c.Section>
            <c.Section>
                <c.Header>
                    About<c.P> Me</c.P>
                </c.Header>
                <c.Description>
                    Hi, I'm aravinda. I following bachelor of computer science degree in university of ruhuna. 
                    I have passionate in coding. I done various projects related to web development, 
                    standalone application development and etc. Also I have capability to learn new thing quickly 
                    and also I'm a seeker who seeking new knowledge. Also I have capability to work with team 
                    and I think I'm a friendly guy.  
                </c.Description>
                <c.Details>
                    <c.Headings>
                        <c.Heading ref={(el) => (inputRef.current[0] = el)} onClick={() => handleClick(0)}>Skills</c.Heading>
                        <c.Heading ref={(el) => (inputRef.current[1] = el)} onClick={() => handleClick(1)}>Education</c.Heading>
                        <c.Heading ref={(el) => (inputRef.current[2] = el)} onClick={() => handleClick(2)}>Experience</c.Heading>
                    </c.Headings>
                    {
                       select && value === "Skills" ?
                        <c.DetailsSec>
                            <c.DetailsSubSec>
                                <c.DetailHead>
                                    Web Application Development
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
                                        <c.Icon><GrReactjs/></c.Icon>
                                        <c.Text>ReactJS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><IoLogoNodejs/></c.Icon>
                                        <c.Text>NodeJS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><SiHtml5/></c.Icon>
                                        <c.Text>HTML</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><SiCss3/></c.Icon>
                                        <c.Text>CSS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><IoLogoJavascript/></c.Icon>
                                        <c.Text>JS</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><SiMongodb/></c.Icon>
                                        <c.Text>MongoDB</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead>
                                    Standalone Application Development
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
                                        <c.Icon><DiJava/></c.Icon>
                                        <c.Text>Java</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><SiCsharp/></c.Icon>
                                        <c.Text>C#</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon></c.Icon>
                                        <c.Text>JavaFX</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
                                        <c.Icon><SiMysql/></c.Icon>
                                        <c.Text>MySql</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead>
                                    UI/UX Design
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
                                        <c.Icon><SiAdobexd/></c.Icon>
                                        <c.Text>Adobe XD</c.Text>
                                    </c.Attribute>
                                    <c.Attribute>
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
                                <c.DetailHead>
                                    Primary School
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
                                        <c.Text>Bauddhaloka Maha Vidyalaya</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead>
                                    Secondary School
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
                                        <c.Text>Taxila Central College</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead>
                                  University
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
                                        <c.Text>University Of Ruhuna</c.Text>
                                    </c.Attribute>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                        </c.DetailsSec>
                        :
                        value === "Experience" ? 
                        <c.DetailsSec>
                            <c.DetailsSubSec>
                                <c.DetailHead>
                                    Intern at People's Bank
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute>
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