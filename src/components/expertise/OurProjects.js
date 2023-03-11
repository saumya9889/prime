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
  Link
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

import areteHomes from "../arete-homes imgs/BANNER2.jpg";
import skyHigh from "../sky-high imgs/BANNER2.png";
import nakshathra from "../homepage-imgs/project6.png";
import iLand from "../homepage-imgs/project7.png";
import areteMall from "../commercial-properties imgs/Arete Mall.jpg";
import aretePlaza from "../commercial-properties imgs/ARETE PLAZA1_11zon.png";
import ponneri from "../commercial-properties imgs/gymkhana.png";

const MtnDvdr = motion(Divider);
const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);
const MtnLI = motion(ListItem);
const MtnBtn = motion(Button);

const OurProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [projIndex,setProjIndex] = useState(0);
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
    {title:"ARETE HOMES",link:"/arete-homes",imgF:areteHomes,imgB:skyHigh, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....",link:"/arete-homes"},
    {title:"SKY HIGH TOWER",link:"sky-high",imgF:skyHigh,imgB:aretePlaza, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....",link:"/sky-high"},
    {title:"ARETE PLAZA",link:"/plaza",imgF:aretePlaza,imgB:areteMall, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....",link:"/commercial-properties"},
    {title:"ARETE MALL",link:"/mall",imgF:areteMall,imgB:ponneri, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....", link:"/commercial-properties"},
    {title:"PONNERI GYMKHANA CLUB",link:"",imgF:ponneri,imgB:nakshathra, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....", link:"/commercial-properties"},
    {title:"NAKSHATRA",link:"",imgF:nakshathra,imgB:iLand, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....",link:""},
    {title:"I-LAND",link:"",imgF:iLand,imgB:areteHomes, text:"Our objective is to manage and develop the strongest property portfolios. Our expertise owns experience of 3 decades. We can provide you with all types of developments in all the major cities in the best strategic locations. Not us, but our work speaks for us....",link:""},
  ];
  const [isList,setIsList]= useState(true);
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();
  const nextHandle=()=>{
    if(projIndex===4){
      setIsList(true);
      setProjIndex(0);
    }
    else if(projIndex===projects.length-1){
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
      setProjIndex(4);
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
  const addAutoClicker=()=>{
    setTimeout(()=>{
      nextHandle();
    },3000);
  }
  useEffect(() => {
    addAutoClicker();
    return()=>{
      clearTimeout();
    }
  });
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
    centerMode: false,
    autoplay:true,
    infinite: true,
    draggable: true,
    speed:500,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 1,
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
      pl="100px"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex w="100%" h="100%" align="center" justify="center">
        <Flex direction="column" h="100%" align="center" justify="center">
          <Text fontFamily="goudy" fontSize="2.5rem" textAlign="center">
          PROJECT DEVELOPMENT
          </Text>
          <Heading pt="1.563rem" fontFamily="avenir" fontSize="2.125rem" textAlign="center">
          BUILDING YOUR VISIONS, CREATING REALITY
          </Heading>
        </Flex>
      </Flex>
      
      <Flex pos="relative" align="flex-start" justify="space-between">
      <Flex
          w="50%"
          direction="column"
          align="flex-start"
          pt="1.563rem"
        >
          <MtnFlx
            initial={{ x: -1000 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            pos="relative"
            w="100%"
            h="100%"
            pl="50px" 
          >
            <Image
              animation="fadein 1 2s"
              zIndex="3"
              // pos="absolute"
              w="100%"
              h="25.25rem"
              src={projects[projIndex].imgF}
            />
            <Image
              animation="fadein 1 2s"
              pos="absolute"
              w="100%"
              h="21.875rem"
              pl="100px"
              right="100px"
              top="25px"
              opacity=".5"
              src={projects[projIndex].imgB}
            />
          </MtnFlx>
      </Flex>
        <MtnFlx
          w="5rem"
          initial={{ opacity: 0, y: -100 }}
          animate={animateY}
          transition={{ duration: 2, type: "just" }}
          h="100%"
          direction="column"
          align="center"
          justify="flex-start"
          pt="25px"
          px="1.563rem"
        >
          <Divider
            h="3.5rem"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />{" "}
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </MtnFlx>
        <Flex pos="relative" m="0" w="50%" direction="column" justify="center" h="26rem" pr="100px">
        <Text pb="1.563rem" fontFamily="varela round" fontSize="18px">{projects[projIndex].text}</Text>
          <MtnHd
            initial={{ opacity:0 }}
            animate={animateX}
            transition={{ duration: 2, type: "just" }}
            pb="15px"
            fontFamily="avenir"
            fontSize="1.5rem"
            w="100%"
            textAlign="left"
          >
            {projects[projIndex].title}
          </MtnHd>
          <Link _hover={{textDecoration:"none"}} href={projects[projIndex].link}>
          <MtnBtn
            id={projects[projIndex].link}
            onClick={(e)=>redirect(e)}
            initial={{ opacity: 0 }}
            animate={animateX}
            transition={{  duration: 2, type: "just" }}
            w="160px"
            h="51px"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize="16px"
            fontFamily="avenir"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            VIEW PROJECT 
          </MtnBtn>
          </Link>
          <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          border="3px solid"
          position="absolute"
          bottom="-2rem"
          left="0"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            clearTimeout();
            prevHandle();

          }}
        >
          <AiOutlineLeft color="#B88746" size="2.5rem" />
        </IconButton>

        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          border="3px solid"
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          left="5rem"
          bottom="-2rem"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            clearTimeout();
            nextHandle();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
        </Flex>
      </Flex>
      </Flex>
  );
};

export default OurProjects;
