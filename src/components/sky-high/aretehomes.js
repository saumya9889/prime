import React, { useState } from "react";
import { Flex, Heading, Text, Box, IconButton, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const NinethSec = () => {
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    draggable: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };

  return (
    <Flex
      w="100%"
      h="100%"
      pl="100px"
      pr="75px"
      py="100px"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    >
      <Text fontFamily="goudy" fontSize="40px" lineHeight="48px">
        SMART HOMES
      </Text>
      <Heading fontFamily="avenir" fontSize="34px" lineHeight="48px" py="25px">
        BUY . RENT . INVEST .
      </Heading>
      <Text fontFamily="veralaRound" fontSize="18px" pb="25px">
        Premium 2 BHK & 3 BHK serviced apartments in North Chennai, with
        customized experience, your way.
      </Text>
      <Box
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
          {primeEvents2.map((prime) => (
            <Image
              key={prime.id}
              w={prime.width}
              height="468px"
              pr="20px"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img}
            />
          ))}
        </Slider>
      </Box>
      {/* Left Icon */}
      <Flex pt="25px" w="100%" h="100%" align="center" justify="center">
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
          borderRadius="full"
          // position="absolute"
          // bottom="0"
          // left="0"
          // transform={"translate(0%, -50%)"}
          mx="5px"
          zIndex={2}
          onClick={() => {
            slider?.slickPrev();
            setCurrentSlide(currentSlide--);
          }}
        >
          <AiOutlineLeft color="#B88746" size="30px" />
        </IconButton>
        {/* fill box */}
        01
        <ImgBar slide={currentSlide} />
        10
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          borderRadius="full"
          variant="outline"
          borderColor="#B88746"
          // position="absolute"
          // right={side}
          // top={top}
          // bottom="0"
          // right="0"
          // transform={"translate(0%, -50%)"}
          mx="5px"
          zIndex={2}
          onClick={() => {
            slider?.slickNext();
            setCurrentSlide(currentSlide++);
          }}
        >
          <AiOutlineRight color="#B88746" size="30px" />
        </IconButton>
      </Flex>
    </Flex>
  );
};

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  console.log(slide);
  if (slide > 0) {
    barFillWidth = slide * 10 + "%";
  }
  console.log(barFillWidth);
  return (
    <Flex
      ml="1"
      mr="1"
      w="100px"
      h="5px"
      borderRadius="15px"
      align="center"
      justify="flex-start"
    >
      <Flex
        color="black"
        bgColor="#B88746"
        style={{ width: barFillWidth }}
        p="1"
        justifyContent="center"
        transition="all .3s"
      ></Flex>
    </Flex>
  );
};

const primeEvents = [
  "/images/news-and-media/EVENTS1.jpeg",
  "/images/news-and-media/EVENTS2.jpeg",
  "/images/news-and-media/EVENTS3.jpeg",
  "/images/news-and-media/EVENTS4.jpeg",
  "/images/news-and-media/EVENTS5.jpeg",
  "/images/news-and-media/EVENTS6.jpeg",
  "/images/news-and-media/EVENTS7.jpeg",
  "/images/news-and-media/EVENTS8.jpeg",
  "/images/news-and-media/EVENTS9.jpeg",
  "/images/news-and-media/EVENTS10.jpeg",
];

const primeEvents2 = [
  { id: 1, width: "520px", img: "/images/news-and-media/EVENTS1.jpeg" },
  { id: 2, width: "700px", img: "/images/news-and-media/EVENTS2.jpeg" },
  { id: 3, width: "520px", img: "/images/news-and-media/EVENTS3.jpeg" },
  { id: 4, width: "700px", img: "/images/news-and-media/EVENTS4.jpeg" },
  { id: 5, width: "520px", img: "/images/news-and-media/EVENTS5.jpeg" },
  { id: 6, width: "700px", img: "/images/news-and-media/EVENTS6.jpeg" },
  { id: 7, width: "520px", img: "/images/news-and-media/EVENTS7.jpeg" },
  { id: 8, width: "700px", img: "/images/news-and-media/EVENTS8.jpeg" },
  { id: 9, width: "520px", img: "/images/news-and-media/EVENTS9.jpeg" },
  { id: 10, width: "700px", img: "/images/news-and-media/EVENTS10.jpeg" },
];

export default NinethSec;
