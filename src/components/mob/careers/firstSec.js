import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// images
import bgBox from "../../careers imgs/bg-box.jpg";

const MotnHead = motion(Heading);
const MotnTxt = motion(Text);
const MotnImg = motion(Image);

const variants = {
  hidden: { opacity: 0, y: -100 },
  enter: { opacity: 1, y: 0 },
};

const txtvariants = {
  hidden: { opacity: 0, y: 100 },
  enter: { opacity: 1, y: 0 },
};

const FirstSec = () => {
  return (
    <Flex
    pos="relative"
      direction="column"
      w="100%"
      h="100vh"
      align="center"
      bgImage={`linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.2)), url(${bgBox})`}
      
    >
      <Flex w="100%" h="100%" align="center">
        <MotnImg
          w="100%"
          h="100vh"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, type: "just" }}
          src="/images/careers/mobBanner.jpg"
        />
      </Flex>

      <Flex
        zIndex="2"
        top="30%"
        position="absolute"
        w="100%"
        align="center"
        direction="column"
        textAlign="center"
        m="0 1.875rem"
        
      >
        <MotnHead
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 2, type: "just" }}
          fontSize="2.5rem"
          fontFamily="avenir"
          px="1.562rem"
        >
          JOIN OUR TRIBE
        </MotnHead>
        <MotnTxt
        px="0.625rem"
          variants={txtvariants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 2, type: "just" }}
          fontSize="1.125rem"
          fontFamily="veralaRound"
        >
          Let’s join our efforts towards building the unshakable foundation for
          a better tomorrow.
        </MotnTxt>
      </Flex>
    </Flex>
  );
};

export default FirstSec;
