import { Box, Flex, Image } from "@chakra-ui/react";
import { motion, useInView } from "framer-motion";
import React from "react";
import { useRef } from "react";

const MtnBx = motion(Box);

const EightSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Flex
      ref={ref}
      className="expandcar reveal"
      w="100%"
      h="35.5rem"
      pos="relative"
    >
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        objectPosition="center bottom"
        src="/images/arete-homes/MIVAN TECHNOLOGY TOWER.jpg"
      />
      <Image
        pos="absolute"
        top="1.25rem"
        left="50%"
        h="6.25rem"
        transform="translateX(-50%)"
        src="/images/arete-homes/MIVAN TECHNOLOGY 2.png"
      />
      <Image
        top="8.5rem"
        left="50%"
        h="4.375rem"
        pos="absolute"
        transform="translateX(-50%)"
        src="/images/arete-homes/MIVAN TECHNOLOGY 1.png"
      />
    </Flex>
  );
};

export default EightSec;
