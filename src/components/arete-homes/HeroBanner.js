import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React, { useState } from "react";
import { useRef } from "react";
import Slider from "react-slick";
import banner1 from "./banner.jpg"
const FirstSec = () => {
  const ref = useRef(null);
  const [isInView, setIsinView] = useState(false);
  const [slider, setSlider] = useState(null);
  const settings = {
    draggable: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  setTimeout(() => {
    setIsinView(true);
  }, 1000);

  return (
    <Flex ref={ref} w="100%" h="100vh">
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
            <Image
              w="100%"
              height="100vh"
              // position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              src={banner1}
            />
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
  );
};

export default FirstSec;

const bannerImgs = [
  "/images/arete-homes/BANNER2.jpg",
  "/images/arete-homes/BANNER2.jpg",
];
