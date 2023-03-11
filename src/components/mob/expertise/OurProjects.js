import {
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  UnorderedList,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import areteHomes from "../../arete-homes imgs/BANNER2.jpg";
import skyHigh from "../../sky-high imgs/BANNER2.png";
//import nakshatra from "";
import areteMall from "../../commercial-properties imgs/Arete Mall.jpg";
import aretePlaza from "../../commercial-properties imgs/ARETE PLAZA1_11zon.png";
import ponneri from "../../commercial-properties imgs/gymkhana.png";

const MtnDvdr = motion(Divider);
const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);
const MtnLI = motion(ListItem);
const MtnBtn = motion(Button);

const OurProjects = () => {
  const redirect =(loc) =>{
    switch(loc.target.id){
      case "/plaza":
        window.localStorage.setItem('commercialPage',true);
        window.location.replace(`/commercial-properties`);
        return;
      case "/mall":
        window.localStorage.setItem('commercialPage',false);
        window.location.replace(`/commercial-properties`);
        return;
      default:
        window.location.replace(`${loc.target.id}`);
        return;
    }
  }
  const projects=[
    {title:"ARETE HOMES",link:"/arete-homes",imgF:areteHomes,imgB:skyHigh, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us...."},
    {title:"SKY HIGH",link:"sky-high",imgF:skyHigh,imgB:aretePlaza, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us...."},
    {title:"ARETE PLAZA",link:"/plaza",imgF:aretePlaza,imgB:areteMall, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us...."},
    {title:"ARETE MALL",link:"/mall",imgF:areteMall,imgB:ponneri, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us...."},
    {title:"PONNERI GYMKHANA CLUB",link:"",imgF:ponneri,imgB:areteHomes, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us...."},
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [projIndex,setProjIndex] = useState(0);
  const [isList,setIsList]= useState(true);
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();
  const nextHandle=()=>{
    if(projIndex===6){
      setIsList(true);
      setProjIndex(0);
    }
    else if(projIndex===5){
      setIsList(true);
      setProjIndex(projIndex+1);
    }
    else{
      setIsList(false);
      setProjIndex(projIndex+1);
    }
  }
  const prevHandle=()=>{
    if(projIndex===0){
      setIsList(true);
      setProjIndex(6);
    }
    else if(projIndex===1){
      setIsList(true);
      setProjIndex(projIndex-1);
    }
    else{
      setIsList(false);
      setProjIndex(projIndex-1);
    }
  }
  useEffect(()=>{
    console.log(isList);
    console.log(projects[projIndex].p1)
  },[isList]);
  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateY.start({
        y: 0,
        opacity: 1,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateX, animateY, animateFade]);
  const [slider, setSlider] = useState(null);
  const settings = {
    // className: "center",
    centerMode: true,
    autoplay:true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      minh="100%"
      direction="column"
      align="center"
      pt="1.875rem"
      pb="1.875rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      className="project-dev-wrapper"
    >
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex direction="column" h="100%" align="center" justify="center">
          <Text fontFamily="goudy" fontSize="2.125rem" textAlign="center">
          PROJECT DEVELOPMENT
          </Text>
          <Heading pt="25px" pb="25px" fontFamily="avenir" fontSize="1.5rem" textAlign="center">
          Building Your Visions,<br/>Creating Reality
          </Heading>
        </Flex>
      </Flex>
      <Flex direction="column" pos="relative" align="flex-start" justify="space-between">
      <Text textAlign="center" px="1rem" pb="15px" fontFamily="varela round" fontSize="1rem">Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....</Text>
      <Box
        transform={isInView ? "scale(1)" : "scale(0.6)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        position={"relative"}
        height={"100%"}
        width={"100vw"}
        overflow={"hidden"}
        className="project-dev-grid"
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {projects.map((prime) => (
            <Flex px=".312rem" w="100%" align="center">
              <Image
                key={prime}
                w="100%"
                height="15.437rem"
                position="relative"
                objectPosition="center"
                backgroundRepeat="no-repeat"
                objectFit="fill"
                src={prime.imgF}
              />
              <Heading
            mt="25px"
            fontFamily="avenir"
            fontSize="1.5rem"
            w="100%"
            textAlign="center"
          >
            {prime.title}
          </Heading>
          <Button
                ml="20%"
                id={prime.link}
                onClick={(e)=>redirect(e)}
                alignSelf="center"
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                EXPLORE MORE
              </Button>
            </Flex>
          ))}
        </Slider>
      </Box>
        
      </Flex>
      </Flex>
  );
};

export default OurProjects;
