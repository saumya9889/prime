import {
  Flex,
  Heading,
  IconButton,
  Box,
  Divider,
  Text,
  VStack,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import intro1 from "./INTRO1.jpg"

const SecondSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const [slider, setSlider] = useState(null);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pb="1.875rem"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      className="arete-homes-wrapper"
    >
      <Heading
        bgImage="inherit"
        px="0.625rem"
        zIndex="5"
        mt="-1.875rem"
        pt="1.875rem"
        transform={isInView ? "none" : "translateY(-50xp)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        fontWeight="400"
        textTransform="uppercase"
        textAlign="center"
        pb="1.563rem"
        boxShadow="2xl"
      >
        A place of purity<br/>& excellence
      </Heading>
      <Flex px="1rem" direction="column" w="100%" h="100%" align="center" justify="center" overflow="hidden">
      <Flex
          w="100%"
          h="100%"
          direction="column"
          alignSelf="center"
          align="center"
          justify="center"
        >
          <Text
            transform={isInView ? "none" : "translateY(-50xp)"}
            opacity={isInView ? "1" : "0"}
            transition="all 2s 2s"
            mb="1.562rem"
            fontFamily="veralaRound"
            fontSize="1rem"
            textAlign="center"
          >
            Arete homes, is the first largest smart integrated residential
            township in North Chennai, Ponneri, just Opposite Velammal
            International school. A Total of 20.25 Acres Land with phase I as a
            well planned gated community, comprising magnificent towers, rising
            with the elevated podium and many other unique amenities.
          </Text>
          <SimpleGrid columns={2} pl=".625rem" spacing="1rem">
            <Box opacity={isInView ? "1" : "0"} transition="all 2s 3s">
              <Text
                fontFamily="avenir"
                fontSize="1.125rem"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                20.25 ACRES
              </Text>
              <Text fontFamily="veralaRound" fontSize={"1rem"} color={"black"}>
                Largest Smart Township
              </Text>
            </Box>
            <Box opacity={isInView ? "1" : "0"} transition="all 2s 3s">
              <Text
                fontFamily="avenir"
                fontSize="1.125rem"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                PRIVATE CLUB
              </Text>
              <Text fontFamily="veralaRound" fontSize={"1rem"} color={"black"}>
                PGC - 60,000 SQFT.
              </Text>
            </Box>
            <Box opacity={isInView ? "1" : "0"} transition="all 2s 4s">
              <Text
                fontFamily="avenir"
                fontSize="1.125rem"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                74% OPEN SPACE
              </Text>
              <Text fontFamily="veralaRound" fontSize={"1rem"} color={"black"}>
                IGBC pre-certified Platinum Rated Township
              </Text>
            </Box>
            <Box opacity={isInView ? "1" : "0"} transition="all 2s 4s">
              <Text
                fontFamily="avenir"
                fontSize="1.125rem"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                100+
              </Text>
              <Text fontFamily="veralaRound" fontSize={"1rem"} color={"black"}>
                Smart Amenities
              </Text>
            </Box>
            <Box opacity={isInView ? "1" : "0"} transition="all 2s 5s">
              <Text
                fontFamily="avenir"
                fontSize="1.125rem"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                2, 2.5, 3 BHK
              </Text>
              <Text fontFamily="veralaRound" fontSize={"1rem"} color={"black"}>
                Smart Residences
              </Text>
            </Box>
            <Box opacity={isInView ? "1" : "0"} transition="all 2s 5s">
              <Text
                fontFamily="avenir"
                fontSize="1.125rem"
                fontWeight="bold"
                bgGradient="linear(to-b,#B88746, #DFBD69)"
                bgClip="text"
              >
                A1 TO A6 TOWERS
              </Text>
              <Text fontFamily="veralaRound" fontSize={"1rem"} color={"black"}>
                10 Floors
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
        <Flex
          mt="1rem"
          w="100%"
          h="100%"
        >
          <Box
            className="expandcar reveal"
            position={"relative"}
            height={"18.75rem"}
            width={"100%"}
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
              {introImgs.map((prime) => (
                <Image
                  key={prime.id}
                  w="100%"
                  height="18.75rem"
                  position="relative"
                  objectPosition="center"
                  objectFit="cover"
                  src={prime}
                />
              ))}
            </Slider>
            <IconButton
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              borderRadius="full"
              bottom="0"
              right="50%"
              // transform={"translateX(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
      
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>01</Text>
            </IconButton>

            {/* Right Icon */}
            <IconButton
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#fff"
              borderWidth="2px"
              bottom="0"
              left="50%"
              // transform={"translate(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <Text>02</Text>
            </IconButton>
          </Box>{" "}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SecondSec;

const introImgs = [
  intro1,
  "/images/arete-homes/INTRO2.png",
];

const stats = [
  {
    title: "20.25 ACRES",
    txt: "Largest Smart Township",
  },
  {
    title: "PRIVATE CLUB",
    txt: "PGC - 60,000 SQFT.",
  },
  {
    title: "74% OPEN SPACE",
    txt: "IGBC pre-certified Platinum Rated Township",
  },
  {
    title: "100+",
    txt: "Smart Amenities",
  },
  {
    title: "2, 2.5, 3 BHK",
    txt: "Smart Residences",
  },
  {
    title: "A1 TO A6 TOWERS",
    txt: "10 Floors",
  },
];
