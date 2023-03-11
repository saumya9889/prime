import React,{useEffect, useLayoutEffect, useState} from 'react';
import { Divider, Box, Text } from "@chakra-ui/react";
import { SectionCStyled } from './SectionC.styled';
import './animations.css'
//import { SliderDataB } from './SliderDataB';
const SliderDataB = [
    {image:"/images/careers/problem solving.jpg"},
    {image:"/images/careers/reliability.jpg"},
    {image:"/images/careers/innovation.jpg"},
    {image:"/images/careers/management.jpg"},
    {image:"/images/careers/engagement.jpg"},
    ]
const SectionC= ()=>{
  const [current, setCurrent] = useState(null);
  const [animation,setAnimation] = useState('fadein');
  const [animationB,setAnimationB] = useState('fadein');
  const [isAnimationOn,setIsAnimationOn] =useState(false);
  const length = SliderDataB.length;
  
  const handleAnimation=(select)=>{
    setIsAnimationOn(true);
    switch(select){
        case '0':
            setCurrent(0);
            setAnimation('expand');
            setAnimationB('shrink');
         break;
         case '1':
            setCurrent(1);
            setAnimation('expand');
            setAnimationB('shrink');
        break;
        case '2':
            setCurrent(2);
            setAnimation('expand');
            setAnimationB('shrink');
         break;
         case '3':
            setCurrent(3);
            setAnimation('expand');
            setAnimationB('shrink');
        break;
        case '4':
            setCurrent(4);
            setAnimation('expand');
            setAnimationB('shrink');
         break;
        default:
        //code c
        break;
    }
    setIsAnimationOn(false);
  }
  const reveal=()=> {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i <= reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top || null;
      var elementVisible = 200;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        handleAnimation(reveals[i].getAttribute('id'));
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  useLayoutEffect(()=>{
    window.addEventListener("scroll", reveal);
  });
return (
    <SectionCStyled>
        <Text
          className="title reveal"
          align="center"
          fontSize="40px"
          fontWeight="400"
          fontFamily="goudy"
        >
          BUILDING CHANGE
        </Text>
        {SliderDataB.map((slide, index,slides) =>
            {return (index === current && (<div className='image-row' key={index}
            >
              <img src={current === 0 ? slides[length -1].image : slides[current - 1].image} style={{animation:`${animationB} 1 5s`}} alt='travel image' className='image-back'/>
              <img src={slide.image} style={{animation:`${animation} 1 5s`}}  className='image-front'/>
              </div>)
        );})}
        <div className='data-column'>
            <div className='data-list'>
            <div style={{marginLeft:"2vw"}} className="title reveal">
                <Divider
                    orientation="vertical"
                    border="3px solid"
                    borderColor="#DFBD69"
                    bgColor="#DFBD69"
                    marginLeft="0.5vw"
                    h="84px"
                    w="5px"
                />{" "}
                <Box
                    height="30px"
                    width="30px"
                    backgroundColor="#DFBD69"
                    border="3px solid white"
                    boxShadow="0px 0px 0px 3px #B88746"
                    borderRadius="50%"
                />
              </div>
            <div id={0} className='data-panel reveal'>
            <button className='data-letter' value='P' >P</button>
                <div id="P" className='data-content'>
                    <h3>PROBLEM SOLVING SKILLS</h3>
                    <p>
                        We believe to nurture problem solvers, who lead better.
                    </p>
                </div>
            </div>
            <div id={1} className='data-panel reveal'>
                <button className='data-letter' value='R' >R</button>
                <div className='data-content'>
                    <h3>RELIABILITY</h3>
                    <p>
                        We believe transperancy is the first step to any beginning.
                    </p>
                </div>
            </div>
            <div id={2} className='data-panel reveal'>
            <button className='data-letter' value='I'>I</button>
                <div className='data-content'>
                    <h3>INNOVATIVE THINKING</h3>
                    <p>
                        We Encourage innovative ideas and improvising new things.
                    </p>
                </div>
            </div>
            <div id={3} className='data-panel reveal'>
            <button className='data-letter' value='M'>M</button>
                <div className='data-content'>
                    <h3>MANAGEMENT SKILLS</h3>
                    <p>
                     We thrive on good communication and motivation.
                    </p>
                </div>
            </div>
            <div id={4} className='data-panel reveal'>
            <button className='data-letter' value='E'>E</button>
                <div className='data-content'>
                    <h3>ENGAGEMENT</h3>
                    <p>
                        Team work is the secret to achieve uncommon results.
                    </p>
                </div>
            </div>
            </div>   
        </div>
    </SectionCStyled>
  );
};
export default SectionC;