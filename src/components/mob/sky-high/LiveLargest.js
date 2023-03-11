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

const FifthSec = () => {
  const [slider, setSlider] = useState(null);
  const redirect =(loc) =>{
    window.localStorage.setItem('commercialPage',true);
    window.location.replace(`${loc.target.id}`);
  }
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
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      pb="3.125rem"
      align="center"
      justify="center"
      direction="column"
      px="1rem"
    >
      <Text
        transform={isInView ? "none" : "translateY(-50px)"}
        opacity={isInView ? "1" : "0"}
        transition="all 1s"
        textAlign="center"
        fontFamily="goudy"
        fontSize="2.125rem"
        mb="1.875rem"
      >
        LIVE LARGEST,<br/>SHOP LARGEST
      </Text>
      <Flex
              overflow="hidden"
              direction="column"
              align="center"
              px="2.5rem"
            >
            </Flex>
            <Heading fontFamily="avenir" fontSize="2rem" mb="0.937rem">
                ARETE PLAZA
              </Heading>
              <Text textAlign="center" fontFamily="veralaRound" fontSize="1rem" mb="0.937rem">
                An impeccable mix of 20 Retail Spaces such as Shopping,
                HyperMarket, Pharmacy, Fine Dining & Entertainment. Two
                enchanting tower lobbies, with a soothing water casacade in the
                front, positioned for your warm welcome.
              </Text>
            <Flex
              opacity={isInView ? "1" : "0"}
              transition="all 2s 2s"
              direction="column"
              alignSelf="center"
            >
        </Flex>
      
      <Box
        position={"relative"}
        height={"18.75rem"}
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
              height="18.75rem"
              position="relative"
              objectPosition="center"
              backgroundRepeat="no-repeat"
              objectFit="cover"
              src={prime}
            />
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
                EXPLORE MORE
              </Button>
    </Flex>
  );
};

export default FifthSec;

const plazaImgs = [
  "/images/sky-high/ARETE PLAZA1.jpg",
  "/images/sky-high/ARETE PLAZA2.jpg",
  "/images/sky-high/ARETE PLAZA3.jpg",
  "/images/sky-high/ARETE PLAZA4.jpg",
];
