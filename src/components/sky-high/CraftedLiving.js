import { Flex, Image, Text, Box, Divider, Heading } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";
import { useEffect,useRef } from "react";
import Deck1 from "../sky-high imgs/DECK1.jpeg"
import Deck2 from "../sky-high imgs/DECK2.jpeg"
import Deck3 from "../sky-high imgs/DECK3.jpeg"
import TERRACE from "../sky-high imgs/TERRACE.png"
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
  
  const animateFade = useAnimation();
  const animateY = useAnimation();

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
      px="6.25rem"
      py="5rem"
      direction="column"
      align="center"
      justify="center"
    >
      <Text
        transform={inView ? "none" : "translateY(-50px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        textAlign="center"
        pb="1.875rem"
      >
        CRAFTED LIVING OF SKY HIGH LIFE AND AMENITIES
      </Text>
      <Flex w="100%" h="100%" direction="column">
        {/* first-left-sec */}
        <Flex w="100%" h="100%" align="center" mb="1.562rem" >
          <Flex
            w="48.3%"
            h="100%"
            transition="all 2s 2s"
          >
            <Image
              className="fadein-2sdelay revealOnce"
              w="100%"
              h="23rem"
              src={Deck1}
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            overflow="hidden"
            h="8rem"
            opacity={inView ? "1" : "0"}
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.563rem"
            alignSelf="flex-start"
          >
            <Divider
            className="slidein-top revealOnce"
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="5.25rem"
            />{" "}
            <Box
            className="slidein-top revealOnce"
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />{" "}
          </Flex>
          <Flex h="100%" direction="column" justify="center" alignSelf="center">
          <MtnHd
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 1.5, duration: 2, type: "just" }}
              fontFamily="avenir"
              fontSize="2.125rem"
              mb="0.9rem"
            >
              3 SKY DECKS
            </MtnHd>
            <MtnTxt
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 1.5, duration: 2, type: "just" }}
              fontFamily="veralaRound"
              fontSize="1rem"
              mb="1.5rem"
            >
              Enjoy the panoramic sky views from different levels of the tower.
            </MtnTxt>
            <MtnHd
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 2, duration: 2, type: "just" }}
              fontFamily="avenir"
              fontSize="1.25rem"
              mb="0.9rem"
            >
              CAFE DECK
            </MtnHd>
            <MtnHd
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 3, duration: 2, type: "just" }}
              fontFamily="avenir"
              fontSize="1.25rem"
              mb="0.9rem"
            >
              KIDS AREA DECK
            </MtnHd>
            <MtnHd
                initial={{ opacity: 0 }}
                animate={animateFade}
                transition={{ delay: 4, duration: 2, type: "just" }}
              fontFamily="avenir"
              fontSize="1.25rem"
            >
              LOUNGE DECK
            </MtnHd>
          </Flex>{" "}
        </Flex>
        {/* first-right-sec */}
        <Flex w="100%" h="100%" align="center" justify="center" pb="1.563rem">
          <Flex
            w="100%"
            h="100%"
            pr="1.563rem"
          >
            <Image
              className="fadein revealOnce"
              w="100%"
              h="23rem"
              src={Deck2}
              boxShadow="dark-lg"
            />
          </Flex>
          <Flex
            w="100%"
            h="100%"
          >
            <Image
              className="fadein revealOnce"
              w="100%"
              h="23rem"
              src={Deck3}
              boxShadow="dark-lg"
            />
          </Flex>
        </Flex>
      </Flex>
      <Flex ref={ref} w="100%" h="100%" align="center" overflow="hidden">
        <Flex h="100%" direction="column" alignSelf="center">
          <Heading className="fadein revealOnce" fontFamily="avenir" fontSize="2.125rem" mb="0.9rem">
            SKY TERRACE AVENUE
          </Heading>
          <MtnTxt className="fadein revealOnce" fontFamily="veralaRound" fontSize="1rem">
            The perfect spot to rediscover a <br />
            forgotten time of the day: Golden <br />
            Sunrises.
          </MtnTxt>
        </Flex>
        <Flex
          className="slidein-top revealOnce"
          direction="column"
          align="center"
          px="1.563rem"
          alignSelf="flex-start"
        >
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
        <Flex w="100%" h="100%">
          <Image
            className="fadein revealOnce"
            w="100%"
            h="23rem"
            src={TERRACE}
            boxShadow="dark-lg"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
export default FourthSec;
