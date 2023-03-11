import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
//import { useInView } from "framer-motion";
import {
  Flex,
  Heading,
  Text,
  Image,
  TableContainer,
  Table,
  Button,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import ModalWindwow from "../modalWindow";
import SkyHighTower from "../sky-high imgs/TERRACE.png";
const EightSec = () => {
  //const ref = useRef(null);
  //const isInView = useInView(ref, { once: true });
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "50px",
  });
  
  const [isOpen, setIsOpen]= useState(false);
  const close =() =>{
    setIsOpen(false);
  }
  const open =() =>{
    setIsOpen(true);
  }
  return (
    <>
    {isOpen?<ModalWindwow modalTitle={"SKY HIGH TOWER"} modalImage={SkyHighTower} isOpen={isOpen} onClose={()=>close()} />:<></>}

    <Flex
      ref={ref}
      w="100%"
      h="100%"
      px="6.25rem"
      pt="5rem"
      pb="1.875rem"
      direction="column"
      align="center"
      justify="center"
      bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
      bgRepeat="no-repeat"
      bgPos="center"
      bgSize="cover"
      overflow="hidden"
    >
      <Text
        className="slidein-top revealOnce"
        transition="all 2s"
        fontFamily="goudy"
        fontSize="2.5rem"
        lineHeight="3rem"
        textTransform="uppercase"
      >
        A delightful mix of sky residences
      </Text>
      <Heading
        opacity={inView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="avenir"
        fontSize="2.125rem"
        lineHeight="3rem"
        py="1.562rem"
      >
        FOR CO-LIVING, STUDENT HOUSING & SERVICED APARTMENTS
      </Heading>
      <Text
        opacity={inView ? "1" : "0"}
        transition="all 2s 1s"
        fontFamily="veralaRound"
        fontSize="1rem"
        pb="1.562rem"
      >
        An unique collection of flexi-design 2 BHK sky residences, well-planned
        with convertible option, for you to customize your home & needs. The 5
        different design innovations allow variations in private or shared
        rooms, more bedrooms or spacious living, one or more bathrooms etc.
        Making it possible to fit up to 5 beds in every apartment.
      </Text>
      <Flex w="100%" h="100%" align="center" justify="center" gap="0.937rem">
        <Flex boxShadow="dark-lg" overflow="hidden">
          <Image
            className="image-sliedleft revealOnce"
            w="100%"
            src="/images/sky-high/FLOOR PLAN1.jpg"
            filter="auto"
            blur="5px"
          />
        </Flex>
        <Flex boxShadow="dark-lg" overflow="hidden" >
          <Image
            className="image-sliedright revealOnce"
            w="100%"
            src="/images/sky-high/FLOOR PLAN2.jpg"
            filter="auto"
            blur="5px"
          />
        </Flex>
      </Flex>
      <Flex
        opacity={inView ? "1" : "0"}
        transition="all 2s 3s"
        w="100%"
        h="100%"
        align="center"
        justify="space-between"
        mt="2rem"
      >
        {" "}
        <Flex w="100%" direction="column" pr="1.875rem">
          <Flex
            w="100%"
            bgGradient="linear(to-b,#DFBD69, #B88746)"
            textTransform="uppercase"
          >
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1.25rem"
              fontWeight="400"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              Configuration
            </Text>
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1.25rem"
              fontWeight="400"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              Saleable Area
            </Text>
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1.25rem"
              fontWeight="400"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              Net Usable Area
            </Text>
            <Text
              w="100%"
              fontFamily="veralaRound"
              fontSize="1.25rem"
              fontWeight="400"
              color="white"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              Rera Carpet Area
            </Text>
          </Flex>
          <Flex w="100%" textTransform="uppercase">
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              borderRight="none"
              p="0.937rem"
            >
              SMART 2 BHK
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              p="0.937rem"
              border="1px solid #B88746"
              borderRight="none"
            >
              690
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              border="1px solid #B88746"
              borderRight="none"
              textAlign="center"
              p="0.937rem"
            >
              452
            </Heading>
            <Heading
              w="100%"
              fontFamily="avenir"
              fontSize="1.25rem"
              fontWeight="bold"
              textAlign="center"
              border="1px solid #B88746"
              p="0.937rem"
            >
              447
            </Heading>
          </Flex>
        </Flex>
        <Button
          opacity={inView ? "1" : "0"}
          transition="all 2s 3s"
          w="9.437rem"
          h="3.187rem"
          fontSize="1rem"
          fontFamily="avenir"
          bgGradient="linear(to-b, #B88746 ,#DFBD69)"
          color="white"
          _hover={{
            bgGradient: "linear(to-b, #DFBD69, #B88746)",
          }}
          _active={{ bgGradient: "linear(to-b, #B88746 ,#DFBD69)" }}
          onClick={open}
        >
          CHECK PRICE
        </Button>
      </Flex>
    </Flex>
    </>
  );
};

export default EightSec;
