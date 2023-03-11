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
const MtnFlx = motion(Flex);
const MtnStk = motion(VStack);

const ProSites = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
      ref={ref}
      direction="column"
      w="100%"
      h="100%"
      pt="3.125rem"
      pb="3.125rem"
      px="1rem"
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
        textAlign="center"
        fontSize="2.125rem"
       
      >
        OUR <br/>PROJECT SITES
      </MtnHd>
      <MtnFlx
        direction="column"
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}
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
          <Text fontFamily="veralaRound" fontSize="1rem" mb="0.938rem">
            V no.76, Peruncheri, Ponneri <br /> Opposite Velammal International{" "}
            <br />
            School,
            <br />
            North Chennai - 601204
          </Text>
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
          <Text fontFamily="veralaRound" fontSize="1rem" mb="0.938rem">
            V. No. 76 , Thatchoor 1,
            <br /> Perucheri, Ponneri,
            <br /> Taluk, Thiruvallur District, <br />
            Chennai- 6001 204
          </Text>
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
          <Text fontFamily="veralaRound" fontSize="1rem">
            Next To Arete Homes <br /> V no.76, Peruncheri, Ponneri <br />
            North Chennai - 601204
          </Text>
        </Flex>
      </MtnFlx>
      <MtnStk
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}
        mb="3.125rem"
      >
        <Text fontFamily="veralaRound" fontSize="1.25rem"  textAlign="center">
          For consultancy related queries,<br/>email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="1.5rem">
          info@primelifespace.com
        </Heading>
      </MtnStk>
      <MtnStk
        initial={{ opacity: 0 }}
        animate={animateFade}
        transition={{ delay: 2, duration: 2, type: "just" }}
      >
        <Text fontFamily="veralaRound" fontSize="1.25rem" textAlign="center">
          For procurement related queries,<br/>email us at
        </Text>
        <Heading fontFamily="avenir" fontSize="1.5rem">
          purchase@primelifespace.com
        </Heading>
      </MtnStk>
    </Flex>
  );
};

export default ProSites;
