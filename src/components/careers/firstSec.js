import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// images
import bgBox from "../careers imgs/bg-box.jpg";
import firstSec from "../careers imgs/first section.jpg";

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
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      bgImage={`linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url(${bgBox})`}
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
    >
      <Flex w="100%" h="100%" align="center" justify="center">
        <MotnImg
          w="100%"
          h="100%"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 2, scale: 1 }}
          transition={{ duration: 2, type: "just" }}
          src={firstSec}
        />
      </Flex>

      <Flex
        w="40%"
        align="center"
        justify="flex-end"
        direction="column"
        textAlign="center"
        m="0 1.875rem"
      >
        <MotnHead
          variants={variants}
          initial="hidden"
          animate="enter"
          transition={{ duration: 2, type: "just" }}
          fontSize="40px"
          fontFamily="avenir"
          px="1.562rem"
          pb="0.937rem"
        >
          JOIN OUR TRIBE
        </MotnHead>
        <MotnTxt
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
