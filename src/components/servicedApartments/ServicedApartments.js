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
  IconButton,
} from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React, { useLayoutEffect, useRef, useState } from "react";
import banner from "../serviced apartments imgs/MIVAN TECHNOLOGY TOWER.jfif";
import apartment from "../serviced apartments imgs/serviced apartments icons/smart way of living - 1st.svg";
import time from "../serviced apartments imgs/serviced apartments icons/smart way of living-2nd.svg";
import ringbell from "../serviced apartments imgs/serviced apartments icons/smart way of living -3rd.svg";
import edit from "../serviced apartments imgs/serviced apartments icons/smart way of living -4th.svg";
import studentHousing from "../serviced apartments imgs/group-indian-people.jpg";
import coliving from "../serviced apartments imgs/arabian-men-women-sitting-kitchen-discussing-news.jpg";
import managedLiving from "../serviced apartments imgs/portrait-happy-indian-asian-young-family-while-sitting-sofa-lying-floor-sitting-against-wall.jpg";
import television from "../serviced apartments imgs/serviced apartments icons/telivision.svg";
import sofa from "../serviced apartments imgs/serviced apartments icons/sofa.svg";
import REFRIGERATOR from "../serviced apartments imgs/serviced apartments icons/refrigrator.svg";
import studyTable from "../serviced apartments imgs/serviced apartments icons/study.svg";
import airConditioning from "../serviced apartments imgs/serviced apartments icons/ac.svg";
import electricalPoints from "../serviced apartments imgs/serviced apartments icons/electrical point.svg";
import wallMirror from "../serviced apartments imgs/serviced apartments icons/wall mirror.svg";
import windowBalcony from "../serviced apartments imgs/serviced apartments icons/window.svg";
import comfortableBed from "../serviced apartments imgs/serviced apartments icons/bed.svg";
import cupboards from "../serviced apartments imgs/serviced apartments icons/cupboard.svg";
import washrooms from "../serviced apartments imgs/serviced apartments icons/washroom.svg";
import dinningTable from "../serviced apartments imgs/serviced apartments icons/dining.svg";
import wifi from "../serviced apartments imgs/serviced apartments icons/wifi.svg";
import housekeeping from "../serviced apartments imgs/serviced apartments icons/house keeping.svg";
import laundry from "../serviced apartments imgs/serviced apartments icons/laundry.svg";
import cctv from "../serviced apartments imgs/serviced apartments icons/cctv.svg";
import meals from "../serviced apartments imgs/serviced apartments icons/meals.svg";
import garbage from "../serviced apartments imgs/serviced apartments icons/garbage schute.svg";
import cable from "../serviced apartments imgs/serviced apartments icons/tv cable.svg";
import parking from "../serviced apartments imgs/serviced apartments icons/parking.svg";
import toiletries from "../serviced apartments imgs/serviced apartments icons/toiletries.svg";
// Grid Images
import partyArea from "../serviced apartments imgs/party area.JPG";
import garden from "../serviced apartments imgs/garden and jogging track.jpg";
import gym from "../serviced apartments imgs/gym.JPG";
import meditation from "../serviced apartments imgs/arete meditation retreat 3.jpg";
import sports from "../serviced apartments imgs/multi sports arena.jpg";
import pool from "../serviced apartments imgs/pool.JPG";
import exercise from "../serviced apartments imgs/open exercise area.jpg";
import cafe from "../serviced apartments imgs/cafe.jpg";

import manStanding from "../serviced apartments imgs/1stock-removebg-preview.png";

// second grid
import hall from "../serviced apartments imgs/8.jpeg";
import cricket from "../serviced apartments imgs/d22de3dc-9dff-4ab2-a5ba-6c87a89e0e7a.JPG";
import kidsplaying from "../serviced apartments imgs/kids play area.jpeg";
import badminton from "../serviced apartments imgs/IMG_4483.jpg";
import tabletenis from "../serviced apartments imgs/WhatsApp Image 2021-12-14 at 1.14.08 PM (1).jpeg";
import meditating from "../serviced apartments imgs/meditate.png";
import yoga from "../serviced apartments imgs/activity area.jpeg";
import planting from "../serviced apartments imgs/WhatsApp Image 2020-06-05 at 10.51.57 PM.jpeg";

// icons
import temples from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/TEMPLES.svg";
import hospitals from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/HOSPITAL.svg";
import institute from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/INSTITUTES.svg";
import social from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/SOCIAL FABRIC.svg";
import industry from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/INDUSTRY.svg";
import ports from "../serviced apartments imgs/LOCATION ADVANTAGE ICONS/PORT.svg";
import { ImLocation } from "react-icons/im";
import Slider from "react-slick";

