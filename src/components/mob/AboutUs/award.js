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
      centerMode: true,
      autoplay: true,
      centerMode: true,
      infinite: true,
      // centerPadding: "60px",
      draggable: true,
      speed: 500,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      slidesToShow: 1,
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
      pb="3.125rem"
    >
      {" "}
      <Flex
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s "
        w="100%"
        align="center"
        justify="center"
        pb="1.563rem"
      >
          <Text fontFamily="goudy" fontSize="2.125rem">
          AWARDS
        </Text>
      </Flex>
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
          {gymclubimgs.map((prime) => (
            <Flex w="100%" align="center">
              <Image
                key={prime}
                w="100%"
                height="15.437rem"
                pr="0.937rem"
                position="relative"
                objectPosition="center"
                backgroundRepeat="no-repeat"
                objectFit="fill"
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
      </Box>
    </Flex>
  </>);
}
export default Award;