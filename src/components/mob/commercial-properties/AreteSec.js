import {
  Button,
  Flex,
  Text,
  Image,
  Heading,
  Divider,
  Box,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
// images
import arete1 from "../commercial-properties imgs/ARETE PLAZA2_11zon.jpg";
import arete2 from "../commercial-properties imgs/ARETE PLAZA4_11zon.jpg";
import arete3 from "../commercial-properties imgs/ARETE PLAZA3_11zon.jpg";
import aretefloor from "../commercial-properties imgs/A7 commercial with C.A_pages-to-jpg-0001_11zon.jpg";

import institute from "../Invest imgs/institutes.svg";
import company from "../commercial-properties imgs/company.svg";
import industry from "../Invest imgs/industrial park.svg";
import port from "../Invest imgs/port.svg";


import locationadv from "../commercial-properties imgs/Asset 1-100_11zon.jpg";
import mall from "../commercial-properties imgs/Arete Mall.jpg";
import market from "../commercial-properties imgs/hanson-lu-sq5P00L7lXc-unsplash.jpg";
import multiplex from "../commercial-properties imgs/multipllex.jpg";
import pharmacy from "../commercial-properties imgs/national-cancer-institute-byGTytEGjBo-unsplash.jpg";
import gamingArena from "../commercial-properties imgs/yara-2lS63pP77EQ-unsplash.jpg";
import foodCourt from "../commercial-properties imgs/nick-karvounis-Ciqxn7FE4vE-unsplash.jpg";
import retailShop from "../commercial-properties imgs/carl-raw-s9rsYu-BYNo-unsplash.jpg";
import bgBox from "../careers imgs/bg-box.jpg";
import DropDown from "./DropDown";
import "./animations.css";
import "./commercial-properties.css";
import TenthSec from "../sky-high/SmartInvest";
import ModalWindwow from "../modalWindow";
import ModalImage from "../modalImage";
import { revealOnce } from "../../hooks/util";
import { useInView } from "framer-motion";
import Slider from "react-slick";

const AreteSec = () => {
  const [active, setActive] = useState(window.localStorage.getItem('commercialPage')?JSON.parse(window.localStorage.getItem('commercialPage')):false);
  useEffect(() => {
    window.localStorage.setItem('commercialPage', JSON.stringify(active));
  }, [active]);
  useEffect(() => {
    const data = window.localStorage.getItem('commercialPage');
    if ( data !== null ) setActive(JSON.parse(data));
  }, []);
  const [animate, setAnimate] = useState(false);
 
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try {
      for (var i = 0; i <= reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i]
          ? reveals[i].getBoundingClientRect().top
          : null;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
          if (reveals[i].getAttribute("id") === "b0") {
            setAnimate(true);
          }
        } else {
          reveals[i].classList.remove("active");
          if (reveals[i].getAttribute("id") === "b0") {
            setAnimate(false);
          }
        }
      }
    } catch (e) {}
  };
  useLayoutEffect(() => {
    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", revealOnce);
    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", revealOnce);
    };
  });
  return (
    <>
      <Flex
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        
        px={{ base: "1rem", lg: "0" }}
        bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="top"
        bgSize="cover"
      >
        <Flex mt={{base: "-1.875rem", lg: "0"}}
          bgImage="inherit"
        zIndex="2" w="100%" px={{ base: "0", lg: "6.25rem" }} gap="1.25rem">
          <Button
            w="100%"
            bgColor="transparent"
            bgGradient={active ? "linear(to-b, #B88746 ,#DFBD69)" : "white"}
            border="1px solid #B88746"
            color={active ? "white" : "black"}
            p={{ base: "0.625rem", lg: "1.563rem" }}
            borderRadius="none"
            fontSize={{ base: "0.875rem", lg: "1.25rem" }}
            fontFamily="avenir"
            fontWeight="bold"
            boxShadow={active ? "2xl" : "none"}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
              color: "white",
            }}
            onClick={() => {
              setActive(true);
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            ARETE PLAZA
          </Button>
          <Button
            w="100%"
            color={active ? "black" : "white"}
            bgColor="transparent"
            p={{ base: "0.625rem", lg: "1.563rem" }}
            border="1px solid #B88746"
            bgGradient={active ? "white" : "linear(to-b, #B88746 ,#DFBD69)"}
            borderRadius="none"
            fontSize={{ base: "0.875rem", lg: "1.25rem" }}
            fontFamily="avenir"
            fontWeight="bold"
            boxShadow={active ? "none" : "2xl"}
            onClick={() => {
              setActive(false);
            }}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
              color: "white",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            ARETE MALL
          </Button>
        </Flex>
      </Flex>
      {active ? <AretePlaza /> : <AreteMall />}
      <DropDown />
    </>
  );
};

export default AreteSec;

