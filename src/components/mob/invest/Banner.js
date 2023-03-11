import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import banner from "../../Invest imgs/MIVAN TECHNOLOGY TOWER.jpg";

const Banner = () => {
  return (
    <Flex w="100%" h="100vh" pos="relative" className="arete-homes-invest-banner">
      <Image
        animation="serv-expand-img 1 1s linear"
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="bottom"
        src={banner}
      />
      <Flex
        w="100%"
        h="100%"
        bgColor="rgba(0,0,0,0.5)"
        pos="absolute"
        justify="center"
      >
        <Text
          animation="fadein2 1 2s linear"
          pos="absolute"
          top="50%"
          transform="translateY(-150%)"
          color="white"
          textShadow="1px 1px 2px black"
          fontFamily="goudy"
          fontSize="3rem"
        >
          INVEST IN A LIFETIME GROWING ASSET
        </Text>
      </Flex>
    </Flex>
  );
};

export default Banner;
