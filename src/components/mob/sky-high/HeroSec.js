import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import banner from "./banner.jpg";

const FirstSec = () => {
  const ref = useRef(null);
  const [slider, setSlider] = useState(null);
  const [isInView, setIsinView] = useState(false);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 100,
    fade: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 2,
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
              src={banner}
            />
            <Flex h="100vh">
              <embed
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/bRaQbvUuzh4"
              title=""
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              ></embed>
            </Flex>
        </Slider>
        <IconButton
          pos="absolute"
          aria-label="left-arrow"
          variant="outline"
          borderColor="#fff"
          borderWidth="2px"
          borderRadius="full"
          bottom="1rem"
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
          bottom="1rem"
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

const bannerImgs = [banner, banner];
