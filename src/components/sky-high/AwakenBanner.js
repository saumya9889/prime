import { Box, Flex, Image, IconButton, Text } from "@chakra-ui/react";
//import { useInView } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useState } from "react";
import banner1 from "../sky-high imgs/sky high - awaken in the ... 1.png";
import banner2 from "../sky-high imgs/sky high - awaken in the ... 4.png";

import Slider from "react-slick";

const SeventhSec = () => {
  const [slider, setSlider] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });

  //const ref = useRef(null);
  //const isInView = useInView(ref, { once: true });

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
    <Flex ref={ref} w="100%" h="100%">
      <Box
        transform={inView ? "scale(1)" : "scale(0.6)"}
        transition="all 2s"
        opacity={inView ? "1" : "0"}
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
              height="100%"
              // position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
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
  );
};

export default SeventhSec;

const bannerImgs = [
 banner1,
  banner2,
];
