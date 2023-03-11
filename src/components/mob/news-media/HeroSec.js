import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import banner from "../../news-and-media/BANNER IMAGE1.jpg";

const MtnFlx = motion(Flex);
const MtnHd = motion(Heading);

const FirstSec = () => {
  return (
    <Flex w="100%" h="100vh" pos="relative">
      <MtnFlx
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, type: "just" }}
        w="100%"
        h="100%"
        pos="absolute"
        align="center"
        justify="center"
      ></MtnFlx>
      <Image w="100%" h="100vh" src={banner} objectPosition="right 10%" objectFit="cover"/>
      <MtnHd
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, type: "just" }}
        pos="absolute"
        top="45%"
        textAlign="center"
        w="100%"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3.562rem"
        color="white"
      >
      NEWS & MEDIA
      </MtnHd>
    </Flex>
  );
};

export default FirstSec;
