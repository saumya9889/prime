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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [projIndex, setProjIndex] = useState(0);
  const projects = [
    { title: "ARETE HOMES", list: true, status: "READY TO MOVE IN", imgF: areteHomes, imgB: skyHigh, text: '6 Towers, 2, 2.5, 3 BHK Smart Residencies, 70% Open Space' },
    { title: "SKY HIGH", list: true, status: "READY TO MOVE IN", imgF: skyHigh, imgB: areteHomes, text: '18 Storey Tall, Sky Residencies 2 BHK, G+1 Retail Plaza' },
    { title: "NAKSHATRA", list: false, status: "COMPLETED", imgF: areteHomes, imgB: skyHigh, text: "Pune" },
    { title: "I - LAND", list: false, status: "COMPLETED", imgF: areteHomes, imgB: skyHigh, text: "Pune" },
    { title: "ARETE MALL", list: false, status: "COMING SOON", imgF: areteMall, imgB: skyHigh, text: "" },
    { title: "ARETE PLAZA", list: false, status: "NEWLY LAUNCHED", imgF: aretePlaza, imgB: areteMall, text: "20 Retail Spcaes in the Tallest Tower of North Chennai." },
    { title: "PONNERI GYMKHANA CLUB", list: false, status: "NEWLY LAUNCHED", imgF: ponneri, imgB: aretePlaza, text: "PGC is 60,000 sqft. World Class Private Club for Sports, Business and Celebration." },
  ];
  const [isList, setIsList] = useState(true);
  const animateX = useAnimation();
  const animateY = useAnimation();
  const animateFade = useAnimation();
  const nextHandle = () => {
    if (projIndex === 6) {
      setIsList(true);
      setProjIndex(0);
    }
    else if (projIndex === 5) {
      setIsList(true);
      setProjIndex(projIndex + 1);
    }
    else {
      setIsList(false);
      setProjIndex(projIndex + 1);
    }
  }
  const prevHandle = () => {
    if (projIndex === 0) {
      setIsList(true);
      setProjIndex(6);
    }
    else if (projIndex === 1) {
      setIsList(true);
      setProjIndex(projIndex - 1);
    }
    else {
      setIsList(false);
      setProjIndex(projIndex - 1);
    }
  }
  useEffect(() => {
    console.log(isList);
    console.log(projects[projIndex].p1)
  }, [isList]);
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
    autoplay: true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    // <Flex
    //   ref={ref}
    //   w="100%"
    //   minh="100%"
    //   direction="column"
    //   align="center"
    //   pt="1.875rem"
    //   pb="1.875rem"
    //   pl="100px"
    //   bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    //   bgRepeat="no-repeat"
    //   bgPos="center"
    //   bgSize="cover"
    // >
    //   <Flex w="100%" h="100%" align="center" justify="center">
    //     <Flex h="100%" align="center" justify="center">
    //       <Text fontFamily="goudy" fontSize="40px" textAlign="center">
    //         OUR PROJECTS
    //       </Text>
    //     </Flex>
    //   </Flex>
    //   <Box
    //     transition="all 2s 2s"
    //     position={"relative"}
    //     height={"100%"}
    //     width={"100%"}
    //     overflow={"hidden"}
    //   >
    //   <link
    //       rel="stylesheet"
    //       type="text/css"
    //       charSet="UTF-8"
    //       href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    //     />
    //     <link
    //       rel="stylesheet"
    //       type="text/css"
    //       href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
    //     />
    //   <Slider {...settings} ref={(slider) => setSlider(slider)}>
    //   <Flex pos="relative" align="flex-start" justify="space-between" pr="100px">
    //     <Flex pos="relative" m="0" w="20%" pt="4.125rem" direction="column" justify="center" h="30rem">
    //       <MtnHd
    //         initial={{ x: -500 }}
    //         animate={animateX}
    //         transition={{ duration: 2, type: "just" }}
    //         pb="15px"
    //         fontFamily="avenir"
    //         fontSize="1.5rem"
    //         w="100%"
    //         textAlign="left"
    //       >
    //         {projects[projIndex].title}
    //       </MtnHd>
    //       <Text fontFamily="varela round" fontSize="18px">{projects[projIndex].text}</Text>
    //       <MtnBtn
    //         initial={{ opacity: 0 }}
    //         animate={animateX}
    //         transition={{ delay: 2.5, duration: 2, type: "just" }}
    //         mt="25px"
    //         w="160px"
    //         h="51px"
    //         bgGradient="linear(to-b, #B88746 ,#DFBD69)"
    //         color="white"
    //         fontSize="16px"
    //         fontFamily="avenir"
    //         _hover={{
    //           bgGradient: "linear(to-b, #DFBD69, #B88746)",
    //         }}
    //         _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
    //       >
    //         VIEW PROJECT
    //       </MtnBtn>
    //       <IconButton
    //       aria-label="left-arrow"
    //       variant="outline"
    //       borderColor="#B88746"
    //       borderRadius="full"
    //       position="absolute"
    //       bottom="-1rem"
    //       left="0"
    //       h="3.125rem"
    //       w="3.125rem"
    //       transform={"translate(0%, -50%)"}
    //       zIndex={2}
    //       onClick={() => {
    //         prevHandle();
    //       }}
    //     >
    //       <AiOutlineLeft color="#B88746" size="2.5rem" />
    //     </IconButton>

    //     <IconButton
    //       aria-label="right-arrow"
    //       borderRadius="full"
    //       variant="outline"
    //       borderColor="#B88746"
    //       position="absolute"
    //       transform={"translate(0%, -50%)"}
    //       zIndex={2}
    //       left="4rem"
    //       bottom="-1rem"
    //       h="3.125rem"
    //       w="3.125rem"
    //       onClick={() => {
    //         nextHandle();
    //       }}
    //     >
    //       <AiOutlineRight color="#B88746" size="2.5rem" />
    //     </IconButton>
    //     </Flex>
    //     <MtnFlx
    //       w="5rem"
    //       initial={{ opacity: 0, y: -100 }}
    //       animate={animateY}
    //       transition={{ duration: 2, type: "just" }}
    //       h="100%"
    //       direction="column"
    //       align="center"
    //       justify="flex-start"
    //       pt="25px"
    //       px="1.563rem"
    //       pos="absolute"
    //       top="0"
    //       left="28%"
    //     >
    //       <Divider
    //         h="6.5rem"
    //         orientation="vertical"
    //         border="3px solid"
    //         borderColor="#DFBD69"
    //         bgColor="#DFBD69"
    //       />{" "}
    //       <Box
    //         height="30px"
    //         width="30px"
    //         backgroundColor="#DFBD69"
    //         border="3px solid white"
    //         boxShadow="0px 0px 0px 3px #B88746"
    //         borderRadius="50%"
    //         my="1"
    //       />
    //     </MtnFlx>
    //     <Flex
    //       pos="absolute"
    //       zIndex={90}
    //       right="0"
    //       top="0"
    //       w="65%"
    //       direction="column"
    //       align="flex-start"
    //       pt="25px"
    //       pr="50px"
    //     >
    //       <MtnFlx
    //         initial={{ opacity: 0 }}
    //         animate={animateX}
    //         transition={{ duration: 1, type: "just" }}
    //       >
    //         <Text
    //           fontSize="14px"
    //           p="10px"
    //           color="white"
    //           fontFamily="avenir"
    //           bgGradient="linear(to-r, #B88746 ,#DFBD69)"
    //           textTransform="uppercase"
    //         >
    //           {projects[projIndex].status}
    //         </Text>
    //       </MtnFlx>
    //       <MtnFlx
    //         initial={{ x: 1000 }}
    //         animate={animateX}
    //         transition={{ duration: 2, type: "just" }}
    //         pos="relative"
    //         w="100%"
    //         h="100%"
    //         pr="100px" 
    //       >
    //         <Image
    //           animation="fadein 1 2s"
    //           zIndex="3"
    //           // pos="absolute"
    //           w="100%"
    //           h="25.25rem"
    //           src={projects[projIndex].imgF}
    //         />
    //         <Image
    //           animation="fadein 1 2s"
    //           pos="absolute"
    //           w="100%"
    //           h="21.875rem"
    //           pr="150px"
    //           left="100px"
    //           top="25px"
    //           opacity=".5"
    //           src={projects[projIndex].imgB}
    //         />
    //       </MtnFlx>
    //     </Flex>
    //   </Flex>
    //   </Slider>
    //   </Box>
    // </Flex>
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      py="3.125rem"
      direction="column"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      className="ourproject-wrapper"
    >
      <Text textAlign="center"
        pb="1.563rem"
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem">
        OUR PROJECTS
      </Text>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        <Flex w="100%"
          direction="column"
          align="center"
          justify="center">
          <Text m="0.5rem">
            <Text
              fontSize="0.87rem"
              width="10rem"
              height="2.312rem"
              color="white"
              pt="0.5rem"
              pl="0.3rem"
              fontFamily="avenir"
              bgGradient="linear(to-r, #B88746 ,#DFBD69)"
              textTransform="uppercase"
            >
              {projects[projIndex].status}
            </Text>
            <MtnFlx
              initial={{ opacity: 0 }}
              animate={animateX}
              transition={{ duration: 1, type: "just" }}
            >

            </MtnFlx>
            <MtnFlx
              initial={{ x: 1000 }}
              animate={animateX}
              transition={{ duration: 2, type: "just" }}
              w="100%"
              h="100%"
            >
              <Image
                animation="fadein 1 2s"
                zIndex="3"
                // pos="absolute"
                w="150%"
                h="18.75rem"
                src={projects[projIndex].imgF}
              />
            </MtnFlx>
          </Text>
          <Text>
            <MtnHd
              initial={{ x: -500 }}
              animate={animateX}
              transition={{ duration: 2, type: "just" }}
              pb="15px"
              fontFamily="avenir"
              fontSize="1.5rem"
              w="100%"
              textAlign="center"
            >
              {projects[projIndex].title}
            </MtnHd>
            <Text fontFamily="varela round" maxW="12rem" height="6rem" margin="1rem auto" textAlign="center" fontSize="1rem">{projects[projIndex].text}</Text>
            <MtnBtn
              initial={{ opacity: 0 }}
              animate={animateX}
              transition={{ delay: 2.5, duration: 2, type: "just" }}
              marginLeft="8rem"
              w="160px"
              h="51px"
              bgGradient="linear(to-b, #B88746 ,#DFBD69)"
              color="white"
              fontSize="16px"
              fontFamily="avenir"
              textAlign="center"
              _hover={{
                bgGradient: "linear(to-b, #DFBD69, #B88746)",
              }}
              _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
              className="view-btn"
            >
              VIEW PROJECT
            </MtnBtn>
            <Text marginLeft="9rem" marginTop="4rem"  className="carsoule-btn-wrapper">
              <IconButton
                aria-label="left-arrow"
                variant="outline"
                borderColor="#B88746"
                borderRadius="full"
                border="3px solid"
                h="3.125rem"
                w="3.125rem"
                marginRight="2rem"
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => {
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
                transform={"translate(0%, -50%)"}
                zIndex={2}
                h="3.125rem"
                w="3.125rem"
                onClick={() => {
                  nextHandle();
                }}
              >
                <AiOutlineRight color="#B88746" size="2.5rem" />
              </IconButton>
            </Text>

          </Text>
        </Flex>
      </Slider>
    </Flex>
  );
};

export default OurProjects;
