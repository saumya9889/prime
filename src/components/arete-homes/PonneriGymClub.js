import {
  Flex,
  Image,
  Text,
  Box,
  IconButton,
  Button,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import pgclogo from "../arete-homes imgs/Asset 1.png";
import activityArea from "../arete-homes imgs/PGC-ACTIVITY AREA.jpeg";
import banquetHall from "../arete-homes imgs/PGC-BANQUET HALL.jpg";
import cafeteria from "../arete-homes imgs/PGC-CAFETERIA.jpg";
import grandEntrance from "../arete-homes imgs/PGC-GRAND ENTRANCE.png";
import swimmingPool from "../arete-homes imgs/PGC-SWIMMING POOL.png";
//import grandEntrance from "../arete-homes imgs/PGC-GRAND ENTRANCE.jpg";
//import swimmingPool from "../arete-homes imgs/PGC-SWIMMING POOL.jpg";
import gym from "../arete-homes imgs/PGC-GYM.JPG";
import multiSports from "../arete-homes imgs/PGC-multi sports arena.jpg";
import squashCourt from "../arete-homes imgs/PGC-SQUASH COURT.jpg";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SeventhSec = () => {
  const [slider, setSlider] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const settings = {
    // className: "center",
    centerMode: true,
    autoplay:true,
    infinite: true,
    draggable: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="1.875rem"
      pb="5rem"
      px="1.562rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
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
        <Image src={pgclogo} h="2.5rem" w="2.5rem" mr="0.625rem" />
        <Text fontFamily="goudy" fontSize="2.5rem">
          <Text as="span" fontSize="1.5rem">
            PVT.
          </Text>
          PONNERI GYMKHANA CLUB
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
        <IconButton
          aria-label="left-arrow"
          variant="outline"
          borderColor="#B88746"
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
      <Button
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
        w="10.875rem"
        h="3.187rem"
        mt="1.562rem"
        fontSize="1rem"
        fontFamily="avenir"
        bgGradient="linear(to-b, #B88746 ,#DFBD69)"
        color="white"
        _hover={{
          bgGradient: "linear(to-b, #DFBD69, #B88746)",
        }}
        _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
      >
        EXPLORE MORE
      </Button>
    </Flex>
  );
};

export default SeventhSec;

const gymclubimgs = [
  { img: activityArea, title: "ACTIVITY AREA" },
  { img: banquetHall, title: "BANQUET HALL" },
  { img: cafeteria, title: "CAFETERIA" },
  {
    img: grandEntrance,
    title: "GRAND ENTRANCE",
  },
  { img: gym, title: "GYM" },
  {
    img: multiSports,
    title: "MULTI SPORTS ARENA",
  },
  { img: squashCourt, title: "SQUASH COURT" },
  { img: swimmingPool, title: "SWIMMING POOL" },
];
