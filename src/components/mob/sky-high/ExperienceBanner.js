import { Flex, Image } from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useRef } from "react";
// images
import Banner from "../../sky-high imgs/3RD SECTION.jpg";
import bannerasset from "../../sky-high imgs/3RD SECTION ASSET.png";

const ThirdSec = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <Flex
      ref={ref}
      w="100%"
      h="35.5rem"
      align="center"
      justify="center"
      pos="relative"
      
    >
      <Image
        transform={inView ? "scale(1)" : "scale(0.6)"}
        transition="all 2s"
        w="100%"
        h="100%"
        src={Banner}
        objectPosition="10% 10%"
        bgRepeat="no-repeat"
        objectFit="cover"
      />
      <Image
        transform={inView ? "none" : "translateX(-100px)"}
        opacity={inView ? "1" : "0"}
        transition="all 2s"
        h="5.5rem"
        src={bannerasset}
        pos="absolute"
        top="10.812rem"
        right="0.55rem"
      />
    </Flex>
  );
};

export default ThirdSec;
