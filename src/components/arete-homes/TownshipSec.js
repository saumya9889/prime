import { Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React from "react";

import { useRef } from "react";

const FifthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="100%"
      direction="column"
      align="center"
      justify="center"
      pt="5rem"
      pb="1.875rem"
      px="6.25rem"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Text
        transform={isInView ? "none" : "translateY(-100px)"}
        opacity={isInView ? 1 : 0}
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        mb="1.875rem"
      >
        A TOWNSHIP THAT DEFINES SMART LIVING
      </Text>
      <Flex w="100%" h="100%">
        <Flex w="100%" h="100%" direction="column" mr="1.562rem">
          <Flex direction="column" align="center" mb="1.875rem">
            <Image
              className="expandcar revealOnce"
              src="/images/arete-homes/arete meditation retreat 1.jpg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              ARETE MEDITATION RETREAT
            </Heading>
          </Flex>
          <Flex direction="column" align="center">
            <Image
              className="expandcar revealOnce"
              src="/images/arete-homes/kids play area.jpeg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              KIDS PLAY AREA
            </Heading>
          </Flex>
        </Flex>
        <Flex w="100%" h="100%" direction="column">
          <Flex direction="column" align="center" mb="1.875rem">
            <Image
              className="expandcar revealOnce"
              src="/images/arete-homes/garden and jogging track.jpg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              GARDEN & JOGGING TRACK
            </Heading>
          </Flex>
          <Flex direction="column" align="center">
            <Image
              className="expandcar revealOnce"
              src="/images/arete-homes/open exercise area.jpg"
              h="21.25rem"
              w="100%"
              boxShadow="lg"
            />
            <Heading fontSize="1.5rem" fontFamily="avenir" pt="0.938rem">
              OPEN EXERCISE AREA
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default FifthSec;
