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
import { useInView } from "framer-motion";
import { useRef } from "react";
import pgclogo from "../../arete-homes imgs/Asset 1.png";
// images
import gym from "../../sky-high imgs/7 - gym.jpg";
import golf from "../../sky-high imgs/5 - Open Golf Putting Area.jpg";
import sports from "../../sky-high imgs/2 - Multi Sports Arena.jpg";
import swimming from "../../sky-high imgs/3 - Swimming Pool High Res.jpg";
import banquet from "../../sky-high imgs/PGC Banquet Hall.jpg";
import spa from "../../sky-high imgs/22 - sauna_s.jpg";
import guest from "../../sky-high imgs/20 - guest rooms.jpg";
import restaurant from "../../sky-high imgs/18 - Restaurant High Res_1.jpg";
import bar from "../../sky-high imgs/PGC Sports Bar.jpg";
import cafeteria from "../../sky-high imgs/16 - Cafeteria High Res_1.jpg";
import terrace from "../../sky-high imgs/PGC Terrace.jpg";
import theatre from "../../sky-high imgs/PGC Theatre.jpg";

const SixthSec = () => {
  const [slider, setSlider] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const settings = {
    // className: "center",
    centerMode:true,
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
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="1.875rem"
      pb="3.125rem"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      {" "}
      <Flex
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s "
        w="100%"
        align="center"
        justify="center"
        pb="1.875rem"
      ><Image src={pgclogo} alignSelf="center" h="2.125rem" w="2.125rem" mr="0.625rem" />
      <Text textAlign="center" fontFamily="goudy" fontSize="2.125rem">
        <Text as="span" fontSize="1.5rem">
          PVT.
        </Text>{" "}
        PONNERI<br/>GYMKHANA CLUB
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
                height="15.625rem"
                pr="0.312rem"
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
      <Button
        opacity={isInView ? "1" : "0"}
        transition="all 2s 2s"
        mt="1.563rem"
                bgGradient="linear(to-b, #B88746 ,#DFBD69)"
                color="white"
                fontSize="1rem"
                fontFamily="avenir"
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

export default SixthSec;

const gymclubimgs = [
  { img: gym, title: "GYM" },
  { img: golf, title: "GOLF PUTTING AREA" },
  { img: sports, title: "MULTI SPORTS ARENA" },
  { img: swimming, title: "SWIMMING POOL" },
  { img: banquet, title: "BANQUET HALL" },
  { img: spa, title: "SPA & SAUNA" },
  { img: guest, title: "GUEST ROOM" },
  { img: restaurant, title: "RESTAURANT" },
  { img: bar, title: "BAR" },
  { img: cafeteria, title: "CAFETERIA" },
  { img: terrace, title: "PARTY TERRACE" },
  { img: theatre, title: "THEATRE" },
];