// logos
import adani from "../invest/tenLogo/ADANI.png";
import herocoop from "../invest/tenLogo/HERO.jpg";
import kobelco from "../invest/tenLogo/KOBELCO.png";
import linde from "../invest/tenLogo/LINDE.png";
import lAndt from "../invest/tenLogo/LnT.png";
import siemens from "../invest/tenLogo/SIEMENS.png";
import velammal from "../invest/tenLogo/VELAMMAL.png";
import yanmar from "../invest/tenLogo/YANMAR.png";

import DropDown from "./DropDown";
import "./serviceaptAnimation.css"
import "./serviceaptStyle.css"
import { revealOnce } from "../../hooks/util";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useInView } from "framer-motion";
import career1 from "../serviced apartments imgs/1.JPG";
import career2 from "../serviced apartments imgs/2.jpg";
import career3 from "../serviced apartments imgs/3.JPG";
import career4 from "../serviced apartments imgs/4.jpg";
import career5 from "../serviced apartments imgs/5.jpg";
import career6 from "../serviced apartments imgs/6.JPG";
import career7 from "../serviced apartments imgs/7.jpg";
import lamp from "../serviced apartments imgs/lamp.jpg";
import career9 from "../serviced apartments imgs/9.jpeg";
import EnquireWindow from "../enquireWindow";