const AretePlaza = () => {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(() => {
    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(details);
    if(isMobileDevice){
      setIsMobile(true);
    }
  },[]);
const [isOpen,setIsOpen]=useState(false);  
const closeImage =() =>{
  setIsOpen(false);
}
const openImage =() =>{
  setIsOpen(true);
}
return (
  <>
    {isOpen?<ModalImage modalImage={aretefloor} isOpen={isOpen} onClose={()=>closeImage()} />:<></>}
      {" "}
      <Flex
        pt={{ base: "0", lg: "1.875rem" }}
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        px={{ base: "0.625rem", lg: "6.25rem" }}
        pb={{ base: "0", lg: "1.875rem" }}
        bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          w="100%"
          direction="column"
          px={{ base: "1.25rem", lg: "0" }}
          pb={{ base: "1.25rem", lg: "0" }}
        >
          <Text
            w="100%"
            textAlign="center"
            fontFamily="goudy"
            pt={{ base: "1.875rem", lg: "0" }}
            fontSize={{ base: "2.125rem", lg: "2.5rem" }}
            pb="1.563rem"
          >
            ARETE PLAZA
          </Text>
          <Text
            w="100%"
            className="fadein revealOnce"
            fontFamily="veralaRound"
            fontSize={{ base: "1rem", lg: "1.125rem" }}
            pb="1.563rem"
            textAlign="center"
          >
            First time ever in North Chennai a tallest tower with G+1 - 20
            Retail Spaces, an impeccable mix of Shopping, HyperMarket, Pharmacy,
            Fine Dining & Entertainment.
          </Text>{" "}
          {/* mobile view */}
          <Flex
            w="100%"
            gap="1.25rem"
            align="center"
            justify="center"
            direction="column"
            display={{ base: "flex", lg: "none" }}
            className="Icon-fadein reveal"
          >
            {" "}
            <Flex w="100%">
              {" "}
              <Image
                w="100%"
                className="expand reveal"
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                h="12.5rem"
                src={arete2}
              />
            </Flex>
            <Flex w="100%">
              <Image
                w="100%"
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                objectFit="cover"
                objectPosition="50%"
                h="12.5rem"
                src={arete1}
              />
            </Flex>
            <Flex w="100%">
              {" "}
              <Image
                w="100%"
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                objectFit="cover"
                objectPosition="50%"
                h="12.5rem"
                src={arete3}
              />
            </Flex>
          </Flex>
          <Flex
            w="100%"
            gap="1.25rem"
            align="center"
            className="Icon-fadein reveal"
            display={{ base: "none", lg: "flex" }}
          >
            <Flex w="100%">
              <Image
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                objectFit="cover"
                objectPosition="50%"
                h="20rem"
                src={arete1}
              />
            </Flex>
            <Flex w="100%">
              {" "}
              <Image
                className="expand reveal"
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                objectFit="cover"
                objectPosition="50% 50%"
                h="20rem"
                src={arete2}
              />
            </Flex>
            <Flex w="100%">
              {" "}
              <Image
                transition="all .2s"
                _hover={{
                  transform: "scale(1.05)",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
                objectFit="cover"
                objectPosition="50%"
                h="20rem"
                src={arete3}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* mobile view */}
      <Flex
        display={{ base: "flex", lg: "none" }}
        mt={"3.125rem"}
        w="100%"
        h="100%"
        direction="column"
        gap="1.875rem"
        px={{ base: "0", lg: "6.25rem" }}
        pb="3.125rem"
      >
        <Flex
          overflow="hidden"
          w="100%"
          h="100%"
          align="center"
          justify="center"
          gap="0.625rem"
        >
          <Flex
            w="59%"
            className={!isMobile?"slidein-top reveal":"image-sliedleft reveal"}
            justify="center"
            align="center"
          >
            <Divider
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="2.25rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>{" "}
          <Heading
            w="100%"
            h="100%"
            fontFamily="avenir"
            fontSize={{ base: "1.125rem", lg: "2.125rem" }}
            className="slidein-top revealOnce"
          >
            FLOOR PLAN
          </Heading>
        </Flex>
        <Flex
          overflow="hidden"
          w="100%"
          h="100%"
          direction="column"
          align="center"
          justify="center"
        >
          <div
            className="fadein revealOnce"
            style={{ display: "flex", gap: "2.5rem" }}
          >
            <Flex direction="column">
              <Text
                textAlign="center"
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1.125rem" }}
                pb="0.313rem"
              >
                Typology
              </Text>
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize="1rem"
                pb="1rem"
              >
                SHOPS/OFFICES
              </Heading>
            </Flex>
            <Flex direction="column">
              <Text
                textAlign="center"
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1.125rem" }}
                pb="0.313rem"
              >
                Carpet Area
              </Text>
              <Heading
                textAlign="center"
                fontFamily="avenir"
                fontSize="1rem"
                pb="1rem"
              >
                450-650 SQFT.
              </Heading>
            </Flex>
          </div>
          <Button
            w="fit-content"
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            p="0.625rem"
            fontSize="0.875rem"
            fontFamily="avenir"
            fontWeight="bold"
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            CHECK PRICE
          </Button>
        </Flex>{" "}
        <Flex w="100%" px="0.938rem" overflow="hidden" className="expandcar reveal">
          <Image
            
            w="100%"
            boxShadow="dark-lg"
            h="14.375rem"
            src={aretefloor}
            border="1px solid grey"
          />
        </Flex>
      </Flex>
      <Flex
        display={{ base: "none", lg: "flex" }}
        mt="3.125rem"
        w="100%"
        h="100%"
        gap="1.875rem"
        px="6.25rem"
        pb="5rem"
      >
        <Flex w="65%" alignSelf="flex-start" overflow="hidden" boxShadow="2xl" className="expandcar reveal">
          <Image
            onClick={()=>openImage()}
            _hover={{cursor:"pointer"}}
            boxShadow="dark-lg"
            w="100%"
            h="29.25rem"
            src={aretefloor}
            border="1px solid grey"
          />
        </Flex>
        <Flex overflow="hidden" w="2.4rem" h="100%" justify="center">
          <Flex
            w="1.875rem"
            className="discobal-slidein-top reveal"
            direction="column"
            justify="center"
            align="center"
          >
            <Divider
              h="6rem"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
        </Flex>
        <Flex
          overflow="hidden"
          w="30%"
          h="100%"
          direction="column"
          alignSelf="center"
          justify="center"
        >
          <Heading
            fontFamily="avenir"
            fontSize="2.125rem"
            pb="1.25rem"
            className="slidein-top revealOnce"
          >
            FLOOR PLAN
          </Heading>
          <div className="fadein revealOnce">
            <Text fontFamily="veralaRound" fontSize="1.125rem" pb="0.625rem">
              Typology
            </Text>
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1.25rem">
              SHOPS/OFFICES
            </Heading>
            <Text fontFamily="veralaRound" fontSize="1.125rem" pb="0.625rem">
              Carpet Area
            </Text>
            <Heading fontFamily="avenir" fontSize="1.25rem" pb="1.25rem">
              450-650 SQFT.
            </Heading>
            <Button
              w="fit-content"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              mr="0.625rem"
              p="1rem"
              fontSize="1rem"
              fontFamily="avenir"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              CHECK PRICE
            </Button>
          </div>
        </Flex>
      </Flex>
      <LocationAndFormPlaza />
    </>
  );
};

const AreteMall = () => {
  const [isMobile,setIsMobile]=useState(false);
  useEffect(() => {
    const details = navigator.userAgent;
    const regexp = /android|iphone|kindle|ipad/i;
    const isMobileDevice = regexp.test(details);
    if(isMobileDevice){
      setIsMobile(true);
    }
  },[]);
  useEffect(()=>{console.log(isMobile)},[isMobile]);
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {isOpen?<ModalWindwow modalTitle={"ARETE MALL"} modalImage={mall} isOpen={isOpen} onClose={()=>close()} />:<></>}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        px={{ base: "0.625rem", lg: "6.25rem" }}
        pt={{ base: "0", lg: "1.875rem" }}
        pb={{ base: "0", lg: "1.875rem" }}
      >
        {" "}
        <Flex
          w="100%"
          direction="column"
          px={{ base: "1.25rem", lg: "0" }}
          pb={{ base: "1.25rem", lg: "0" }}
        >
          <Text
            className={"slidein-top revealOnce"}
            textAlign="center"
            fontFamily="goudy"
            pt={{ base: "1.875rem", lg: "0" }}
            fontSize={{ base: "2.125rem", lg: "2.5rem" }}
            pb={{ base: "0.938rem", lg: "1.875rem" }}
          >
            ARETE MALL
          </Text>
          <Flex
            w="100%"
            h="100%"
            align="flex-start"
            direction={{ base: "column-reverse", lg: "row" }}
            gap="1.8rem"
          >
            <Flex w={{ base: "100%", lg: "50%" }} className="expandcar reveal" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))">
              <Image
                onClick={()=>open()}
                src={mall}
                h={{ base: "18.125rem", lg: "29.25rem" }}
                w="100%"
              />
            </Flex>{" "}
            <Button
              display={{ base: "block", lg: "none" }}
              alignSelf="center"
              w="fit-content"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              mr={{ base: "0", lg: "0.625rem" }}
              p={{ base: "0.625rem", lg: "1.563rem" }}
              fontSize="1.25rem"
              fontFamily="avenir"
              fontWeight="bold"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
            >
              DOWNLOAD
            </Button>
            {/* mobile view */}
            <Flex
              w="100%"
              h="100%"
              display={{ base: "flex", lg: "none" }}
              gap="0.625rem"
              align="center"
            >
              {" "}
              <Flex
                display={{ base: "none", lg: "none" }}
                className={!isMobile?"discobal-slidein-top reveal":"image-sliedleft reveal"}
                w="33%"
                h="100%"
                direction="row"
                justify="center"
                align="center"
              >
                {" "}
                <Divider
                  orientation="horizontal"
                  border="3px solid"
                  borderColor="#DFBD69"
                  bgColor="#DFBD69"
                />
                <Box
                  height="1.875rem"
                  width="2.25rem"
                  backgroundColor="#DFBD69"
                  border="3px solid white"
                  boxShadow="0px 0px 0px 3px #B88746"
                  borderRadius="50%"
                  my="1"
                />
              </Flex>
              <Heading
                fontFamily="avenir"
                fontSize="1.25rem"
                textAlign={{base:"center",lg:""}}
                pb={{ base: "0", lg: "1rem" }}
              >
                FLOOR PLAN
              </Heading>
            </Flex>
            <Flex
              display={{ base: "none", lg: "flex" }}
              className="discobal-slidein-top reveal"
              w="2rem"
              h="100%"
              direction="column"
              justify="center"
              align="center"
            >
              {" "}
              <Divider
                h="10rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              overflow="hidden"
              w={{ base: "100%", lg: "50%" }}
              h="100%"
              direction="column"
              alignSelf="center"
              justify="center"
            >
              <Text
                fontSize={{ base: "1rem", lg: "1rem" }}
                fontFamily="varela Round"
                textAlign={{base:"left",lg:""}}
                pb="1.875rem"
                className="fadein-2sdelay revealOnce"
              >
                An expansive development of 2.5 lakh sqft retail mall in close
                proximity to residential townships of North Chennai, will make
                sure all your social and recreational needs are met with. The
                mall will create a social fabric which will lead to a more
                wholesome and integrated living.
              </Text>
              <SimpleGrid
                columns={{ base: 2, md: 2 }}
                spacing="1.563rem"
                pb={{ base: "0", lg: "3.125rem" }}
              >
                <Box className="fadein revealOnce">
                  <Text
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                    fontWeight="bold"
                    bgGradient="linear(to-b,#B88746, #DFBD69)"
                    bgClip="text"
                  >
                    300
                  </Text>
                  <Text
                    fontFamily="varela Round"
                    fontSize={{ base: "0.875rem", lg: "1rem" }}
                    color={"black"}
                  >
                    Car Parkings
                  </Text>
                </Box>
                <Box className="fadein revealOnce">
                  <Text
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                    fontWeight="bold"
                    bgGradient="linear(to-b,#B88746, #DFBD69)"
                    bgClip="text"
                  >
                    LG, GF, +4
                  </Text>
                  <Text
                    fontFamily="varela Round"
                    fontSize={{ base: "0.875rem", lg: "1rem" }}
                    color={"black"}
                  >
                    Floors
                  </Text>
                </Box>
                <Box className="fadein revealOnce">
                  <Text
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                    fontWeight="bold"
                    bgGradient="linear(to-b,#B88746, #DFBD69)"
                    bgClip="text"
                  >
                    1,50,000 SQFT
                  </Text>
                  <Text
                    fontFamily="varela Round"
                    fontSize={{ base: "0.875rem", lg: "1rem" }}
                    color={"black"}
                  >
                    Carpet Area
                  </Text>
                </Box>
                <Box className="fadein revealOnce">
                  <Text
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                    fontWeight="bold"
                    bgGradient="linear(to-b,#B88746, #DFBD69)"
                    bgClip="text"
                  >
                    2,25,000 SQFT
                  </Text>
                  <Text
                    fontFamily="varela Round"
                    fontSize={{ base: "0.875rem", lg: "1rem" }}
                    color={"black"}
                  >
                    GLA
                  </Text>
                </Box>
              </SimpleGrid>
              <div style={{ overflow: "hidden" }}>
                <Flex
                  display={{ base: "none", lg: "flex" }}
                  direction="column"
                  className="fadein revealOnce"
                >
                  <Heading fontFamily="avenir" fontSize="1.25rem" pb="1rem">
                    FLOOR PLAN
                  </Heading>
                  <Button
                    w="fit-content"
                    bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                    color="white"
                    mr="0.625rem"
                    p={"1.563rem"}
                    fontSize="1.25rem"
                    fontFamily="avenir"
                    fontWeight="bold"
                    _hover={{
                      bgGradient: "linear(to-b, #DFBD69, #B88746)",
                    }}
                  >
                    DOWNLOAD
                  </Button>
                </Flex>
              </div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      
      {!isMobile && (<Flex
        dispaly={{ base: "none", lg: "flex" }}
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        pt={{ base: "1.25rem", lg: "3.125rem" }}
        px={{ base: "0.938rem", lg: "6.25rem" }}
      >
        <Text
          fontFamily="goudy"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          pb="1.875rem"
          className="slidein-top revealOnce"
        >
          AMENITIES
        </Text>

        <Flex
          w={{ base: "47.5%", lg: "100%" }}
          h="100%"
          gap="1.25rem"
          direction={{ base: "column", lg: "row" }}
          align="center"
          pb="0.9rem"
        >
          <Flex w="100%" direction="column" align="center" overflow="hidden">
            <Image
              zIndex="2"
              src={retailShop}
              h={{ base: "8.563rem", lg: "15rem" }}
              className="slidein-bottom revealOnce"
            />
            <Heading
              fontFamily="avenir"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              pt="1rem"
              className="fadein revealOnce"
            >
              RETAIL SHOPS
            </Heading>
          </Flex>
          <Flex w="100%" direction="column" align="center" overflow="hidden">
            <Image
              zIndex="2"
              h={{ base: "8.563rem", lg: "15rem" }}
              src={market}
              className="slidein-bottom-2sdelay revealOnce"
            />
            <Heading
              fontFamily="avenir"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              pt="1rem"
              className="fadein-2sdelay revealOnce"
            >
              HYPERMARKET
            </Heading>
          </Flex>
          <Flex w="100%" direction="column" align="center" overflow="hidden">
            <Image
              zIndex="2"
              src={pharmacy}
              h={{ base: "8.563rem", lg: "15rem" }}
              className="slidein-bottom-4sdelay revealOnce"
            />
            <Heading
              fontFamily="avenir"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              pt="1rem"
              className="fadein-4sdelay revealOnce"
            >
              PHARMACY
            </Heading>
          </Flex>
        </Flex>
        <Flex
          w="100%"
          h="100%"
          align="center"
          pb="0.625rem"
          overflow="hidden"
          px={{ base: "0.938rem", lg: "0" }}
          direction={{ base: "column", lg: "row" }}
        >
          {" "}
          <Flex w="100%" h="100%" align="center" overflow="hidden">
            <Flex
              w="100%"
              align="center"
              className="discoball-slidein-left1 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                w="100%"
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width={{ base: "1.875rem", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                w="100%"
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
          </Flex>
          <Flex w="100%" align="center" overflow="hidden">
            <Flex
              w="100%"
              align="center"
              className="discoball-slidein-left2 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                w="100%"
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width={{ base: "1.875rem", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                w="100%"
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
          </Flex>
          <Flex w="100%" align="center" overflow="hidden">
            <Flex
              w="100%"
              align="center"
              className="discoball-slidein-left3 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                w="100%"
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width={{ base: "1.875rem", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                w="100%"
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex
          w={{ base: "47.5%", lg: "100%" }}
          h="100%"
          gap="1.25rem"
          align="center"
          pb="0.625rem"
          overflow="hidden"
          direction={{ base: "column", lg: "row" }}
        >
          <Flex
            w="100%"
            direction={{ base: "column-reverse", lg: "column" }}
            align="center"
          >
            <Heading
              fontFamily="avenir"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              pb={{ base: "0", lg: "1rem" }}
              pt={{ base: "1rem", lg: "0" }}
              className="fadein revealOnce"
              textAlign="center"
            >
              FOOD COURT
            </Heading>
            <Image
              src={foodCourt}
              h={{ base: "8.563rem", lg: "15rem" }}
              className="slidein-top revealOnce"
              id="b0"
            />
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "column-reverse", lg: "column" }}
            align="center"
          >
            <Heading
              fontFamily="avenir"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              pb={{ base: "0", lg: "1rem" }}
              pt={{ base: "1rem", lg: "0" }}
              textAlign="center"
              className="fadein-2sdelay revealOnce"
            >
              8 SCREEN MULTIPLEX
            </Heading>
            <Image
              src={multiplex}
              h={{ base: "8.563rem", lg: "15rem" }}
              className="slidein-top-2sdelay revealOnce"
            />
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "column-reverse", lg: "column" }}
            align="center"
          >
            <Heading
              fontFamily="avenir"
              fontSize={{ base: "1rem", lg: "1.25rem" }}
              pb={{ base: "0", lg: "1rem" }}
              pt={{ base: "1rem", lg: "0" }}
              textAlign="center"
              className="fadein-2sdelay revealOnce"
            >
              GAMING ARCADE
            </Heading>
            <Image
              src={gamingArena}
              h={{ base: "8.563rem", lg: "15rem" }}
              className="slidein-top-4sdelay revealOnce"
            />
          </Flex>
        </Flex>
      </Flex>)}
      {isMobile && (<Flex
      ref={ref}
      w="100%"
      h="65vh"
      direction="column"
      align="center"
      justify="center"
      pt="3.125rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Text
        px='1rem'
        transform={isInView ? "none" : "translateY(-100px)"}
        opacity={isInView ? 1 : 0}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        mb="1.563rem"
        textAlign="center"
      >
       AMENITIES
      </Text>
      <Box
        transform={isInView ? "scale(1)" : "scale(0.6)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
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
        <Flex px=".312rem" direction="column" textAlign="center" mb="1.875rem">
            
            <Image
              className="expandcar reveal"
              src={retailShop}
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
            RETAIL SHOPS
            </Heading>
        </Flex>
        <Flex px=".312rem" textAlign="center" direction="column">
            <Image
              className="expandcar reveal"
              src={market}
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
            HYPERMARKET
            </Heading>
          </Flex>
          <Flex px=".312rem" textAlign="center" direction="column" align="center" mb="1.875rem">
            
            <Image
              className="expandcar reveal"
              src={pharmacy}
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
              PHARMACY
            </Heading>
          </Flex>
          <Flex px=".312rem" textAlign="center" direction="column" align="center">
            <Image
              className="expandcar reveal"
              src={foodCourt}
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
            FOOD COURT
            </Heading>
          </Flex>
          <Flex px=".312rem" textAlign="center" direction="column" align="center">
            <Image
              className="expandcar reveal"
              src={multiplex}
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
            8 SCREEN MULTIPLEX
            </Heading>
          </Flex>
          <Flex px=".312rem" textAlign="center" direction="column" align="center">
            <Image
              className="expandcar reveal"
              src={gamingArena}
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
            GAMING ARCADE
            </Heading>
          </Flex>
        </Slider>
      </Box>
    </Flex>)}
      <LocationAndFormMall />
    </>
  );
};

const LocationAndFormPlaza = () => {
  const [isOpen, setIsOpen]= useState(false);
  const closeImage =() =>{
    setIsOpen(false);
  }
  const openImage =() =>{
    setIsOpen(true);
  }
  return (
    <>
      {isOpen?<ModalImage modalImage={locationadv} isOpen={isOpen} onClose={()=>closeImage()} />:<></>}
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        pb="3.125rem"
        px={{ base: "0.938rem", lg: "6.25rem" }}
      >
        <Text
          px={{ base: "10rem", lg: "0" }}
          textAlign="center"
          fontFamily="goudy"
          pb="1.563rem"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          className="slidein-top revealOnce"
        >
          LOCATION ADVANTAGE
        </Text>
        <Flex
          w="100%"
          h="100%"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          pb="3.125rem"
        >
          <Flex
            display={{ base: "grid", lg: "flex" }}
            w={{ base: "100%", lg: "40%" }}
            h="100%"
            wrap="wrap"
            alignSelf={{ base: "none", lg: "center" }}
            justify={{ base: "flex-start", lg: "flex-start" }}
            gap={{ base: "1.125rem", lg: "0" }}
          >
            <SimpleGrid columns={{ base: "2", lg: "1" }}>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={{ base: "3.125rem", lg: "5rem" }}
                    h={{ base: "3.125rem", lg: "5rem" }}
                    src={institute}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    100+
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                </VStack>
              </Flex>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={company}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2000+
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    COMPANIES NEARBY
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  direction="column"
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={{ base: "3.125rem", lg: "5rem" }}
                    h={{ base: "3.125rem", lg: "5rem" }}
                    src={industry}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE INDUSTRIAL PARKS
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE <br />
                    INDUSTRIAL <br />
                    PARKS
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={port}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    3
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    MAJOR PORTS, SEZ
                  </Text>
                </VStack>
              </Flex>{" "}
            </SimpleGrid>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            overflow="hidden"
            // w="10%"
            h="100%"
            px="1.875rem"
          >
            <Flex
              className="discobal-slidein-top reveal"
              direction="column"
              justify="center"
              align="center"
              w="100%"
              h="100%"
            >
              <Divider
                h="2rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Image
              onClick={()=>{openImage()}}
              _hover={{ cursor: "pointer" }}
              className="Arete-Plaza-LocationAdv-Image reveal"
              boxShadow="2xl"
              w="100%"
              h={{ base: "20.625rem", lg: "29.25rem" }}
              objectFit="cover"
              objectPosition="center"
              src={locationadv}
            />
          </Flex>
        </Flex>
        <Flex w="100%" direction={{ base: "column", lg: "row" }}>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="0"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left1 revealOnce"
            >
              <Divider
                h={{ base: "1.6rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="0"
              w="100%"
              className="fadein revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                5 MINS
              </Heading>{" "}
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Velammal International School</ListItem>
                <ListItem pb="0.625rem">Origin By Mahindra</ListItem>
                <ListItem>Ponneri Railway Station</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="1"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left2 revealOnce"
            >
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "5.3rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="1"
              w="100%"
              className="fadein-2sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                10 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Connect To Outer Ring Road</ListItem>
                <ListItem pb="0.625rem">Siruvapuri Murugan Temple</ListItem>
                <ListItem pb="0.625rem">VELS Medical Hospital</ListItem>
                <ListItem>R.K.M. Engineering College</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="2"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left3 revealOnce"
            >
              <Divider
                h={{ base: "1.8rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.7rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="2"
              w="100%"
              className="fadein-4sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                20 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Gummidipoondi SIPCOT</ListItem>
                <ListItem pb="0.625rem">Amazon</ListItem>
                <ListItem pb="0.625rem">Minjur</ListItem>
                <ListItem>Pulicat Lake</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="3"
              className="discoball-slidein-left4 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                h={{ base: "0.55rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                display={{ base: "none", lg: "flex" }}
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="3"
              w="100%"
              className="fadein-6sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                30 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Sri City</ListItem>
                <ListItem pb="0.625rem">Kattupalli Adani Port</ListItem>
                <ListItem>Chennai Port</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        pt={{ base: "0", lg: "1.875rem" }}
        pb="5rem"
        align="center"
        justify="center"
        direction="column"
        bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        px={{ base: "1.563rem", lg: "0" }}
      >
        <Text
          w="100%"
          textAlign="center"
          className="slidein-top revealOnce"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          fontFamily="goudy"
          textTransform="uppercase"
          // px={{ base: "6rem", lg: "0" }}
          pb="1.563rem"
        >
          pre book & avail best offers
        </Text>

        <form
          className="fadein revealOnce"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.9rem">
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                NAME
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "1.875rem", lg: "3.125rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.9rem">
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                PHONE
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "1.875rem", lg: "3.125rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack w="100%" justify="space-between" pb="0.9rem">
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                EMAIL
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "1.875rem", lg: "3.125rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack
              w="100%"
              align="flex-start"
              justify="space-between"
              mb="1.5rem"
            >
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                REQUIREMENTS
              </FormLabel>
              <Textarea
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "5.625rem", lg: "11.25rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>
          </FormControl>
          <Button
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize={{ base: "0.875rem", lg: "1rem" }}
            fontFamily="avenir"
            p={{ base: "0.625rem", lg: "1rem" }}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            SUBMIT NOW
          </Button>
        </form>
      </Flex>
    </>
  );
};

const LocationAndFormMall = () => {const [isOpen, setIsOpen]= useState(false);
  const closeImage =() =>{
    setIsOpen(false);
  }
  const openImage =() =>{
    setIsOpen(true);
  }
  return (
    <>
      {isOpen?<ModalImage modalImage={locationadv} isOpen={isOpen} onClose={()=>closeImage()} />:<></>}
      <Flex
        mt="3.125rem"
        overflow="hidden"
        w="100%"
        h="100%"
        direction="column"
        align="center"
        justify="center"
        pt="1.875rem"
        pb="3.125rem"
        px={{ base: "0.938rem", lg: "6.25rem" }}
      >
        <Text
          px={{ base: "10rem", lg: "0" }}
          textAlign="center"
          fontFamily="goudy"
          pb="1.563rem"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          className="slidein-top revealOnce"
        >
          LOCATION ADVANTAGE
        </Text>
        <Flex
          w="100%"
          h="100%"
          justify="space-between"
          direction={{ base: "column", lg: "row" }}
          pb="3.125rem"
        >
          <Flex
            display={{ base: "grid", lg: "flex" }}
            w={{ base: "100%", lg: "40%" }}
            h="100%"
            wrap="wrap"
            alignSelf={{ base: "none", lg: "center" }}
            justify={{ base: "flex-start", lg: "flex-start" }}
            gap={{ base: "1.125rem", lg: "0" }}
          >
            <SimpleGrid columns={{ base: "2", lg: "1" }}>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={{ base: "3.125rem", lg: "5rem" }}
                    h={{ base: "3.125rem", lg: "5rem" }}
                    src={institute}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    100+
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    EDUCATIONAL <br /> INSTITUTES
                  </Text>
                </VStack>
              </Flex>
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={company}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2000+
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    COMPANIES NEARBY
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Box
                  direction="column"
                  w={"5rem"}
                  h={"5rem"}
                  align="center"
                  mr="1rem"
                  _hover={{ cursor: "pointer" }}
                >
                  <Image
                    w={{ base: "3.125rem", lg: "5rem" }}
                    h={{ base: "3.125rem", lg: "5rem" }}
                    src={industry}
                  />
                </Box>
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    2
                  </Heading>
                  <Text
                    display={{ base: "none", lg: "flex" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE INDUSTRIAL PARKS
                  </Text>
                  <Text
                    display={{ base: "flex", lg: "none" }}
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    LARGE <br />
                    INDUSTRIAL <br />
                    PARKS
                  </Text>
                </VStack>
              </Flex>{" "}
              <Flex pb="1.5rem" className="fadein revealOnce">
                <Image
                  w={{ base: "3.125rem", lg: "5rem" }}
                  h={{ base: "3.125rem", lg: "5rem" }}
                  src={port}
                  mr="1rem"
                />
                <VStack align="flex-start">
                  <Heading
                    fontFamily="avenir"
                    fontSize={{ base: "1.125rem", lg: "2.125rem" }}
                  >
                    3
                  </Heading>
                  <Text
                    fontFamily="veralaRound"
                    fontSize={{ base: "0.75rem", lg: "1rem" }}
                  >
                    MAJOR PORTS, SEZ
                  </Text>
                </VStack>
              </Flex>{" "}
            </SimpleGrid>
          </Flex>
          <Flex
            display={{ base: "none", lg: "flex" }}
            overflow="hidden"
            // w="10%"
            h="100%"
            px="1.875rem"
          >
            <Flex
              className="discobal-slidein-top reveal"
              direction="column"
              justify="center"
              align="center"
              w="100%"
              h="100%"
            >
              <Divider
                h="2rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
          </Flex>
          <Flex w="100%">
            <Image
              onClick={()=>{openImage()}}
              _hover={{ cursor: "pointer" }}
              className="Arete-Plaza-LocationAdv-Image reveal"
              boxShadow="2xl"
              w="100%"
              h={{ base: "20.625rem", lg: "29.25rem" }}
              objectFit="cover"
              objectPosition="center"
              src={locationadv}
            />
          </Flex>
        </Flex>
        <Flex w="100%" direction={{ base: "column", lg: "row" }}>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="0"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left1 revealOnce"
            >
              <Divider
                h={{ base: "1.6rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="0"
              w="100%"
              className="fadein revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                5 MINS
              </Heading>{" "}
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end" 
              >
                <ListItem pb="0.625rem">Velammal International School</ListItem>
                <ListItem pb="0.625rem">Origin By Mahindra</ListItem>
                <ListItem>Ponneri Railway Station</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="1"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left2 revealOnce"
            >
              <Divider
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "5.3rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="1"
              w="100%"
              className="fadein-2sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                10 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Connect To Outer Ring Road</ListItem>
                <ListItem pb="0.625rem">Siruvapuri Murugan Temple</ListItem>
                <ListItem pb="0.625rem">VELS Medical Hospital</ListItem>
                <ListItem>R.K.M. Engineering College</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="2"
              direction={{ base: "column", lg: "row" }}
              className="discoball-slidein-left3 revealOnce"
            >
              <Divider
                h={{ base: "1.8rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                h={{ base: "3.7rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="2"
              w="100%"
              className="fadein-4sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
              pb={{ base: "1.875rem", lg: "0" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                20 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Gummidipoondi SIPCOT</ListItem>
                <ListItem pb="0.625rem">Amazon</ListItem>
                <ListItem pb="0.625rem">Minjur</ListItem>
                <ListItem>Pulicat Lake</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
          <Flex
            w="100%"
            direction={{ base: "row", lg: "column" }}
            overflow="hidden"
          >
            {" "}
            <Flex
              w={{ base: "15%", lg: "100%" }}
              align="center"
              pb={{ base: "0", lg: "1.563rem" }}
              id="3"
              className="discoball-slidein-left4 revealOnce"
              direction={{ base: "column", lg: "row" }}
            >
              <Divider
                h={{ base: "0.55rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height={{ base: "1.563rem", lg: "1.875rem" }}
                width={{ base: "1.563rem  ", lg: "4rem" }}
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
              <Divider
                display={{ base: "none", lg: "flex" }}
                h={{ base: "3.5rem", lg: "0" }}
                w={{ base: "0", lg: "100%" }}
                orientation={{ base: "vertical", lg: "horizontal" }}
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
            </Flex>
            <Flex
              id="3"
              w="100%"
              className="fadein-6sdelay revealOnce"
              gap={{ base: "1.125rem", lg: "0" }}
              align="center"
              direction={{ base: "row", lg: "column" }}
            >
              <Heading
                w={{ base: "40%", lg: "100%" }}
                textAlign={{ base: "left", lg: "center" }}
                fontFamily="avenir"
                fontSize={{ base: "1.125rem", lg: "1.5rem" }}
                pb={{ base: "0", lg: "1rem" }}
              >
                30 MINS
              </Heading>
              <UnorderedList
                w={{ base: "55%", lg: "fit-content" }}
                fontFamily="veralaRound"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                justifySelf="flex-end"
              >
                <ListItem pb="0.625rem">Sri City</ListItem>
                <ListItem pb="0.625rem">Kattupalli Adani Port</ListItem>
                <ListItem>Chennai Port</ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        overflow="hidden"
        w="100%"
        h="100%"
        pt={{ base: "0", lg: "1.875rem" }}
        pb="5rem"
        align="center"
        justify="center"
        direction="column"
        bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
        bgRepeat="no-repeat"
        bgPos="center"
        bgSize="cover"
        px={{ base: "1.563rem", lg: "0" }}
      >
        <Text
          w="100%"
          textAlign="center"
          className="slidein-top revealOnce"
          fontSize={{ base: "1.5rem", lg: "2.5rem" }}
          fontFamily="goudy"
          textTransform="uppercase"
          // px={{ base: "6rem", lg: "0" }}
          pb="1.563rem"
        >
          pre book & avail best offers
        </Text>

        <form
          className="fadein revealOnce"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.9rem">
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                NAME
              </FormLabel>
              <Input
                fontSize="1rem"
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "1.875rem", lg: "3.125rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl isRequired>
            {" "}
            <HStack w="100%" justify="space-between" pb="0.9rem">
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                PHONE
              </FormLabel>
              <Input
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "1.875rem", lg: "3.125rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack w="100%" justify="space-between" pb="0.9rem">
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                EMAIL
              </FormLabel>
              <Input
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "1.875rem", lg: "3.125rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>{" "}
          </FormControl>
          <FormControl>
            <HStack
              w="100%"
              align="flex-start"
              justify="space-between"
              mb="1.5rem"
            >
              <FormLabel
                fontFamily="avenir"
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontWeight="bold"
              >
                REQUIREMENTS
              </FormLabel>
              <Textarea
                fontSize={{ base: "0.75rem", lg: "1rem" }}
                fontFamily="avenir"
                lineHeight="1.5rem"
                w={{ base: "12.75rem", lg: "21.875rem" }}
                h={{ base: "5.625rem", lg: "11.25rem" }}
                bgColor="#E5E5E5"
                borderRadius="none"
              />
            </HStack>
          </FormControl>
          <Button
            bgGradient="linear(to-b, #B88746 ,#DFBD69)"
            color="white"
            fontSize={{ base: "0.875rem", lg: "1rem" }}
            fontFamily="avenir"
            p={{ base: "0.625rem", lg: "1rem" }}
            _hover={{
              bgGradient: "linear(to-b, #DFBD69, #B88746)",
            }}
            _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          >
            SUBMIT NOW
          </Button>
        </form>
      </Flex>
    </>
  );
};
