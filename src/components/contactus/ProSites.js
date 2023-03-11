import {
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const MtnHd = motion(Heading);
const MtnTxt = motion(Text);
const MtnStk = motion(VStack);

const ProSites = () => {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { });
  const animateHd = useAnimation();
  const animateFade = useAnimation();
  useEffect(() => {
    if (isInView) {
      animateHd.start({
        opacity: 1,
        y: 0,
      });
      animateFade.start({
        opacity: 1,
      });
    }
  }, [isInView, animateHd, animateFade]);
  return (
    <Flex
      overflow="hidden"
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      px="6.25rem"
      align="center"
      justify="center"
      pos="relative"
    >
      <MtnHd
        initial={{ opacity: 0, y: -50 }}
        animate={animateHd}
        transition={{ duration: 2, type: "just" }}
        fontFamily="goudy"
        fontWeight="400"
        fontSize="2.5rem"
      >
        OUR PROJECT SITES
      </MtnHd>
      <Flex
        
        w="100%"
        mt="1.875rem"
        mb="3.125rem"
        // px="6.25rem"
        justify="center"
      >
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Image
            className="fadein revealOnce"
            h="6.25rem"
            mb="0.938rem"
            w="18.75rem"
            src="/images/contactus/Asset-1.png"
          />
          <MtnTxt initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }} fontFamily="veralaRound" fontSize="1rem">
            V no.76, Peruncheri, Ponneri <br /> Opposite Velammal International{" "}
            <br />
            School,
            <br />
            North Chennai - 601204
          </MtnTxt>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Image
            className="fadein revealOnce"
            h="6.25rem"
            mb="0.938rem"
            w="18.75rem"
            src="/images/contactus/Asset-2.png"
          />
          <MtnTxt
          initial={{ opacity: 0 }}
          animate={animateFade}
          transition={{ delay: 2, duration: 2, type: "just" }} fontFamily="veralaRound" fontSize="1rem">
            V. No. 76 , Thatchoor 1,
            <br /> Perucheri, Ponneri,
            <br /> Taluk, Thiruvallur District, <br />
            Chennai- 6001 204
          </MtnTxt>
        </Flex>
        <Flex
          direction="column"
          w="100%"
          align="center"
          h="100%"
          textAlign="center"
        >
          <Image
            className="fadein revealOnce"
            h="6.25rem"
            mb="0.938rem"
            w="18.75rem"
            src="/images/contactus/Asset-3.png"
          />
          <MtnTxt
          initial={{ opacity: 0 }}
          animate={animateFade}
          transition={{ delay: 2, duration: 2, type: "just" }} fontFamily="veralaRound" fontSize="1rem">
            Next To Arete Homes <br /> V no.76, Peruncheri, Ponneri <br />
            North Chennai - 601204
          </MtnTxt>
        </Flex>
      </Flex>
      <MtnStk initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }} mb="1.875rem">
        <Text fontFamily="veralaRound" fontSize="1.25rem">
          For consultancy related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="1.5rem">
          info@primelifespace.com
        </Heading>
      </MtnStk>
      <MtnStk mb="3.125rem" initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}>
        <Text fontFamily="veralaRound" fontSize="1.25rem">
          For procurement related queries, email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="1.5rem">
          purchase@primelifespace.com
        </Heading>
      </MtnStk>
    </Flex>
  );
};

export default ProSites;
