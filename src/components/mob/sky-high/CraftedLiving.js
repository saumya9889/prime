import { Flex, Image, Text, Box, Divider, Heading, IconButton } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useState } from "react";
import { useEffect,useRef } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Slider from "react-slick";
//import { useInView } from "react-intersection-observer";

const MtnTxt = motion(Text);
const MtnImg = motion(Image);
const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);
const MtnDvd = motion(Divider);

const FourthSec = () => {
  /*const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });*/
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  
  const [slider, setSlider] = useState(null);
  const animateFade = useAnimation();
  const animateY = useAnimation();

  const settings = {
    draggable: true,
    infinite: true,
    autoplay: true,
    /*speed: 500,*/
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  useEffect(() => {
    if (inView) {
      animateFade.start({
        opacity: 1,
      });
      animateY.start({
        opacity: 1,
        y: 0,
      });
    }
  }, [inView, animateFade, animateY]);

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="1rem"
      pt="3.125rem"
      pb="5rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={inView ? "none" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.125rem"
        textAlign="center"
        pb="1.875rem"
      >
        CRAFTED LIVING OF SKY HIGH LIFE AND AMENITIES
      </Text>
      <Flex w="100%" h="100%" direction="column">
          <Flex h="100%" direction="column" justify="center" alignSelf="center">
          <MtnHd
              textAlign="center"
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 1.5, duration: 2, type: "just" }}
              fontFamily="avenir"
              fontSize="2rem"
              mb="0.9rem"
            >
              3 SKY DECKS
            </MtnHd>
            <MtnTxt
              textAlign="center"
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 1.5, duration: 2, type: "just" }}
              fontFamily="veralaRound"
              fontSize="1rem"
              mb="1.5rem"
            >
              Enjoy the panoramic sky views from different levels of the tower.
            </MtnTxt>
            
          </Flex>{" "}
        </Flex>
        <Box
          className="fadein revealOnce"
          position={"relative"}
          height={"100%"}
          width={"100%"}
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
          <Flex
            direction="column"
            w="100%"
            h="100%"
            transition="all 2s 2s"
          >
            <Heading
              pb="1rem"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              CAFE DECK
            </Heading>
            
            <Image
              w="100%"
              h="18.75rem"
              src="/images/sky-high/DECK1.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            direction="column"
            w="100%"
            h="100%"
            transition="all 2s 2s"
          >
            <Heading
              pb="1rem"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              KIDS AREA DECK
            </Heading>
            
            <Image
              w="100%"
              h="18.75rem"
              src="/images/sky-high/DECK2.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            direction="column"
            w="100%"
            h="100%"
            transition="all 2s 2s"
          >
            <Heading
              pb="1rem"
              textAlign="center"
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              LOUNGE DECK
            </Heading>
            <Image
              w="100%"
              h="18.75rem"
              src="/images/sky-high/DECK3.jpg"
              boxShadow="dark-lg"
            />
          </Flex>
          </Slider>
          
        </Box>
        <Flex w="100%" h="3.125rem" mt="1rem" pos="relative">
          <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="left-arrow"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              borderRadius="full"
              bottom="-5"
              right="30%"
              // transform={"translateX(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickNext();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
              <AiOutlineRight color="#B88746" size="2.5rem" />
              
            </IconButton>
            <IconButton
              h="3.125rem"
              w="3.125rem"
              pos="absolute"
              aria-label="right-arrow"
              borderRadius="full"
              variant="outline"
              borderColor="#B88746"
              borderWidth="2px"
              bottom="-5"
              left="30%"
              // transform={"translate(-50%)"}
              mx="0.312rem"
              mb="1.562rem"
              zIndex={2}
              onClick={() => {
                slider?.slickPrev();
              }}
              color="white"
              _hover={{ bgColor: "none" }}
            >
            <AiOutlineLeft color="#B88746" size="2.5rem" />
            </IconButton>
            </Flex>
      <Flex mt="2rem" ref={ref} w="100%" h="100%" align="center" overflow="hidden" direction="column">
        <Flex h="100%" direction="column" alignSelf="center">
          <Heading px=".563rem" textAlign="center" className="fadein revealOnce" fontFamily="avenir" fontSize="2rem" mb="0.9rem">
            SKY TERRACE AVENUE
          </Heading>
          <MtnTxt pb="1rem" textAlign="center" className="fadein revealOnce" fontFamily="veralaRound" fontSize="1rem">
            The perfect spot to rediscover a
            forgotten time of the day: Golden
            Sunrises.
          </MtnTxt>
        </Flex>
        <Flex w="100%" h="100%">
          <Image
            className="fadein revealOnce"
            w="100%"
            h="18.75rem"
            src="/images/sky-high/TERRACE.jpg"
            boxShadow="dark-lg"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FourthSec;
