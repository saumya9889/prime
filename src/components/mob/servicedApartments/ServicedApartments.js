import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  SimpleGrid,
  HStack,
  VStack,
  Grid,
  GridItem,
  Button,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Container,
  Checkbox,
  Icon,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React, { useLayoutEffect, useRef, useState } from "react";
import banner from "../../serviced apartments imgs/MIVAN TECHNOLOGY TOWER.jfif";
import apartment from "../../serviced apartments imgs/serviced apartments icons/smart way of living - 1st.svg";
import time from "../../serviced apartments imgs/serviced apartments icons/smart way of living-2nd.svg";
import ringbell from "../../serviced apartments imgs/serviced apartments icons/smart way of living -3rd.svg";
import edit from "../../serviced apartments imgs/serviced apartments icons/smart way of living -4th.svg";
import studentHousing from "../../serviced apartments imgs/group-indian-people.jpg";
import coliving from "../../serviced apartments imgs/arabian-men-women-sitting-kitchen-discussing-news.jpg";
import managedLiving from "../../serviced apartments imgs/portrait-happy-indian-asian-young-family-while-sitting-sofa-lying-floor-sitting-against-wall.jpg";
import television from "../../serviced apartments imgs/serviced apartments icons/telivision.svg";
import sofa from "../../serviced apartments imgs/serviced apartments icons/sofa.svg";
import REFRIGERATOR from "../../serviced apartments imgs/serviced apartments icons/refrigrator.svg";
import studyTable from "../../serviced apartments imgs/serviced apartments icons/study.svg";
import airConditioning from "../../serviced apartments imgs/serviced apartments icons/ac.svg";
import electricalPoints from "../../serviced apartments imgs/serviced apartments icons/electrical point.svg";
import wallMirror from "../../serviced apartments imgs/serviced apartments icons/wall mirror.svg";
import windowBalcony from "../../serviced apartments imgs/serviced apartments icons/window.svg";
import comfortableBed from "../../serviced apartments imgs/serviced apartments icons/bed.svg";
import cupboards from "../../serviced apartments imgs/serviced apartments icons/cupboard.svg";
import washrooms from "../../serviced apartments imgs/serviced apartments icons/washroom.svg";
import dinningTable from "../../serviced apartments imgs/serviced apartments icons/dining.svg";
import wifi from "../../serviced apartments imgs/serviced apartments icons/wifi.svg";
import housekeeping from "../../serviced apartments imgs/serviced apartments icons/house keeping.svg";
import laundry from "../../serviced apartments imgs/serviced apartments icons/laundry.svg";
import cctv from "../../serviced apartments imgs/serviced apartments icons/cctv.svg";
import meals from "../../serviced apartments imgs/serviced apartments icons/meals.svg";
import garbage from "../../serviced apartments imgs/serviced apartments icons/garbage schute.svg";
import cable from "../../serviced apartments imgs/serviced apartments icons/tv cable.svg";
import parking from "../../serviced apartments imgs/serviced apartments icons/parking.svg";
import toiletries from "../../serviced apartments imgs/serviced apartments icons/toiletries.svg";
// Grid Images
import partyArea from "../../serviced apartments imgs/party area.JPG";
import garden from "../../serviced apartments imgs/garden and jogging track.jpg";
import gym from "../../serviced apartments imgs/gym.JPG";
import meditation from "../../serviced apartments imgs/arete meditation retreat 3.jpg";
import sports from "../../serviced apartments imgs/multi sports arena.jpg";
import pool from "../../serviced apartments imgs/pool.JPG";
import exercise from "../../serviced apartments imgs/open exercise area.jpg";
import cafe from "../../serviced apartments imgs/cafe.jpg";

import manStanding from "../../serviced apartments imgs/1stock-removebg-preview.png";

// second grid
import hall from "../../serviced apartments imgs/8.jpeg";
import cricket from "../../serviced apartments imgs/d22de3dc-9dff-4ab2-a5ba-6c87a89e0e7a.JPG";
import kidsplaying from "../../serviced apartments imgs/kids play area.jpeg";
import badminton from "../../serviced apartments imgs/IMG_4483.jpg";
import tabletenis from "../../serviced apartments imgs/WhatsApp Image 2021-12-14 at 1.14.08 PM (1).jpeg";
import meditating from "../../serviced apartments imgs/meditate.png";
import yoga from "../../serviced apartments imgs/activity area.jpeg";
import planting from "../../serviced apartments imgs/WhatsApp Image 2020-06-05 at 10.51.57 PM.jpeg";

// icons
import temples from "../../serviced apartments imgs/LOCATION ADVANTAGE ICONS/TEMPLES.svg";
import hospitals from "../../serviced apartments imgs/LOCATION ADVANTAGE ICONS/HOSPITAL.svg";
import institute from "../../serviced apartments imgs/LOCATION ADVANTAGE ICONS/INSTITUTES.svg";
import social from "../../serviced apartments imgs/LOCATION ADVANTAGE ICONS/SOCIAL FABRIC.svg";
import industry from "../../serviced apartments imgs/LOCATION ADVANTAGE ICONS/INDUSTRY.svg";
import ports from "../../serviced apartments imgs/LOCATION ADVANTAGE ICONS/PORT.svg";
import { ImLocation } from "react-icons/im";
import Slider from "react-slick";

