import { Box, Flex, Image, IconButton, Text, Heading } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import banner from "../commercial-properties imgs/ARETE PLAZA1_11zon.jpg";
import banner2 from "../commercial-properties imgs/banner2.jpg";

const Banner = () => {
  const ref = useRef(null);
  const [slider, setSlider] = useState(null);
  const [isInView, setIsinView] = useState(false);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  setTimeout(() => {
    setIsinView(true);
  }, 1000);
  return (
    <Flex ref={ref} w="100%" h="100vh" pos="relative">
      <Box
        transform={isInView ? "scale(1)" : "scale(0.6)"}
        transition="all 2s"
        position={"relative"}
        height={"100%"}
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
          {bannerImgs.map((prime) => (
            <Image
              key={prime.id}
              w="100%"
              height={{ base: "100vh", md: "100vh", lg: "100%" }}
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
          bottom={{base:"1rem",lg:"0"}}
          right="50%"
          // transform={"translateX(-50%)"}
          mx="5px"
          mb="25px"
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
          }}
          color="white"
          _hover={{ bgColor: "none" }}
        >
          <Text>01</Text>
        </IconButton>
        <IconButton
          pos="absolute"
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#fff"
          borderWidth="2px"
          bottom={{base:"1rem",lg:"0"}}
          left="50%"
          // transform={"translate(-50%)"}
          mx="5px"
          mb="25px"
          zIndex={2}
          onClick={() => {
            slider?.slickNext();
          }}
          color="white"
          _hover={{ bgColor: "none" }}
        >
          <Text>02</Text>
        </IconButton>
      </Box>
      <Heading
        w="100%"
        textAlign="center"
        pos="absolute"
        fontFamily="avenir"
        fontSize={{ base: "1.5rem", md: "3rem" }}
        color="white"
        textShadow="2px 2px 3px black"
        top="50%"
        left="50%"
        transform={"translate(-50%, -50%)"}
      >
        COMMERCIAL <br/>PROPERTIES
      </Heading>
    </Flex>
  );
};

export default Banner;

const bannerImgs = [banner, banner2];