const ServicedApartments = () => {
  // const [isOpened, setIsOpened]= useState(false);
  // const closeEnquire =() =>{
  //   setIsOpened(false);
  // }
  // const openEnquire =() =>{
  //   setIsOpened(true);
  // }
  const redirect =(loc) =>{
    window.localStorage.setItem('referEarnPage',false);
    window.location.replace(`${loc.target.id}`);
  }
  const [location,setLocation]= useState("default");
  const changeLocation=(ev)=>{
    console.log(ev.target);
    setLocation(ev.target.id);
  }
  const images = [career1, career2, career3, career4, career5, career6, career7,lamp,career9];
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const smartWayRef = useRef(null);
  const smartWayIsInView = useInView(smartWayRef, { once: true });
  const smartHomeRef = useRef(null);
  const isInView = useInView(smartHomeRef, { once: true });
  const locRef = useRef(null);
  const locIsInView = useInView(locRef, { once: true });
  const aretGalRef = useRef(null);
  const aretGalIsInView = useInView(aretGalRef, { once: true });
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
  const settings = {
    draggable: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: false,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };
  return (
    <>
      {/* Banner section  */}
      {/* {isOpened?<EnquireWindow isOpened={isOpened} onClosed={()=>closeEnquire()} />:<></>} */}

      <Flex w="100%" h="100vh" pos="relative">
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
            animation="serv-text-up 1 1s linear"
            fontFamily="goudy"
            fontSize="3rem"
            textShadow="black 1px 1px 10px"
            pb="1.563rem"
          >
            WELCOME TO ARETE HOMES!
          </Text>
          <Heading
            animation="serv-text-down 1 1s linear"
            fontFamily="avenir"
            fontSize="2.125rem"
            textShadow="black 1px 1px 10px"
            pb="4.5rem"
          >
            PREMIUM RENTAL SERVICED APARTMENTS
          </Heading>
          <Flex
            w="100%"
            h="100%"
            gap="1rem"
            align="center"
            justify="center"
            px="11.25rem"
            overflow="hidden"
          >
            <Box w="100%" pos="relative" animation="serv-text-down 1 2s linear">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                src={studentHousing}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                STUDENT HOUSING
              </Heading>
            </Box>
            <Box w="100%" pos="relative" animation="serv-text-down 1 2s linear">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                objectPosition="left"
                src={coliving}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                CO-LIVING FOR PROFESSIONALS
              </Heading>
            </Box>
            <Box w="100%" pos="relative" animation="serv-text-down 1 2s linear">
              <Image
                w="100%"
                h="18.75rem"
                objectFit="cover"
                src={managedLiving}
              />
              <Heading
                textAlign="center"
                w="100%"
                fontFamily="avenir"
                fontSize="1.5rem"
                pos="absolute"
                bottom="1.563rem"
                textShadow="black 1px 1px 10px"
              >
                MANAGED LIVING
              </Heading>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/** Smart way of living section  **/}
      <Flex
        ref={smartWayRef}
        overflow="hidden"
        w="100%"
        h="100%"
        px="6.25rem"
        align="center"
        direction="column"
        pt="3.125rem"
        pb="3.125rem"
      >
        <Text fontFamily="goudy" fontSize="2.5rem" pb="1.875rem" className="slidein-top revealOnce">
          A SMART WAY OF LIVING
        </Text>
        <Flex w="100%" h="100%" gap="1.25rem">
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={apartment} opacity={smartWayIsInView?1:0} transitionDelay={"2s"}/>
            <Flex w="100%" align="center" mb="1rem" opacity={smartWayIsInView?1:0} transitionDelay={"2s"} pr=".5rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              opacity={smartWayIsInView?1:0} transitionDelay={"2s"}
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your APARTMENT
            </Heading>
            <Heading
              opacity={0}
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={time} opacity={smartWayIsInView?1:0} transitionDelay={"3s"}/>
            <Flex w="100%" align="center" mb="1rem" opacity={smartWayIsInView?1:0} transitionDelay={"3s"} pr=".5rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              opacity={smartWayIsInView?1:0} transitionDelay={"3s"}
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Choose your Rental Duration
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={ringbell} opacity={smartWayIsInView?1:0} transitionDelay={"4s"}/>
            <Flex w="100%" align="center" mb="1rem" opacity={smartWayIsInView?1:0} transitionDelay={"4s"} pr=".5rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              opacity={smartWayIsInView?1:0} transitionDelay={"4s"}
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              textTransform="uppercase"
            >
              Tailor the services your way
            </Heading>
          </Flex>
          <Flex w="100%" align="center" justify="center" direction="column" overflow="hidden">
            <Image mb="1rem" src={edit} opacity={smartWayIsInView?1:0} transitionDelay={"5s"}/>
            <Flex w="100%" align="center" mb="1rem" opacity={smartWayIsInView?1:0} transitionDelay={"5s"} pr=".5rem">
              {" "}
              <Divider
                orientation="horizontal"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
              />
              <Box
                height="1.875rem"
                width="2.2rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
                my="1"
              />{" "}
            </Flex>
            <Heading
              opacity={smartWayIsInView?1:0} transitionDelay={"5s"}
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
      overflow="hidden"
      ref={smartHomeRef}
      w="100%"
      h="100%"
      direction="column"
      textAlign="center"
      px="1.562rem"
      pt="1.875rem"
      pb="1.875rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Heading
        px="6.25rem"
        className="slidein-top revealOnce"
        fontSize="2.5rem"
        fontFamily="goudy"
        fontWeight="400"
        pb="1.563rem"
      >
        PREMIUM SMART HOMES
      </Heading>
      <Text
        px="6.25rem"
        className="fadein revealOnce"
        fontSize="1rem"
        fontFamily="veralaRound"
        pb="1.563rem"
      >
        Arete Homes is a well-planned smart township that offers a taste of
          luxury in a rental flat at affordable pricing that feels owned. Our
          services cater for all - Bachelors, Students, Working Genre and
          Family.
      </Text>
      <Flex w="100%" h="100%">
        {" "}
        <Box
          className="fadein revealOnce"
          position={"relative"}
          height={"100%"}
          width={"full"}
          overflow={"hidden"}
          pl="4.687rem"
          pr="3.437rem"
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
            {images.map((prime) => (
              <Flex pr="20px">
                <Image
                  key={prime}
                  w="100%"
                  h="25rem"
                  position="relative"
                  objectPosition="center top"
                  backgroundRepeat="no-repeat"
                  objectFit="cover"
                  src={prime}
                />
              </Flex>
            ))}
          </Slider>
          <IconButton
            className="fadein revealOnce"
            aria-label="left-arrow"
            variant="outline"
            borderColor="#B88746"
            borderRadius="full"
            border="3px solid"
            position="absolute"
            top="50%"
            left="0"
            h="3.125rem"
            w="3.125rem"
            transform={"translate(0%, -50%)"}
            zIndex={2}
            onClick={() => {
              slider?.slickPrev();
              setCurrentSlide(currentSlide--);
            }}
          >
            <AiOutlineLeft color="#B88746" size="2.5rem" />
          </IconButton>

          <IconButton
            className="fadein revealOnce"
            aria-label="right-arrow"
            borderRadius="full"
            border="3px solid"
            variant="outline"
            borderColor="#B88746"
            position="absolute"
            transform={"translate(0%, -50%)"}
            zIndex={2}
            right="0"
            top="50%"
            h="3.125rem"
            w="3.125rem"
            onClick={() => {
              slider?.slickNext();
              // setCurrentSlide(currentSlide++);
            }}
          >
            <AiOutlineRight color="#B88746" size="2.5rem" />
          </IconButton>
        </Box>
      </Flex>
    </Flex>
      {/** premium smart homes 2nd section **/}
      <Flex w="100%" h="100%" px="6.25rem" pt="1.875rem" pb="3.125rem" overflow="hidden">
        <Flex w="30%" className="expandcar revealOnce">
        <embed
            height="100%"
            width="100%"
            type="video/webm"
            src="https://www.instagram.com/reel/MDJmNzVkMjY"
            title="The Economic Times | Best Realty Brands 2021 - Prime LifeSpace Developers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></embed>
        </Flex>
        <Flex
          className="discoup reveal"
          w="5rem"
          h="100%"
          direction="column"
          justify="center"
          align="center"
        >
          {" "}
          <Divider
            h="18rem"
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
        <Flex w="60%" h="100%" align="flex-start" direction="column" className="fadein revealOnce">
          {" "}
          <TableContainer pb="1rem">
            <Table>
              <Thead
                textTransform="uppercase"
                bgGradient="linear(to-b, #DFBD69, #B88746)"
              >
                {" "}
                <Tr>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    px="4rem"
                    py="1.125rem"
                  >
                    Configuration
                  </Th>
                  <Th
                    fontFamily="veralaRound"
                    fontSize="1.25rem"
                    fontWeight="400"
                    color="white"
                    textAlign="center"
                    border="1px solid #B88746"
                    px="4rem"
                    py="1.125rem"
                  >
                    OCCUPANCY (MAX.)
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      2 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      4 GUESTS
                    </Heading>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      2.5 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      5 GUESTS
                    </Heading>
                  </Td>
                </Tr>
                <Tr>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      3 BHK
                    </Heading>
                  </Td>
                  <Td
                    w="100%"
                    textAlign="left"
                    fontFamily="veralaRound"
                    fontSize="1.125rem"
                    border="1px solid #B88746"
                    p="1rem"
                  >
                    <Heading
                      textAlign="center"
                      fontFamily="avenir"
                      fontSize="1.25rem"
                    >
                      6 GUESTS
                    </Heading>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
          <Text fontFamily="veralaRound" fontSize="1.125rem" pb="1.875rem">
            Rooms available for Private or Sharing use.
          </Text>
          <Heading fontFamily="avenir" fontSize="1.5rem" pb="1.25rem">
            FURNISHED AMENITIES
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing="1rem">
            {furnishedAmenities.map((items) => (
              <HStack key={items.title}>
                <Image h="3.125rem" w="3.125rem" src={items.icon} />
                <Heading fontFamily="avenir" fontSize="1rem">
                  {items.title}
                </Heading>
              </HStack>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
      <Flex bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover" w="100%" h="100%" direction="column" px="6.25rem" py="1.875rem" overflow="hidden">
        <Text
          className="slidein-top revealOnce"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="1.875rem"
        >
          PREMIUM HOME SERVICES
        </Text>
        <Flex
          className="fadein revealOnce"
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          gap="3.75rem"
          pb="3.125rem"
        >
          {premiumHouseFirst.map((item) => (
            <VStack>
              <Image h="5rem" w="5rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
        </Flex>{" "}
        <Flex
          className="fadein revealOnce"
          w="100%"
          h="100%"
          align="center"
          justify="space-between"
          gap="3.75rem"
          px="8.125rem"
        >
          {premiumHouseSecond.map((item) => (
            <VStack>
              <Image h="5rem" w="5rem" src={item.icon} />
              <Heading
                w="100%"
                textAlign="center"
                fontFamily="avenir"
                fontSize="1.25rem"
              >
                {item.title}
              </Heading>
            </VStack>
          ))}
        </Flex>
      </Flex>
      {/* amenities sec */}
      <Flex w="100%" h="100%" pt="3.125rem" pb="0.938rem" px="100px" direction="column" overflow="hidden">
        <Text
          className="Slidein revealOnce"
          w="100%"
          textAlign="center"
          fontFamily="goudy"
          fontSize="2.5rem"
          pb="1.563rem"
        >
          AMENITIES
        </Text>
        <Flex overflow="hidden">
        <Heading
          className="fadein revealOnce"
          w="100%"
          textAlign="center"
          fontFamily="avenir"
          fontSize="2.125rem"
          pb="1.563rem"
        >
          EVERYTHING UNDER ONE ROOF
        </Heading>
        </Flex>
        <Flex w="100%" h="100%" gap="0.938rem">
          <Flex w="100%" h="100%">
            <Grid templateColumns="repeat(2, 1fr)" gap="0.938rem">
              <GridItem rowSpan={2} colSpan={1} pos="relative" className="expandcar revealOnce">
                <Image
                  w="100%"
                  h="35.313rem"
                  objectFit="cover"
                  src={partyArea}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    OPEN PARTY AREA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="expandcar revealOnce">
                <Image w="100%" h="17.188rem" objectFit="cover" src={garden} />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GARDEN
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="expandcar revealOnce">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={gym}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    GYM
                  </Heading>
                </Box>
              </GridItem>
              <GridItem colSpan={2} pos="relative" className="expandcar revealOnce">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={meditation}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    MEDITATION CENTRE
                  </Heading>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
          <Flex w="100%" h="100%">
            <Grid
              h="100%"
              templateColumns="repeat(2, 1fr)"
              // templateRows="repeat(3, 1fr)"
              gap="0.938rem"
            >
              <GridItem colSpan={2} pos="relative" className="expandcar revealOnce">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={sports}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    MULTI SPORTS ARENA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="expandcar revealOnce">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={pool}
                />{" "}
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    SWIMMING POOL
                  </Heading>
                </Box>
              </GridItem>{" "}
              <GridItem rowSpan={2} colSpan={1} pos="relative" className="expandcar revealOnce">
                <Image w="100%" h="35.313rem" objectFit="cover" src={cafe} />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    CAFETERIA
                  </Heading>
                </Box>
              </GridItem>
              <GridItem pos="relative" className="expandcar revealOnce">
                {" "}
                <Image
                  w="100%"
                  h="17.188rem"
                  objectFit="cover"
                  src={exercise}
                />
                <Box
                  w="100%"
                  h="100%"
                  pos="absolute"
                  top="0"
                  bottom="0"
                  left="0"
                  right="0"
                  opacity="0"
                  bgColor="rgba(0,0,0,0.6)"
                  transition="all .3s"
                  _hover={{ opacity: "1" }}
                >
                  <Heading
                    pos="absolute"
                    fontFamily="avenir"
                    textAlign="center"
                    left="50%"
                    top="50%"
                    transform="translate(-50%,-50%)"
                    fontSize="1.25rem"
                    color="#DFBD69"
                  >
                    OPEN EXERCISE AREA
                  </Heading>
                </Box>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
      {/*move in sec*/}
      <Flex
        overflow="hidden"
        w="100%"
        h="37.5rem"
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
            pl="6.25rem"
            
          >
            <Flex overflow="hidden">
            <Heading
              className="fadein revealOnce"
              fontFamily="avenir"
              color="black"
              fontSize="2.125rem"
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
              fontSize="2.125rem"
              pb="2.5rem"
            >
              WE GOT THE REST COVERED
            </Heading>
            </Flex>
            <Text fontFamily="veralaRound" fontSize="1.25rem" pb="1.563rem" className="fadein revealOnce">
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
              // onClick={openEnquire}
            >
              SCHEDULE A VISIT
            </Button>
          </Flex>
          <Flex w="45%" h="100%" pos="relative" align="center" justify="center" pb="1.6rem" pr="100px">
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              bgGradient="linear(to-b, #b88746, #B88746)"
              clipPath="polygon(10% 10%, 100% 40%, 35% 100%)"
            />
            <Image pos="absolute" h="100%" src={manStanding} />
            <Flex
              w="100%"
              h="100%"
              pos="absolute"
              bgGradient="linear(to-b, #CBA257,#BD8E4B)"
              clipPath="polygon(68% 70%, 100% 100%, 35% 100%)"
            />
          </Flex>
        </Flex>
        <Flex
          className="fadein revealOnce"
          w="100%"
          direction="column"
          align="center"
          pos="absolute"
          bottom="1.875rem"
        >
          {" "}
          <Text fontFamily="goudy" fontSize="2.125rem" pb="0.625rem">
            LIFE JUST GOT BETTER
          </Text>
          <HStack color="white" gap="0.938rem" lineHeight="1.188rem">
            <Heading fontFamily="avenir" fontSize="1rem">
              BETTER APARTMENTS
            </Heading>
            <Heading fontFamily="avenir" fontSize="1rem">
              BETTER SERVICES
            </Heading>
            <Heading fontFamily="avenir" fontSize="1rem">
              BETTER AMENITIES
            </Heading>
          </HStack>
        </Flex>
      </Flex>
      {/*Arete Homes Img Galary*/}
      <Flex ref={aretGalRef} w="100%" h="100%" pt="0.938rem" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
        <Flex w="100%" h="100%">
          {" "}
          <Flex
            overflow="hidden"
            w="35%"
            // pos="absolute"
            direction="column"
            justify="center"
            pl="6.25rem"
            
          >
            <Text w="100%" fontFamily="goudy" mt="5rem" fontSize="2.5rem" pb="1rem" className="slidein-top revealOnce">
              A LIFE WHERE YOU DON’T HAVE TO WAIT FOR WEEKENDS TO ENJOY
            </Text>
            <Text
              className="fadein revealOnce"
              w="100%"
              fontFamily="veralaRound"
              fontSize="1.125rem"
              mb="10rem"
            >
              Arete Homes aims to provide better experiences in every aspect of
              life.
              <br /> With innumerable activities lined up for you, there is so
              much to do, so little time.
            </Text>
          </Flex>
          <Flex
            pr="100px"
            w="65%"
            h="100%"
            direction="column"
            // align="flex-end"
          >
            <Flex w="100%" h="100%" justify="flex-end">
            <Image
                opacity={aretGalIsInView?1:0}
                transitionDuration={"2s"}
                transitionDelay={"2s"}
                mr="0.7rem"
                mt="9.3rem"
                w="15.625rem"
                h="10rem"
                zIndex={5}
                objectPosition="center"
                objectFit="cover"
                left="0"
                src={meditating}
                pos="relative"
              />
            <Flex direction="column" pos="relative"  mr="0.625rem">
                <Image
                opacity={aretGalIsInView?1:0}
                transitionDuration={"2s"}
                transitionDelay={"0s"}
                w="15.625rem"
                h="9.375rem"
                // pos="absolute"
                objectPosition="center"
                objectFit="cover"
                src={hall}
              />
              <Image
              opacity={aretGalIsInView?1:0}
              transitionDuration={"2s"}
              transitionDelay={"3.5s"}
               mt="0.625rem" 
               w="15.625rem"
               h="9.375rem"
               src={kidsplaying} />
              </Flex>
              <Image
                opacity={aretGalIsInView?1:0}
                transitionDuration={"2s"}
                transitionDelay={"0s"}
                mt="4.5rem"
                w="10rem"
                h="15rem"
                // pos="absolute"
                top="5.625rem"
                objectPosition="70%"
                objectFit="cover"
                src={cricket}
              />
            </Flex>
            <Flex
              pos="relative"
              w="100%"
              h="100%"
              gap="0.938rem"
              // mr="8.65rem"
              // pos="relative"
              wrap="nowrap"
              // top="-4rem"
            >
              {" "}
              {/*invisible mr="35.625rem"  */ }
              <Image
                opacity="0"
                mt="5.083rem"
                w="6.625rem"
                h="12.5rem"
                src={planting}
              />
              <Image
                opacity={aretGalIsInView?1:0}
                transitionDuration={"2s"}
                transitionDelay={"3.5s"}
                pos="absolute"
                right="28.8rem"
                mt="0.625rem"
                w="9.375rem"
                h="12.5rem"
                src={planting}
              />
              <Flex direction="column" pos="absolute"
                  mt=".7rem"
                  right="16rem">
                <Image
                  opacity={aretGalIsInView?1:0}
                  transitionDuration={"2s"}
                  transitionDelay={"0s"}
                  alignSelf="end"
                  w="12.5rem"
                  h="15.625rem"
                  zIndex="3"
                  objectFit="contain"
                  objectPosition="cover"
                  src={badminton}
                />
                
              </Flex>
                <Flex
                  pos="absolute"
                  right="0" 
                  mt="0.625rem"direction="column">
                <Image
                  opacity={aretGalIsInView?1:0}
                  transitionDuration={"2s"}
                  transitionDelay={"2s"}
                  h="9.375rem"
                  w="15.625rem"
                  zIndex="5"
                  objectFit="cover"
                  objectPosition="80%"
                  // top="-8.5rem"
                  // right="10rem"
                  src={tabletenis}
                />
                <Image
                opacity={aretGalIsInView?1:0}
                transitionDuration={"2s"}
                transitionDelay={"3.5s"}
                zIndex={5}
                mt="0.625rem"
                w="15.625rem"
                h="9.375rem"
                src={yoga}
                pos="relative"
                left="0"
                />
                </Flex>
                
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* location advantage */}
      <Flex
      ref={locRef}
      w="100%"
      h="100%"
      px="6.25rem"
      pt="5rem"
      pb="3.125rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={locIsInView ? "translate(0)" : "translateY(-50px)"}
        opacity={locIsInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
        textTransform="uppercase"
      >
        LOCATION ADVANTAGE
      </Text>
      <Heading
        transform={locIsInView ? "translate(0)" : "translateY(50px)"}
        opacity={locIsInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        pt="1.563rem"
        pb="1.563rem"
      >
        PONNERI - A SMART CITY BY JICA
      </Heading>
      <Flex w="100%" h="100%" align="flex-start" justify="flex-start">
        <Flex
          direction="column"
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
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
          height="430"
          frameBorder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0">
        </iframe>:<></>}
            {location==="temples"?<iframe src="https://www.google.com/maps/d/embed?mid=1SLUxNBnv1ngRxRWQjM6aqzGaqju0OV0&hl=en&ehbc=2E312F"
            class="gmap_iframe"
              width="100%"
              height="430"
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0">
            </iframe>:<></>}
            {location==="ports"?<iframe src="https://www.google.com/maps/d/embed?mid=1kok6j573KVL_Dhk2UU5kkbQ2nTiilyg&hl=en&ehbc=2E312F"
            class="gmap_iframe"
              width="100%"
              height="430"
              frameBorder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0">
            </iframe>:<></>}
            {location==="itpark"?<iframe src="https://www.google.com/maps/d/embed?mid=1iIxPSzS9nTmK4SlzmPcJaCK3mWhEEWQ&hl=en&ehbc=2E312F" 
            class="gmap_iframe"
            width="100%"
            height="430"
            frameBorder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0">
          </iframe>:<></>}
          {location==="hospital"?<iframe src="https://www.google.com/maps/d/embed?mid=1RbraLY35qn-_srxzJjXk4AYl3aTWiTM&hl=en&ehbc=2E312F"
          class="gmap_iframe"
          width="100%"
          height="430"
          frameBorder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0">
        </iframe>:<></>}
        {location==="education"?<iframe src="https://www.google.com/maps/d/embed?mid=1WZ4D6cZM0aMphZYfhXsKKY0debNhDdo&hl=en&ehbc=2E312F" 
        class="gmap_iframe"
        width="100%"
        height="430"
        frameBorder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>:<></>}
        {location==="entertainment"?<iframe src="https://www.google.com/maps/d/embed?mid=1nyO5GwDVSgvp_yPCc3cGU5zapiLYYg0&hl=en&ehbc=2E312F"
        class="gmap_iframe"
        width="100%"
        height="430"
        frameBorder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"></iframe>:<></>}
        
            </Flex>
          <Flex
            w="100%"
            h="100%"
            mb="20px"
            align="flex-start"
            justify="space-between"
          >
            <VStack  align="center">
              <Box
                onClick={(e)=>changeLocation(e)} 
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                
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
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
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
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                onClick={(e)=>changeLocation(e)} 
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
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
                borderRadius="50%"
                p="10px"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                direction="column"
                w="50px"
                h="50px"
                align="center"
                onClick={(e)=>changeLocation(e)}
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
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
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
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
                _hover={{
                  cursor:"pointer",
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
              >
                <Image id="ports" w="30px" h="30px" src="/images/arete-homes/PORT.svg" />
              </Box>
              <Heading fontFamily="avenir" fontSize="14px">
                PORTS
              </Heading>
            </VStack>
          </Flex>
          <Flex w="100%" h="100%">
            <Button
              w="100%"
              h="3.187rem"
              fontSize="1rem"
              fontFamily="avenir"
              fontWeight="bold"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
            >
              <ImLocation size="1.875rem" /> SHOW LOCATION ON GOOGLE MAPS
            </Button>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" align="flex-start" justify="space-between">
          <Flex h="100%" direction="column" px="1.563rem">
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
                h="3.125rem"
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
            </Flex>{" "}
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
                h="5rem"
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
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 4s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.8rem"
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
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 6s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="4.9rem"
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
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 8s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="2.75rem"
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
              transform={locIsInView ? "translateY(0)" : "translateY(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 10s"
              h="100%"
              direction="column"
              justify="flex-start"
              align="center"
            >
              <Divider
                h="0.5rem"
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
            h="100%"
            direction="column"
            align="flex-start"
            justify="space-between"
            pr="0.938rem"
          >
            <Heading
              pt="3.925rem"
              transform={locIsInView ? "none" : "translateX(-100px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              5 Mins
            </Heading>
            <Heading
              pt="6.25rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 2s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              10 Mins
            </Heading>
            <Heading
              pt="6rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 4s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              20 Mins
            </Heading>
            <Heading
              pt="6.25rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 6s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              30 Mins
            </Heading>
            <Heading
              pt="3.9rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 8s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              40 Mins
            </Heading>
            <Heading
              pt="1.8rem"
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 10s"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              2 Hours
            </Heading>
          </Flex>
          <Flex w="70%" h="100%" direction="column" gap="1.875rem">
            <UnorderedList
              pt="1.875rem"
              transform={locIsInView ? "none" : "translateX(-100px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">
                Walk to Velammal International School{" "}
              </ListItem>
              <ListItem pb="0.625rem">DRIVE TO Origin by Mahindra </ListItem>
              <ListItem>DRIVE TO Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 2s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">CONNECT TO Outer Ring Road</ListItem>
              <ListItem pb="0.625rem">
                DRIVE TO Siruvapuri Murugan Temple{" "}
              </ListItem>
              <ListItem>VELS Medical Hospital</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 4s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">DRIVE TO REDHILLS</ListItem>
              <ListItem pb="0.625rem">PULICAT LAKE </ListItem>
              <ListItem>DRIVE TO GUMMIDIPOONDI SIPCOT</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 6s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              <ListItem pb="0.625rem">DRIVE TO SRI CITY</ListItem>
              <ListItem pb="0.625rem">DRIVE TO ADANI PORT</ListItem>
              <ListItem>DRIVE TO Ponneri Railway Station</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 8s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              {" "}
              <ListItem>DRIVE TO CHENNAI AIRPORT</ListItem>
            </UnorderedList>
            <UnorderedList
              transform={locIsInView ? "translateX(0)" : "translateX(-50px)"}
              opacity={locIsInView ? "1" : "0"}
              transition="all 2s 10s"
              display="flex"
              flexDir="column"
              textTransform="uppercase"
              fontFamily="veralaRound"
              fontSize="1rem"
            >
              {" "}
              <ListItem>DRIVE TO TIRUPATI</ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
      <Flex w="100%" h="100%" pb="5rem" px="6.25rem" className="fadein revealOnce" >
        <Flex w="60%" h="100%" direction="column" mr="2.5%">
          <Heading
            pt="1.875rem"
            w="100%"
            textAlign="center"
            fontSize="2.5rem"
            fontFamily="goudy"
            fontWeight="400"
          >
            TESTIMONIALS
          </Heading>{" "}
          <Flex pos="relative">
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
              right="2.25rem"
              bottom="6rem"
              zIndex="10"
              w="4.375rem"
              h="3.125rem"
              as={ImQuotesRight}
            />
          </Flex>
        </Flex>
        <Flex
          pt="1.875rem"
          className="fadein revealOnce"
          w="40%"
          h="100%"
          align="center"
          justify="center"
          direction="column"
          bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
        >
          <Text
            fontSize="2.125rem"
            fontFamily="goudy"
            textTransform="uppercase"
            pb="1.563rem"
          >
            SCHEDULE A VISIT
          </Text>
          <form>
            <Flex pb="1.875rem" w="100%" align="center" justify="center" direction="column">
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    NAME
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl isRequired>
                {" "}
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    PHONE
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" justify="space-between" pb="0.938rem">
                  <FormLabel
                    fontFamily="avenir"
                    fontSize="1rem"
                    fontWeight="bold"
                  >
                    EMAIL
                  </FormLabel>
                  <Input
                    fontSize="1rem"
                    fontFamily="avenir"
                    lineHeight="1.5rem"
                    w="18.75rem"
                    h="2.5rem"
                    bgColor="#E5E5E5"
                    borderRadius="none"
                  />
                </HStack>{" "}
              </FormControl>
              <FormControl>
                <HStack w="100%" ml="4.5rem">
                  <Checkbox
                    ml="0.85rem"
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
                mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
                p="0.938rem"
                _hover={{
                  bgGradient: "linear(to-b, #DFBD69, #B88746)",
                }}
                _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
                
              >
                SCHEDULE A CALL
              </Button>{" "}
            </Flex>
          </form>
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
            pr="5.313rem"
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
                w="15rem"
                h="5rem"
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
];

const premiumHouseSecond = [
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
    name: "MR. MAGESHKUMAR",
    logo: adani,
  },
  {
    text: "I’m very happy to be living in integrate Smart Township, it’s like a dream! I have also invested in a property here, it gives the highest returns.",
    name: "MR. DK SINGH",
    logo: linde,
  },
  {
    text: "Hats off to the team for their dedication to the project as they made it with the best quality & beautifully! With malaysian MIVAN technology, they have delivered the best product as promised! I’m glad to be a part of Arete Homes.",
    name: "MR. K PANDIYAN",
    logo: yanmar,
  },
];