// logos
import herocoop from "../../serviced apartments imgs/HERO MOTOR CORP.jpg";
import velammal from "../../serviced apartments imgs/VELAMMAL.png";
import kobelco from "../../serviced apartments imgs/KOBELCO.png";
import siemens from "../../serviced apartments imgs/SIEMENS.png";
import lAndt from "../../serviced apartments imgs/L&T .png";
import adani from "../../serviced apartments imgs/ADANI.png";
import linde from "../../serviced apartments imgs/LINDE.png";
import yanmar from "../../serviced apartments imgs/YANMAR.png";
import DropDown from "./DropDown";
import "./serviceaptAnimation.css"
import "./serviceaptStyle.css"

import career1 from "../../serviced apartments imgs/1.JPG";
import career2 from "../../serviced apartments imgs/2.jpg";
import career3 from "../../serviced apartments imgs/3.JPG";
import career4 from "../../serviced apartments imgs/4.jpg";
import career5 from "../../serviced apartments imgs/5.jpg";
import career6 from "../../serviced apartments imgs/6.JPG";
import career7 from "../../serviced apartments imgs/7.jpg";
import lamp from "../../serviced apartments imgs/lamp.jpg";
import career9 from "../../serviced apartments imgs/9.jpeg";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { revealOnce } from "../../../hooks/util";
import { useInView } from "framer-motion";


