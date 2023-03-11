import React, { useState, useRef } from "react";
import { Flex, Heading, Text, Box, IconButton, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useInView } from "framer-motion";
import event1 from "../news-and-media/EVENTS1.jpeg";
import event2 from "../news-and-media/EVENTS2.jpeg";
import event3 from "../news-and-media/EVENTS3.jpeg";
import event4 from "../news-and-media/EVENTS4.jpeg";
import event5 from "../news-and-media/EVENTS5.jpeg";
import event6 from "../news-and-media/EVENTS6.jpeg";
import event7 from "../news-and-media/EVENTS7desk.jpeg";
import event8 from "../news-and-media/EVENTS8desk.jpeg";
import event9 from "../news-and-media/EVENTS9.jpeg";
import event10 from "../news-and-media/EVENTS10.jpeg";

const ThirdSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);
  let [currentSlide, setCurrentSlide] = useState(1);
  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      setCurrentSlide(currentSlide++);
    },
  };

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pl="1.563rem"
      pr="1.563rem"
      pt="1.875rem"
      pb="1.875rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
      >
        PRIME EVENTS
      </Text>
      <Box
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
        position={"relative"}
        height={"100%"}
        width={"full"}
        overflow={"hidden"}
        pl="4.687rem"
        pr="4.687rem"
        align="center"
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
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          position="absolute"
          borderRadius="50%"
          // left={side}
          // top={top}
          left="0"
          top="60%"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          h="3.125rem"
          w="3.125rem"
          borderColor="#B88746"
          border="2px solid"
          _hover={{ bgColor: "none" }}
          onClick={() => slider?.slickPrev()}
        >
          <AiOutlineLeft size="1.875rem" color="#B88746" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          variant="outline"
          position="absolute"
          borderRadius="50%"
          // right={side}
          // top={top}
          right="0"
          top="60%"
          transform={"translate(0%, -50%)"}
          zIndex={2}
          h="3.125rem"
          w="3.125rem"
          borderColor="#B88746"
          border="2px solid"
          _hover={{ bgColor: "none" }}
          onClick={() => slider?.slickNext()}
        >
          <AiOutlineRight size="1.875rem" color="#B88746" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {primeEvents2.map((prime) => (
            <Flex
              w="100%"
             key={prime.id}
            direction="column"
            align="center"
            justify="center">
                <Heading
                  opacity={isInView ? "1" : "0"}
                  transition="all 2s"
                  fontFamily="avenir"
                  fontSize="1.875rem"
                  py="1.563rem"
                >
                {prime.eventName}
              </Heading>
              <Flex 
                direction="row" >
            <Image
              w="50%"
              height="26.875rem"
              px="0.625rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img1}
            />
            <Image
              w="50%"
              height="26.875rem"
              px="0.625rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime.img2}
            />
            </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Flex>
  );
};

const ImgBar = ({ slide }) => {
  let barFillWidth = "0%";
  if (slide > 0) {
    barFillWidth = slide * 10 + "%";
  }
  return (
    <Flex
      ml="1"
      mr="1"
      w="6.25rem"
      h="0.3rem"
      borderRadius="0.9rem"
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
  { id: 1, width1: "520px", img1: event1, width2: "700px", img2: event2, eventName:"SKY HIGH TOWER LAUNCH AT HYATT REGENCY, CHENNAI", },
  { id: 2, width1: "520px", img1: event3, width2: "700px", img2: event4, eventName:"SKY HIGH TOWER LAUNCH AT HYATT REGENCY, CHENNAI", },
  { id: 3, width1: "520px", img1: event5, width2: "700px", img2: event6, eventName:"SKY HIGH TOWER LAUNCH AT HYATT REGENCY, CHENNAI", },
  { id: 4, width1: "520px", img1: event7, width2: "700px", img2: event8, eventName:"CREDAI FAIR PRO 2022", },
  { id: 5, width1: "520px", img1: event9, width2: "700px", img2: event10, eventName:"SBI HOME LOAN UTSAV 2022",},
];

export default ThirdSec;
