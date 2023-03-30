import * as c from './AboutElements'
import img from '../../images/portfolioImg1.jpg'
import { GrReactjs,GrMysql } from 'react-icons/gr';
import { IoLogoNodejs,IoLogoJavascript } from 'react-icons/io';
import { SiHtml5,SiCss3, SiCsharp, SiAdobexd,SiMongodb,SiMysql,SiPython,SiPostman,SiJirasoftware } from 'react-icons/si';
import { DiJava,DiGit,DiMysql } from 'react-icons/di';
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
                <c.CoverImage data-aos="flip-right"
                                data-aos-duration="1000">
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
                        <c.Heading data-aos="zoom-out" ref={(el) => (inputRef.current[3] = el)} onClick={() => handleClick(3)}>Other Activities</c.Heading>
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
                                        <c.Icon><GrMysql/></c.Icon>
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
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    Others
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><SiPostman/></c.Icon>
                                        <c.Text>Postman</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><SiJirasoftware/></c.Icon>
                                        <c.Text>Jira</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><SiPython/></c.Icon>
                                        <c.Text>Python</c.Text>
                                    </c.Attribute>
                                    <c.Attribute
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Icon><DiGit/></c.Icon>
                                        <c.Text>Git</c.Text>
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
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Bauddhaloka Maha Vidyalaya</c.Text>
                                    </c.Attribute1>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                    Secondary School
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Taxila Central College</c.Text>
                                    </c.Attribute1>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec>
                                <c.DetailHead data-aos="zoom-in">
                                  University
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>University Of Ruhuna</c.Text>
                                    </c.Attribute1>
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
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>From 2019 To 2020</c.Text>
                                    </c.Attribute1>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                        </c.DetailsSec>
                        :
                        value === "Other Activities" ? 
                        <c.DetailsSec>
                            <c.DetailsSubSec data-aos="zoom-in">
                                <c.DetailHead>
                                    Ruhuna Science Research Circle
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Organizing Commity Member </c.Text>
                                        <c.Text>From 2021 To Present</c.Text>
                                    </c.Attribute1>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec data-aos="zoom-in">
                                <c.DetailHead>
                                    Taekwondo
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>University Player</c.Text>
                                        <c.Text>From 2021 To Present</c.Text>
                                    </c.Attribute1>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec data-aos="zoom-in">
                                <c.DetailHead>
                                    Computer Science Student Commiunity
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Organizing Commity Member</c.Text>
                                        <c.Text>From 2021 To Present</c.Text>
                                    </c.Attribute1>
                                </c.AttributeSec>
                            </c.DetailsSubSec>
                            <c.DetailsSubSec data-aos="zoom-in">
                                <c.DetailHead>
                                    Career Guidance Unit & Career Circle
                                </c.DetailHead>
                                <c.AttributeSec>
                                    <c.Attribute1
                                         data-aos="fade-left"
                                        data-aos-anchor="#example-anchor"
                                        data-aos-offset="500"
                                        data-aos-duration="500">
                                        <c.Text>Organizing Commity Member</c.Text>
                                        <c.Text>From 2021 To Present</c.Text>
                                    </c.Attribute1>
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