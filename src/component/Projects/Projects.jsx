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
    P,
    ButtonSection,
    Button
  } from './ProojectElements'
  import Slider from "react-slick";
  import { useState } from "react";
  import { Link } from 'react-router-dom';
  import { DiGithubBadge } from 'react-icons/di';
  import { AiFillEye } from 'react-icons/ai';
import ProjectsDetails from '../../Data/ProjectsOrders';
import { useEffect } from 'react';
  const Projects = (props) => {
    const [slideIndex,setSlideIndex] = useState(0);
    const[view,setView] = useState(window.innerWidth >= 800 ? true : false);
  useEffect(()=>{
    const resize = ()=>{
      if(window.innerWidth >= 800){
          setView(true);
      }else{
          setView(false);
      }
    }
    window.addEventListener('resize',resize);
  })
  
  const[num,setNum] = useState(view ? 3 : 1)
  console.log(num);
  const settings = {
      className:"center",
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: num,
      centerMode:true,
      beforeChange : (current,next) => setSlideIndex(next)
    };
      
    return ( 
        
        <Container id="Projects">
            <Section1>
                <Heading data-aos={"zoom-in"}>
                    My <P>Works</P>
                </Heading>
            </Section1>
            <Section2 data-aos="fade-up">
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
                                          <ButtonSection>
                                          <Link to = {cardData.link} className='li'>
                                            <Button>
                                                <DiGithubBadge/>
                                            </Button>
                                          </Link>
                                          <Link to = {cardData.link} className='li'>
                                            <Button>
                                                <AiFillEye/>
                                            </Button>
                                          </Link>
                                        </ButtonSection>
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