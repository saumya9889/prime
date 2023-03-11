import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";

const ImgSlider = () => {
  const settings = {
    center: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Flex w="100%" h="100vh" px="100px">
      <Box position={"relative"} w="100%" h="100%" overflow={"hidden"}>
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
        <Slider {...settings}>
          {images.map((img, index) => (
            <Flex>
              <Image
                p="2"
                key={index}
                w="100%"
                h="700px"
                objectFit="cover"
                src={img}
              />
            </Flex>
          ))}
        </Slider>
      </Box>
      <Box position={"relative"} w="100%" h="100%" overflow={"hidden"}>
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
        <Slider {...settings}>
          {images.map((img, index) => (
            <Flex>
              <Image
                p="2"
                key={index}
                w="100%"
                h="600px"
                objectFit="cover"
                src={img}
              />
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

export default ImgSlider;

const images = [
  "/images/careers/career1.jpeg",
  "/images/careers/career2.JPG",
  "/images/careers/career3.jpeg",
  "/images/careers/career4.jpeg",
  "/images/careers/career5.jpeg",
  "/images/careers/career6.jpeg",
];
