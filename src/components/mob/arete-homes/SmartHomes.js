import React, { useState } from "react";
import {
  Flex,
  Heading,
  Text,
  Box,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useRef } from "react";
import { useInView } from "framer-motion";

import smart1 from "../../arete-homes imgs/SMART HOME1.JPG";
import smart2 from "../../arete-homes imgs/SMART HOME2.JPG";
import smart3 from "../../arete-homes imgs/SMART HOME3.JPG";
import smart4 from "../../arete-homes imgs/SMART HOME4.jpg";
import smart5 from "../../arete-homes imgs/SMART HOME5.jpg";
import smart6 from "../../arete-homes imgs/SMART HOME6.jpg";
import smart7 from "../../arete-homes imgs/SMART HOME7.jpg";
import smart8 from "../../arete-homes imgs/SMART HOME8.jpg";
import smart9 from "../../arete-homes imgs/SMART HOME9.jpeg";
import { Link } from "react-router-dom";

const NinethSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [slider, setSlider] = useState(null);

  const settings = {
    draggable: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const redirect =(loc) =>{
    window.location.replace(`${loc.target.id}`);
  }
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      pb="1.875rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Text
        transform={isInView ? "translateY(0)" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
      >
        SMART HOMES
      </Text>
      <Heading
        transform={isInView ? "translateY(0)" : "translateY(50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 2s"
        fontFamily="avenir"
        fontSize="1.25rem"
        py="1.563rem"
      >
        BUY . RENT . INVEST .
      </Heading>
      <Text textAlign="center" opacity={isInView ? "1" : "0"} transition="all 2s" fontFamily="veralaRound" fontSize="1.125rem" pb="1.563rem">
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
          {primeEvents.map((prime) => (
            <Flex>
              <Image
                key={prime}
                w="100%"
                h="18.75rem"
                position="relative"
                objectPosition="center center"
                backgroundRepeat="no-repeat"
                objectFit="cover"
                src={prime}
                
              />
            </Flex>
          ))}
        </Slider>
      </Box>
      <Button
      id="/serviced-apartments"
      onClick={(e)=>redirect(e)}
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
                KNOW MORE
              </Button>
    </Flex>
  );
};

const primeEvents = [
  smart1,
  smart2,
  smart3,
  smart4,
  smart5,
  smart6,
  smart7,
  smart8,
  smart9,
];

export default NinethSec;
