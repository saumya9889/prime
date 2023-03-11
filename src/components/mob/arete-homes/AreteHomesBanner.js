import { Flex, Image } from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect } from "react";
import { useRef } from "react";

const MtnImg = motion(Image);

const FourthSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
  const animateX = useAnimation();
  const animateScale = useAnimation();

  useEffect(() => {
    if (isInView) {
      animateX.start({
        x: 0,
        opacity: 1,
      });
      animateScale.start({
        scale: 1,
      });
    }
  });
  return (
    <Flex
      ref={ref}
      className="expandcar reveal"
      w="100%"
      h="35.5rem"
      align="center"
      justify="center"
      pos="relative"
    >
      <MtnImg
        w="100%"
        h="100%"
        src="/images/arete-homes/3RD SECTION.jpg"
        objectPosition="30% 30%"
        bgRepeat="no-repeat"
        objectFit="cover"
      />
      <MtnImg
        initial={{ x: 100}}
        h="6.25rem"
        src="/images/arete-homes/Asset.png"
        pos="absolute"
        bottom="3.125rem"
        right="39%"
        transform={"translateX(-50%)"}
      />
    </Flex>
  );
};

export default FourthSec;
