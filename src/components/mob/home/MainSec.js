import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Carousel from "./Carousel";

const MotnHead = motion(Heading);

const MainSec = () => {
  return (
    <>
    <Carousel/>
    <Flex
      w="100%"
      h="27.6rem"
      direction="row"
    >
      <Text textAlign="center" margin="3rem auto">
        <MotnHead
          fontSize="1.5rem"
          fontFamily="avenir"
          letterSpacing="wide"
          textAlign="center"
          // initial={{ x: 460, y: 350 }}
          // animate={{  }}
          transition={{ delay: 3, duration: 5, type: "just" }}
          
        >
          TRANSFORMING
        </MotnHead>
        <br/>
        <MotnHead
          fontSize="1.5rem"
          fontFamily="avenir"
          letterSpacing="wide"
          textAlign="center"
          // initial={{ opacity: 0, x: [375, 375, 375], y: [350, 250, 250] }}
          // transition={{ delay: 3, duration: 5, type: "just" }}
          
        >
          NORTH CHENNAI
        </MotnHead>
        <MotnHead
          fontSize="1.5rem"
          fontFamily="avenir"
          letterSpacing="wide"
          // initial={{ opacity: 0, x: [450, 400], y: [450, 250] }}
          // transition={{ delay: 3, duration: 5, type: "just" }}
          textAlign="center"
          zIndex="4"
          mt="1rem"
        >
          SKYLINE
        </MotnHead>
        <Text
          
          fontWeight="400"
          fontFamily="veralaRound"
          fontSize="1rem"
          width="100%"
          mt="1rem"
        >
          Arete Homes your wish for a <br /> smart living, NOW GRANTED
        </Text>
        <Button
          
          w="162px"
          h="51px"
          fontSize="16px"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          mt="1.5rem"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
        >
          EXPLORE NOW
        </Button>
      </Text>{" "}
     
    </Flex>
    </>
  );
};

export default MainSec;
