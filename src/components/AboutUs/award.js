import {
    Flex,
    Image,
    Text,
    Box,
    IconButton,
    Button,
    Heading,
    Center,
  } from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useInView } from "framer-motion";
import { useRef } from "react";

import award from "./24.jpg";
import award2 from "./Image-1.jpg";
import award3 from "./Image-2.jpeg";
import award1 from "./awards-1.png";

const gymclubimgs = [
    {img:award},
    {img:award1},
    {img:award2},
    {img:award3},
  ];

const Award=()=>{
    const [slider, setSlider] = useState(null);
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
    });
    const settings = {
      // className: "center",
      autoplay: true,
      centerMode: true,
      infinite: true,
      // centerPadding: "60px",
      draggable: true,
      speed: 500,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      slidesToShow: 3,
      slidesToScroll: 1,
    };
  return(<>
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pb="4rem"
      px="1.562rem"
    >
      <Flex
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s "
        w="100%"
        align="center"
        justify="center"
        pb="1.875rem"
      >
          <Text fontFamily="goudy" fontSize="2.5rem">
          AWARDS
        </Text>
      </Flex>
      <Box
        opacity={isInView ? "1" : "0"}
        transition="all 2s 1s"
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="4.687rem"
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
          {gymclubimgs.map((prime, index) => (
            <Flex w="90%" align="center" key={index}>
              <Image
                w="100%"
                height="16.875rem"
                pr="0.937rem"
                position="relative"
                objectPosition="center"
                backgroundRepeat="no-repeat"
                objectFit="cover"
                src={prime.img}
              />
              <Heading
                w="96%"
                align="center"
                fontFamily="avenir"
                fontSize="1.25rem"
                pt="0.938rem"
              >
                {prime.title}
              </Heading>
            </Flex>
          ))}
        </Slider>
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          border="3px solid"
          borderRadius="full"
          position="absolute"
          top="45%"
          left="0"
          h="3.125rem"
          w="3.125rem"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
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
          position="absolute"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          right="0"
          top="45%"
          h="3.125rem"
          w="3.125rem"
          onClick={() => {
            slider?.slickNext();
          }}
        >
          <AiOutlineRight color="#B88746" size="2.5rem" />
        </IconButton>
      </Box>
    </Flex>
  </>);
}
export default Award;