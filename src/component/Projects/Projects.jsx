import {
    Container,
    Section1,
    Section2,
    Heading,
    SubSec,
    Section3,
    Images,
    Img,
    Description,
    SubHeading,
    Name,
    H2,
    P
  } from './ProojectElements'
  import Slider from "react-slick";
  import { useState } from "react";
  import { Link } from 'react-router-dom';
import ProjectsDetails from '../../Data/ProjectsOrders';
  const Projects = (props) => {
    const [slideIndex,setSlideIndex] = useState(0);
    const settings = {
        className:"center",
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        centerMode:true,
        beforeChange : (current,next) => setSlideIndex(next)
      };
      
    return ( 
        
        <Container id="Menu">
            <Section1>
                <Heading data-aos={"zoom-in"}>
                    My <P>Works</P>
                </Heading>
            </Section1>
            <Section2 data-aos={"zoom-out-up"}>
                <Slider {...settings}>
                    {
                        ProjectsDetails.map((cardData,index)=>{
                            return(
                                <SubSec className={index === slideIndex ? 'slider sliderActive' : 'slider'} key={index}>
                                  <Images>
                                    <Img src={cardData.img}/>
                                  </Images>
                                      <div className="text">
                                        <Description>
                                          <SubHeading>{cardData.name}</SubHeading>
                                          <Name>{cardData.desc}</Name>
                                        </Description>
                                      </div>
                                </SubSec>
                            )
                        })
                    }
                </Slider>
            </Section2>
        </Container>
     );
  }
  
  export default Projects;