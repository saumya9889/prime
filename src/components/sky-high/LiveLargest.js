import {
  Flex,
  Text,
  Box,
  Image,
  Divider,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useInView } from "framer-motion";
import React, { useState } from "react";

import { useRef } from "react";
import Slider from "react-slick";

import AratePlaza1 from "../sky-high imgs/sky high - arete plaza 1.png"
import AratePlaza2 from "../sky-high imgs/sky high - arete plaza 2.jpeg"
import AratePlaza3 from "../sky-high imgs/sky high - arete plaza 3.png"
import AratePlaza4 from "../sky-high imgs/sky high - arete plaza 4.png"

const FifthSec = () => {
  const [slider, setSlider] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
  });

  const settings = {
    draggable: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    //pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  const redirect =(loc) =>{
    window.localStorage.setItem('commercialPage',true);
    window.location.replace(`${loc.target.id}`);
  }
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pb="3.125rem"
      align="center"
      justify="center"
      direction="column"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 1s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.875rem"
      >
        LIVE LARGEST, SHOP LARGEST
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
          {plazaImgs.map((prime) => (
            <Image
            opacity={isInView ? "1" : "0"}
            transition="all 2s"
              key={prime}
              w="100%"
              height="29.25rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime}
            />
          ))}
        </Slider>
        <Flex
          pos="absolute"
          top="0"
          w="100%"
          left="50%"
          bgColor="rgba(255,255,255, 0.5)"
          h="100%"
        >
          <Flex
            w="40%"
            h="100%"
            left="0"
            top="0"
            pos="absolute"
            bgColor="white"
            align="flex-start"
            justify="center"
            pr="3.125rem"
          >
            <Flex
              overflow="hidden"
              direction="column"
              align="center"
              h="10rem"
              w="5rem"
              px="2.5rem"
            >
              <Flex  className="slidein-top reveal"direction="column" align="center" w="100%" h="100%">
              <Divider
                orientation="vertical"
                border="3px solid"
                borderColor="#DFBD69"
                bgColor="#DFBD69"
                h="7rem"
              />{" "}
              <Box
                height="1.875rem"
                width="1.875rem"
                backgroundColor="#DFBD69"
                border="3px solid white"
                boxShadow="0px 0px 0px 3px #B88746"
                borderRadius="50%"
              />
              </Flex>
            </Flex>
            <Flex
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              direction="column"
              alignSelf="center"
            >
              <Heading fontFamily="avenir" fontSize="2.125rem" mb="0.937rem">
                ARETE PLAZA
              </Heading>
              <Text fontFamily="veralaRound" fontSize="1rem" mb="0.937rem">
                An impeccable mix of 20 Retail Spaces such as Shopping,
                HyperMarket, Pharmacy, Fine Dining & Entertainment. Two
                enchanting tower lobbies, with a soothing water casacade in the
                front, positioned for your warm welcome.
              </Text>
              <Button
                id="/commercial-properties"
                onClick={(e)=>redirect(e)}
                w="10.875rem"
                h="3.187rem"
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
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default FifthSec;

const plazaImgs = [
 AratePlaza1,
 AratePlaza2,
 AratePlaza3,
 AratePlaza4,
];