const ServicedApartments = () => {
  const gMap=()=>{
    window.open("https://www.google.com/maps/place/Prime+LifeSpace+-+Arete+Homes,+Apartments+for+Sale,+Rent+in+Ponneri,+North+Chennai/@13.309566,80.170749,9z/data=!4m5!3m4!1s0x0:0xcf7f977ed8629c08!8m2!3d13.3095658!4d80.1707491?hl=en");
  };
  const [location,setLocation]= useState("default");
  const changeLocation=(ev)=>{
    setLocation(ev.target.id);
  }
  const locRef = useRef(null);
  const locIsInView = useInView(locRef, { once: true });
  const redirect =(loc) =>{
    window.localStorage.setItem('referEarnPage',false);
    window.location.replace(`${loc.target.id}`);
  }
  const [slider, setSlider] = useState(null);
  const settings = {
    infinite: true,
    autoplay: true,
    centerMode:true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const settings2 = {
    infinite: true,
    autoplay: true,
    centerMode:false,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    try{

    for (var i = 0; i <= reveals.length; i++) {
      
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i]
        ? reveals[i].getBoundingClientRect().top
        : null;
      var elementVisible = 200;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }catch(e){
    
  }
  }
  useLayoutEffect(()=>{
    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", revealOnce);
    return()=>{
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", revealOnce);
    }
  });
  return (
    <>
      {/* Banner section  */}
      <Flex zIndex="1" w="100%" h="100vh" pos="relative">
        <Image
          w="100%"
          h="100%"
          pos="absolute"
          src={banner}
          objectFit="cover"
          objectPosition="bottom"
        />
        <Flex
          pos="absolute"
          bottom="0"
          w="100%"
          h="100%"
          bgColor="rgba(0,0,0,0.4)"
          align="center"
          justify="center"
          color="white"
          direction="column"
          pt="7.25rem"
          overflow="hidden"
        >
          <Text
            textAlign="center"
            animation="serv-text-up 1 1s linear"
            fontFamily="goudy"
            fontSize="2.5rem"
            textShadow="black 1px 1px 10px"
            pb="1.563rem"
          >
            WELCOME TO<br/>ARETE HOMES!
          </Text>
          <Heading
            textAlign="center"
            animation="serv-text-down 1 1s linear"
            fontFamily="avenir"
            fontSize="1.5rem"
            textShadow="black 1px 1px 10px"
            pb="1rem"
          >
            PREMIUM RENTAL SERVICED APARTMENTS
          </Heading>
          <Flex
            w="100%"
            h="100%"
            direction="column"
            gap="1rem"
            align="center"
            justify="center"
            overflow="hidden"
            px="2rem"
          >
            <Box
            className="expandcar reveal"
            transition="all 2s 2s"
            position={"relative"}
            height={"100%"}
            width={"100%"}
            overflow={"hidden"}
            >
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
            <Slider {...settings2} ref={(slider) => setSlider(slider)}>
              <Flex direction="column" px="1rem">
                  <Image
                  w="100%"
                  h="15.625rem"
                  objectFit="cover"
                  src={studentHousing}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="15.625rem"
                  objectFit="cover"
                  src={coliving}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="15.625rem"
                  objectFit="cover"
                  src={managedLiving}
                />
                </Flex>
            </Slider>
            </Box>
            
          </Flex>
        </Flex>
      </Flex>
      {/** Smart way of living section  **/}
      <Flex
      px="1rem"
        overflow="hidden"
        w="100%"
        h="100%"
        align="center"
        direction="column"
        pb="3.125rem"
        bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
      >
        <Flex w="100%">
        <Text px="1rem" zIndex="5" bgImage="inherit" mt="-1.875rem" pt="1.875rem" fontFamily="goudy" textAlign="center" fontSize="2.125rem" pb="1.875rem" className="slidein-top revealOnce">
          A SMART WAY OF LIVING
        </Text>
        </Flex>
        
        <Flex direction="column" w="100%">
          <Flex px=".563rem" w="100%" align="center" justify="center" overflow="hidden">
          <Flex pr="1.875rem">
              <Flex 
              align="center"
              justify="center"
              direction="column">
              <Divider
              opacity={0}
              orientation="vertical"
              h=".9rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              className="fadein revealOnce"
              height="1.563rem"
              width="1.563rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              className="fadein revealOnce"
              display="flex"
              orientation="vertical"
              h="1rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
            </Flex>
            <Image w="3.125rem" h="3.125rem" src={apartment} className="fadein revealOnce"/>
            <Heading
              ml="1rem"
              className="fadein revealOnce"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your APARTMENT
            </Heading>
          </Flex>
          <Flex px=".563rem" w="100%" align="center" justify="center" overflow="hidden">
          <Flex pr="1.875rem">
              <Flex 
              align="center"
              justify="center"
              direction="column">
              <Divider
              className="fadein revealOnce"
              orientation="vertical"
              h=".9rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              className="fadein revealOnce"
              height="1.563rem"
              width="1.563rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              className="fadein revealOnce"
              display="flex"
              orientation="vertical"
              h="1rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
            </Flex>
            <Image w="3.125rem" h="3.125rem" src={time} className="fadein revealOnce"/>
            <Heading
              ml="1rem"
              className="fadein revealOnce"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your Rental Duration
            </Heading>
          </Flex>
          <Flex px=".563rem" w="100%" align="center" justify="center" overflow="hidden">
          <Flex pr="1.875rem">
              <Flex 
              align="center"
              justify="center"
              direction="column">
              <Divider
                className="fadein revealOnce"
              orientation="vertical"
              h="1.1rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              className="fadein revealOnce"
              height="1.563rem"
              width="1.563rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              className="fadein revealOnce"
              display="flex"
              orientation="vertical"
              h="1.1rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
            </Flex>
            <Image w="3.125rem" h="3.125rem" src={ringbell} className="fadein revealOnce"/>
            <Heading
              ml="1rem"
              className="fadein revealOnce"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Tailor the services your way
            </Heading>
          </Flex>
          <Flex px=".563rem" w="100%" align="center" justify="center" overflow="hidden">
          <Flex pr="1.875rem">
              <Flex 
              align="center"
              justify="center"
              direction="column">
              <Divider
                className="fadein revealOnce"
              orientation="vertical"
              h=".9rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
            <Box
              className="fadein revealOnce"
              height="1.563rem"
              width="1.563rem"
              backgroundColor="#DFBD69"
              border="3px solid #fff"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
            <Divider
              opacity={0}
              display="flex"
              orientation="vertical"
              h="1rem"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />
              </Flex>
            </Flex>
            <Image w="3.125rem" h="3.125rem" src={edit} className="fadein revealOnce"/>
            <Heading
              ml="1rem"
              className="fadein revealOnce"
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Agreement - get what you want
            </Heading>
          </Flex>
        </Flex>
      </Flex>
      {/** PREMIUM SMART HOMES section  **/}
      <Flex
        w="100%"
        h="100%"
        align="center"
        direction="column"
        pt="1.875rem"
        overflow="hidden"
      >
        {" "}
        <Text px="1rem" textAlign="center" fontFamily="goudy" fontSize="2.125rem" pb="1.563rem" className="slidein-top revealOnce">
          PREMIUM SMART HOMES
        </Text>
        <Text
          className="fadein revealOnce"
          textAlign="center"
          fontFamily="varela Round"
          fontSize="1rem"
          pb="1.563rem"
          px="1rem"
        >
          Arete Homes is a well-planned smart township that offers a taste of
          luxury in a rental flat at affordable pricing that feels owned. Our
          services cater for all - Bachelors, Students, Working Genre and
          Family.
        </Text>
        <Box
            className="expandcar reveal"
            transition="all 2s 2s"
            position={"relative"}
            height={"100%"}
            width={"100%"}
            overflow={"hidden"}
            >
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
            <Slider {...settings2} ref={(slider) => setSlider(slider)}>
              <Flex direction="column" px="1rem">
                  <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career1}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                  <Image w="100%" h="18.75rem" objectFit="cover" src={garden} />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career2}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career3}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career4}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career5}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career6}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career7}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={lamp}
                />
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={career9}
                />
                </Flex>
            </Slider>
            <Flex h="3.125rem" mt="1rem" pos="relative">
          <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              borderRadius="full"
              bottom="-5"
              right="30%"
              // transform={"translateX(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <AiOutlineRight color="#B88746" size="2.5rem" />
            </IconButton>
            <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              bottom="-5"
              left="30%"
              // transform={"translate(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
               <AiOutlineLeft color="#B88746" size="2.5rem" />
            </IconButton>
            </Flex>
            </Box>
      </Flex>
      {/** premium smart homes 2nd section **/}
      <Flex w="100%" h="100%" px="1rem" py="3.125rem" overflow="hidden" className="fadein revealOnce">
        <Flex w="100%" h="100%" align="flex-start" direction="column">
          {" "}
          <Flex w="100%" direction="column">
        <Flex
            w="100%"
            bgGradient="linear(to-b,#DFBD69, #B88746)"
            textTransform="uppercase"
          >
            <Text
              wordBreak="break-all"
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.625rem"
            >
              Configuration
            </Text>
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1rem"
              fontWeight="bold"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.625rem"
            >
              OCCUPANCY<br/>(MAX.)
            </Text>
          </Flex>
          <Flex w="100%" textTransform="uppercase">
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              border="1px solid #B88746"
              borderRight="none"
              textAlign="center"
              p="0.937rem"
            >
             2 BHK
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              p="0.937rem"
            >
              4 GUESTS
            </Heading>
          </Flex>
          <Flex w="100%" textTransform="uppercase">
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              border="1px solid #B88746"
              borderRight="none"
              textAlign="center"
              p="0.937rem"
            >
             2.5 BHK
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              p="0.937rem"
            >
             5 GUESTS
            </Heading>
          </Flex>
          <Flex w="100%" textTransform="uppercase">
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              border="1px solid #B88746"
              borderRight="none"
              textAlign="center"
              p="0.937rem"
            >
            3 BHK
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              p="0.937rem"
            >
            6 GUESTS
            </Heading>
          </Flex>
        </Flex>
          <Text pt="0.938rem" fontFamily="veralaRound" fontSize="1.125rem" pb="1.875rem">
            Rooms available for Private or Sharing use.
          </Text>
          <Heading px="1rem" w="100%" textAlign="center" fontFamily="avenir" fontSize="1.5rem" pb="1.25rem">
            FURNISHED AMENITIES
          </Heading>
          <SimpleGrid columns={2} spacing="1.563rem">
            {furnishedAmenities.map((items) => (
              <HStack key={items.title}>
                <Image h="1.875rem" w="1.875rem" src={items.icon} />
                <Heading fontFamily="avenir" fontSize=".75rem">
                  {items.title}
                </Heading>
              </HStack>
            ))}
          </SimpleGrid>
          <Flex mt="1.875rem" w="100%" h="25rem">
          <embed
            height="100%"
            width="100%"
            src={"https://www.youtube.com/embed/y_cXovtyWlM"}
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
          </Flex>
        </Flex>
      </Flex>
      <Flex bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover" w="100%" h="100%" direction="column" ml="0.5rem" mr="0.5rem" py="1.875rem" overflow="hidden">
        <Text
          px="1rem"
          className="slidein-top revealOnce"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.125rem"
          pb="1.875rem"
        >
          PREMIUM HOME SERVICES
        </Text>
        
          <SimpleGrid columns={3} px="1rem" spacing="1rem" className="fadein revealOnce">
          {premiumHouseSecond.map((item) => (
            <VStack>
              <Image h="3.125rem" w="3.125rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize=".75rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
          </SimpleGrid>
      </Flex>
      {/* amenities sec */}
      <Flex w="100%" h="100%" pt="3.125rem" pb="3.125rem" direction="column" overflow="hidden">
        <Text
          className="slidein-top revealOnce"
          w="100%"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.125rem"
          pb="1.563rem"
        >
          AMENITIES
        </Text>
        <Flex overflow="hidden">
        <Heading
          px="1rem"
          className="fadein revealOnce"
          w="100%"
          textAlign="center"
          fontFamily="avenir"
          fontSize="1.5rem"
          pb="1.563rem"
        >
          EVERYTHING UNDER ONE ROOF
        </Heading>
        </Flex>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex w="100%" h="100%">
          <Box
            className="expandcar reveal"
            transition="all 2s 2s"
            position={"relative"}
            height={"100%"}
            width={"100%"}
            overflow={"hidden"}
            >
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
            <Slider {...settings2} ref={(slider) => setSlider(slider)}>
              <Flex direction="column" px="1rem">
              <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={partyArea}
                />
                <Heading
                    fontFamily="avenir"
                    textAlign="center"
                    fontSize="1.25rem"
                    mt="1rem"
                  >
                    OPEN PARTY AREA
                  </Heading>
                </Flex>
                <Flex direction="column" px="1rem">
                <Image w="100%" h="18.75rem" objectFit="cover" src={garden} />
                <Heading
                    fontFamily="avenir"
                    textAlign="center"
                    fontSize="1.25rem"
                    mt="1rem"
                  >
                    GARDEN
                  </Heading>
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={gym}
                />
                <Heading
                    fontFamily="avenir"
                    textAlign="center"
                    fontSize="1.25rem"
                    mt="1rem"
                  >
                    GYM
                  </Heading>
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={meditation}
                />
                <Heading
                    fontFamily="avenir"
                    textAlign="center"
                    fontSize="1.25rem"
                    mt="1rem"
                  >
                    MEDITATION CENTRE
                  </Heading>
                </Flex>
                <Flex direction="column" px="1rem">
                <Image
                  w="100%"
                  h="18.75rem"
                  objectFit="cover"
                  src={sports}
                />
                <Heading
                    fontFamily="avenir"
                    textAlign="center"
                    fontSize="1.25rem"
                    mt="1rem"
                  >
                    MULTI SPORTS ARENA
                  </Heading>
                </Flex>
            </Slider>
            <Flex h="3.125rem" mt="1rem" pos="relative">
          <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              borderRadius="full"
              bottom="-5"
              right="30%"
              // transform={"translateX(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <AiOutlineRight color="#B88746" size="2.5rem" />
            </IconButton>
            <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              bottom="-5"
              left="30%"
              // transform={"translate(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
               <AiOutlineLeft color="#B88746" size="2.5rem" />
            </IconButton>
            </Flex>
            </Box>
            
            </Flex>
        </Flex>
      </Flex>
      {/*Arete Homes Img Galary*/}
      <Flex w="100%" h="100%" pt="1.875rem"
      overflow="hidden"
      direction="column"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
            <Text px="1rem" fontFamily="goudy" textAlign="center" fontSize="1.5rem" pb="1.563rem" className="slidein-top revealOnce">
              A LIFE WHERE YOU DON’T HAVE TO WAIT FOR WEEKENDS TO ENJOY
            </Text>
            <Text px="1rem"
              fontFamily="veralaRound"
              fontSize="1rem"
              textAlign="center"
            >
              Arete Homes aims to provide better experiences in every aspect of
              life. With innumerable activities lined up for you, there is so
              much to do, so little time.
            </Text>
            <Box
            mt="1rem"
            mb="3.125rem"
            transition="all 2s 2s"
            position={"relative"}
            height={"100%"}
            width={"100%"}
            overflow={"hidden"}
            >
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
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
            <Flex w="100%" px=".312rem">
              <Image
              w="100%"
               h="18.75rem"
                src={cricket}
              />
            </Flex>
            <Flex w="100%" px=".312rem">
                <Image
                w="100%"
                 h="18.75rem"
                src={hall}
              />
            </Flex>
            <Flex w="100%" px=".312rem">
                <Image
                w="100%"
                 h="18.75rem"
                src={kidsplaying} />
            </Flex>
            <Flex w="100%" px=".312rem">
                <Image
                w="100%"
                 h="18.75rem"
                src={tabletenis}
              />
            </Flex>
            <Flex w="100%" px=".312rem">
              <Image
              w="100%"
               h="18.75rem"
                src={yoga}
              />
            </Flex>
            <Flex w="100%" px=".312rem">
                <Image
                w="100%"
                 h="18.75rem"
                src={meditating} />
            </Flex>
            <Flex w="100%" px=".312rem">
                <Image
                w="100%"
                 h="18.75rem"
                src={planting}
              />
            </Flex>
            <Flex w="100%" px=".312rem">
              <Image
              w="100%"
               h="18.75rem"
                src={badminton}
              />
            </Flex>
            </Slider>
            </Box>            
      </Flex>
      {/*move in sec*/}
      <Flex
        overflow="hidden"
        w="100%"
        h="25rem"
        bgGradient="linear(to-b, #DFBD69, #B88746)"
        pos="relative"
        direction="column"
      >
        <Flex w="100%" h="100%">
          <Flex
            overflow="hidden"
            w="55%"
            h="100%"
            align="flex-start"
            justify="center"
            direction="column"
            pl="1rem"
            
          >
            <Flex overflow="hidden">
            <Heading
            
              className="fadein revealOnce"
              fontFamily="avenir"
              color="black"
              fontSize="1.125rem"
              pb="0.938rem"
            >
              MOVE IN WITH JUST YOUR CLOTHES
            </Heading>
            </Flex>
            <Flex overflow="hidden">
            <Heading
            
              className="fadein-2sdelay revealOnce"
              fontFamily="avenir"
              color="white"
              fontSize="1.125rem"
              pb="1rem"
            >
              WE GOT THE REST COVERED
            </Heading>
            </Flex>
            <Text fontFamily="veralaRound" fontSize="1rem" pb="1.563rem" className="fadein revealOnce">
              You can choose from an array of apartments with services and
              customize according to your needs.
            </Text>
            <Button
              id="/refer-and-earn"
              onClick={(e)=>redirect(e)}
              className="fadein revealOnce"
              bgColor="#000"
              color="#fff"
              _hover={{ bgColor: "#000", color: "#fff" }}
            >
              SCHEDULE A VISIT
            </Button>
          </Flex>
          <Flex w="45%" h="100%" pos="relative" align="center" justify="center" pb="1.6rem" >
            <Flex
              w="100%"
              h="20rem"
              pos="absolute"
              right="1rem"
              bgGradient="linear(to-b, #b88746, #B88746)"
              clipPath="polygon(10% 10%, 100% 40%, 35% 100%)"
            />
            <Image pos="absolute" h="18.75rem" src={manStanding} />
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              bgGradient="linear(to-b, #CBA257,#BD8E4B)"
              clipPath="polygon(68% 70%, 100% 100%, 35% 100%)"
            />
          </Flex>
        </Flex>
      </Flex>
      {/* location advantage */}
      <Flex
      ref={locRef}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        textAlign="center"
        transform={locIsInView ? "translate(0)" : "translateY(-50px)"}
        opacity={locIsInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </Text>
      <Heading
        textAlign="center"
        transform={locIsInView ? "translate(0)" : "translateY(50px)"}
        opacity={locIsInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="1.125rem"
        pt="1.563rem"
        pb="1.563rem"
      >
        PONNERI - A SMART CITY BY JICA
      </Heading>
      <Flex direction="column" w="100%" h="100%" align="flex-start" justify="flex-start">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <SimpleGrid
            w="100%"
            h="100%"
            mb="20px"
            columns={3}
            gap="1rem"
          >
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)} 
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="temples"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/TEMPLES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                TEMPLES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="hospital"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/HOSPITAL.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                HOSPITALS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="education"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/INSTITUTES.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px" textAlign="center">
                EDUCATIONAL <br />
                INSTITUTES
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="entertainment"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/SOCIAL FABRIC.svg"
                />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                SOCIAL
                <br /> FABRIC
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image
                  id="itpark"
                  w="30px"
                  h="30px"
                  src="/images/arete-homes/INDUSTRY.svg"
                />
              </Box>
              <Heading textAlign="center" fontFamily="avenir" fontSize="14px">
                INDUSTRIAL <br />
                PARKS
              </Heading>
            </VStack>
            <VStack align="center">
              <Box
                onClick={(e)=>changeLocation(e)}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                _hover={{ cursor: "pointer" }}
              >
                <Image id="ports" w="30px" h="30px" src="/images/arete-homes/PORT.svg" />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                PORTS
              </Heading>
            </VStack>
          </SimpleGrid>
          <Flex
            transform={locIsInView ? "scale(1)" : "scale(0.6)"}
            transition="all 2s"
            w="100%"
            h="100%"
            mb="15px"
          >
            {location==="default"?<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d608248.2710182373!2d80.01102171706503!3d13.341951137783246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a527f20d7084cd7%3A0xcf7f977ed8629c08!2sPrime%20LifeSpace%20-%20Arete%20Homes%2C%20Apartments%20for%20Sale%2C%20Rent%20in%20Ponneri%2C%20North%20Chennai!5e0!3m2!1sen!2sin!4v1673605589759!5m2!1sen!2sin"
          class="gmap_iframe"
              width="100%"
              height="350"
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0">
        </iframe>:<></>}
            {location==="temples"?<iframe src="https://www.google.com/maps/d/embed?mid=1SLUxNBnv1ngRxRWQjM6aqzGaqju0OV0&hl=en&ehbc=2E312F"
            class="gmap_iframe"
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
            </iframe>:<></>}
            {location==="ports"?<iframe src="https://www.google.com/maps/d/embed?mid=1kok6j573KVL_Dhk2UU5kkbQ2nTiilyg&hl=en&ehbc=2E312F"
            class="gmap_iframe"
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
            </iframe>:<></>}
            {location==="itpark"?<iframe src="https://www.google.com/maps/d/embed?mid=1iIxPSzS9nTmK4SlzmPcJaCK3mWhEEWQ&hl=en&ehbc=2E312F" 
            class="gmap_iframe"
            width="100%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
          </iframe>:<></>}
          {location==="hospital"?<iframe src="https://www.google.com/maps/d/embed?mid=1RbraLY35qn-_srxzJjXk4AYl3aTWiTM&hl=en&ehbc=2E312F"
          class="gmap_iframe"
          width="100%"
          height="350"
          frameBorder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0">
        </iframe>:<></>}
        {location==="education"?<iframe src="https://www.google.com/maps/d/embed?mid=1WZ4D6cZM0aMphZYfhXsKKY0debNhDdo&hl=en&ehbc=2E312F" 
        class="gmap_iframe"
        width="100%"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>:<></>}
        {location==="entertainment"?<iframe src="https://www.google.com/maps/d/embed?mid=1nyO5GwDVSgvp_yPCc3cGU5zapiLYYg0&hl=en&ehbc=2E312F"
        class="gmap_iframe"
        width="100%"
        height="350"
        frameBorder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>:<></>}
          </Flex>
          
          <Flex w="100%" h="100%">
              <Button
                onClick={()=>gMap()}
                w="100%"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              >
                SHOW LOCATION ON GOOGLE MAPS
              </Button>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          <Flex h="100%" direction="column" pr="1rem">
          <Flex
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.7rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 2s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="7.7rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 4s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="6.7rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 6s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="6.3rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 8s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.5rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
            <Flex
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 10s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="1.1rem"
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.25rem"
                width="1.25rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />
            </Flex>
          </Flex>
          <Flex
            mt="2rem"
            h="100%"
            direction="column"
            align="flex-start"
            justify="space-between"
            pr="0.938rem"
          >
            <Heading
              pt="3.425rem"
              transform={locIsInView ? "none" : "translateX(-100px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              5 Mins
            </Heading>
            <Heading
              pt="8.5rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 2s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              10 Mins
            </Heading>
            <Heading
              pt="7.2rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 4s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              20 Mins
            </Heading>
            <Heading
              pt="7rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 6s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              30 Mins
            </Heading>
            <Heading
              pt="5.5rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 8s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              40 Mins
            </Heading>
            <Heading
              pt="2.1rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 10s"
              fontFamily="avenir"
              fontSize="1rem"
            >
              2 Hours
            </Heading>
          </Flex>
          <Flex w="65%" h="100%" direction="column" gap="1.875rem">
            <UnorderedList
              pt="1.875rem"
              transform={locIsInView ? "none" : "translateX(-100px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.312rem">
                Walk to Velammal International School{" "}
              </ListItem>
              <ListItem pb="0.312rem">Drive To Origin by Mahindra </ListItem>
              <ListItem>Drive To Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 2s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.312rem">Connect To Outer Ring Road</ListItem>
              <ListItem pb="0.312rem">
                Drive To Siruvapuri Murugan Temple{" "}
              </ListItem>
              <ListItem>Vels Medical Hospital</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 4s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.312rem">Drive To Redhills</ListItem>
              <ListItem pb="0.312rem">Pulicat Lake </ListItem>
              <ListItem>Drive To Gummidipoondi Sipcot</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 6s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.312rem">Drive To Sri City</ListItem>
              <ListItem pb="0.312rem">Drive To Adani Port</ListItem>
              <ListItem>Drive To Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 8s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              {" "}
              <ListItem>Drive To Chennai Airport</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 10s"
              display="flex"
              flexDir="column"
              textTransform="capitalize"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              {" "}
              <ListItem>Drive T0 Tirupati</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
      <Flex w="100%" h="100%" direction="column">
        <Flex pb="3.125rem" px="1rem" w="100%" h="100%" direction="column" overflow="hidden">
          <Heading
            className="slidein-top revealOnce"
            w="100%"
            textAlign="center"
            fontSize="2.125rem"
            fontFamily="goudy"
            fontWeight="400"
          >
            TESTIMONIALS
          </Heading>{" "}
          <Flex className="fadein revealOnce" pos="relative">
            <Icon
              pos="absolute"
              left="-1%"
              top="1.75rem"
              w="4.375rem"
              h="3.125rem"
              as={ImQuotesLeft}
              color="#DFBD69"
            />
            <TestimonialCarousel testimonial={testimonial} />{" "}
            <Icon
              mr="4"
              color="#DFBD69"
              pos="absolute"
              right="-1.25rem"
              bottom="10rem"
              zIndex="10"
              w="4.375rem"
              h="3.125rem"
              as={ImQuotesRight}
            />
          </Flex>
        </Flex>
        <Flex
      direction="column"
      w="100%"
      h="100%"
      // pt="3.125rem"
      pb="3.125rem"
      pt="1.875rem"
      px="1rem"
      align="center"
      justify="center"
      pos="relative"
      overflow="hidden"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
    >
      <Heading
        className="slidein-top revealOnce"
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.125rem"
        pb="1.563rem"
      >
        SCHEDULE A VISIT
      </Heading>
      <Container
        className="fadein revealOnce"
        minw="container.sm"
      >
        {" "}
        <form>
          <FormControl align="center" justify="center">
            <VStack align="flex-start">
              <Flex
                w="100%"
                align="flex-end"
                justify="space-between"
                pb="0.437rem"
              >
                <Flex direction="row" gap="0">
                <FormControl isRequired>
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="0.875rem"
                  htmlFor="name"
                >
                  NAME
                </FormLabel>
                </FormControl>
                </Flex>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                  borderWidth="2px"
                  errorBorderColor="crimson"
                />
              </Flex>
              <Flex w="100%" align="center" justify="space-between" pb="0.437rem">
                <Flex direction="row" gap="0">
                <FormControl isRequired>
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="0.875rem"
                  htmlFor="phoneNo"
                >
                  PHONE
                </FormLabel>
                </FormControl>
                </Flex>
                <Input
                  id="phoneNo"
                  name="phoneNo"
                  type="number"
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                />
                
              </Flex>
              <Flex w="100%" align="center" justify="space-between" pb="0.437rem">
                <FormLabel
                  fontFamily="avenir"
                  fontWeight="700"
                  fontSize="0.875rem"
                  htmlFor="email"
                >
                  EMAIL
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  w="11.75rem"
                  h="2.5rem"
                  bgColor="#E5E5E5"
                  borderRadius="none"
                  fontFamily="veralaRound"
                  fontSize="1rem"
                  isRequired
                />
              </Flex>
            </VStack>
            <FormControl>
                <HStack w="100%" align="center" justify="center">
                  <Checkbox
                    mt="1rem"
                    ml="1rem"
                    value="yes"
                    fontFamily="veralaRound"
                    fontSize="1rem"
                    size="lg"
                  >
                    Book a visit
                  </Checkbox>
                </HStack>
              </FormControl>
            <Button
              type="submit"
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
              SUBMIT NOW
            </Button>
          </FormControl>
        </form>
      </Container>
    </Flex>
      </Flex>
      <DropDown />
    </>
  );
};

export default ServicedApartments;

const TestimonialCarousel = (props) => {
  const { testimonial } = props;
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Box
      position={"relative"}
      width={"full"}
      height={"full"}
      overflow={"hidden"}
    >
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

      <Slider {...settings} style={{ display: "flex" }}>
        {testimonial.map((tes) => (
          <Flex
            align="center"
            justify="space-between"
            flexDirection="column"
            w="100%"
            mt="1.875rem"
            key={tes.name}
            height={"100%"}
          >
            <Text
              fontSize="1rem"
              fontFamily="veralaRound"
              textAlign="center"
              pt="3.25rem"
              px="2.188rem"
            >
              {tes.text}
            </Text>
            <Flex
              w="100%"
              pt="1.563rem"
              align="center"
              justify="flex-start"
              direction="column"
            >
              <Text fontFamily="veralaRound" fontSize="1.25rem" pb="0.625rem">
                {tes.name}
              </Text>
              <Image
                w="17.75rem"
                h="6.25rem"
                objectFit="contain"
                src={tes.logo}
              />
            </Flex>
          </Flex>
        ))}
      </Slider>
    </Box>
  );
};

const furnishedAmenities = [
  {
    icon: television,
    title: "TELEVISION",
  },
  {
    icon: sofa,
    title: "5 SEATED SOFA",
  },
  {
    icon: REFRIGERATOR,
    title: "REFRIGERATOR",
  },
  {
    icon: studyTable,
    title: "STUDY TABLE",
  },
  {
    icon: airConditioning,
    title: "AIR CONDITIONING",
  },
  {
    icon: electricalPoints,
    title: "ELECTRICAL POINTS",
  },
  {
    icon: wallMirror,
    title: "WALL MIRROR",
  },
  {
    icon: windowBalcony,
    title: "WINDOW BALCONY",
  },
  {
    icon: comfortableBed,
    title: "COMFORTABLE BEDS",
  },
  {
    icon: cupboards,
    title: "SPACIOUS CUPBOARDS",
  },
  {
    icon: washrooms,
    title: "CLEAN WASHROOMS",
  },
  {
    icon: dinningTable,
    title: "6 SEATER DINING TABLE",
  },
];

const premiumHouseFirst = [
  
];

const premiumHouseSecond = [
  {
    icon: wifi,
    title: "HIGH SPEED WIFI",
  },
  {
    icon: housekeeping,
    title: "HOUSEKEEPING SERVICE",
  },
  {
    icon: laundry,
    title: "LAUNDRY SERVICE",
  },
  {
    icon: cctv,
    title: "CCTV SURVEILLANCE",
  },
  {
    icon: meals,
    title: "DELICIOUS MEALS",
  },
  {
    icon: garbage,
    title: "GARBAGE SCHUTE",
  },
  {
    icon: cable,
    title: "TV CABLE",
  },
  {
    icon: parking,
    title: "PARKING",
  },
  {
    icon: toiletries,
    title: "FREE TOILETRIES",
  },
];

const testimonial = [
  {
    text: "I’m glad I got a home with all the requirements of my family, my kids have school nearby and my work is just a few mins drive. It’s the most convenient location and one of the finest township.",
    name: "MR. K SHEKHAR",
    logo: herocoop,
  },
  {
    text: "I have never seen a well-designed township especially for sports lover. Arete Homes covers the needs of all age groups, fantastically developed sports arena, entertainment zones, meditation centre, fitness gym etc.",
    name: "MR. SADAGOPAN SATHISH ",
    logo: velammal,
  },
  {
    text: "At Arete Homes, I feel like I’m living in a resort. It’s wonderful and well designed for modern lifestyle.",
    name: "MR. MADHAN",
    logo: kobelco,
  },
  {
    text: "A best project in a beautiful environment but still at an affordable rate in North Chennai.",
    name: "MR. ANAND",
    logo: siemens,
  },
  {
    text: "This township is beyond excellence & combined this with the upcoming future developments this is the best investment destination iof Chennai. It’s already giving highest returns!",
    name: "MR. KUMAR",
    logo: lAndt,
  },
  {
    text: "We own a 2 BHK and its worth every penny and the construction quality is very good. The team is very helpful in securing home loan and throughout the home buying till the end.",
    name: "mr. mageshkumar",
    logo: adani,
  },
  {
    text: "i’m very happy to be living in integrate Smart Township, it’s like a dream! I have also invested in a property here, it gives the highest returns.",
    name: "mr. DK SINGH",
    logo: linde,
  },
  {
    text: "Hats off to the team for their dedication to the project as they made it with the best quality & beautifully! With malaysian MIVAN technology, they have delivered the best product as promised! I’m glad to be a part of Arete Homes.",
    name: "MR. K PANDIYAN",
    logo: yanmar,
  },
];
