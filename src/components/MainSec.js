import { Button, Flex, Heading, Text, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "./Carousel";

const MotnHead = motion(Heading);

const MainSec = () => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgImage={"/images/bg.png"}
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      align="center"
      justify="center"
      pos="relative"
    >
      <Flex
        direction="column"
        w="35%"
        h="100%"
        pos="absolute"
        left="4%"
        align="flex-start"
        justify="center"
      >
        <MotnHead
          fontSize="40px"
          fontFamily="avenir"
          letterSpacing="wide"
          // initial={{ x: 460, y: 350 }}
          // animate={{  }}
          transition={{ delay: 3, duration: 5, type: "just" }}
          zIndex="4"
        >
          TRANSFORMING
        </MotnHead>
        <MotnHead
          fontSize="40px"
          fontFamily="avenir"
          letterSpacing="wide"
          // initial={{ opacity: 0, x: [375, 375, 375], y: [350, 250, 250] }}
          // transition={{ delay: 3, duration: 5, type: "just" }}
          zIndex="4"
        >
          NORTH CHENNAI
        </MotnHead>
        <MotnHead
          fontSize="40px"
          fontFamily="avenir"
          letterSpacing="wide"
          // initial={{ opacity: 0, x: [450, 400], y: [450, 250] }}
          // transition={{ delay: 3, duration: 5, type: "just" }}
          zIndex="4"
        >
          SKYLINE
        </MotnHead>
        <Text
          pt="15px"
          pb="17px"
          pr="4"
          fontWeight="400"
          fontFamily="veralaRound"
          lineHeight="36px"
          fontSize="18px"
        >
          Arete Homes your wish for a <br /> smart living, NOW GRANTED
        </Text>
        <Link _hover={{textDecoration:"none"}} href="/arete-homes">
        <Button
          my="9px"
          w="162px"
          h="51px"
          fontSize="16px"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          EXPLORE NOW
        </Button>
        </Link>
      </Flex>{" "}
      <Flex
        w="75%"
        h="100%"
        justify="flex-end"
        align="flex-end"
        pos="absolute"
        right="0"
      >
        <Carousel />
      </Flex>
    </Flex>
  );
};

export default MainSec;
