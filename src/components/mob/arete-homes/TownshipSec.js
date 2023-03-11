import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";

import { useRef } from "react";
import Slider from "react-slick";

const FifthSec = () => {
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
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="3.125rem"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
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
        A TOWNSHIP THAT DEFINES SMART LIVING
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
        <Flex px=".312rem" pl="1rem" direction="column" textAlign="center" mb="1.875rem" _hover={{border:"none"}}>
            
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/arete meditation retreat 1.jpg"
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
              ARETE MEDITATION RETREAT
            </Heading>
        </Flex>
        <Flex px=".312rem" pl="1rem" textAlign="center" direction="column">
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/kids play area.jpeg"
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
              KIDS PLAY AREA
            </Heading>
          </Flex>
          <Flex px=".312rem" pl="1rem" textAlign="center" direction="column" align="center" mb="1.875rem">
            
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/garden and jogging track.jpg"
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
              GARDEN & JOGGING TRACK
            </Heading>
          </Flex>
          <Flex px=".312rem" pl="1rem" textAlign="center" direction="column" align="center">
            
            <Image
              className="expandcar reveal"
              src="/images/arete-homes/open exercise area.jpg"
              h="15.625rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.125rem" fontFamily="avenir" pt="0.938rem">
              OPEN EXERCISE AREA
            </Heading>
          </Flex>
        </Slider>
      </Box>
    </Flex>
  );
};

export default FifthSec;
