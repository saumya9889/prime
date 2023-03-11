import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { BsArrowDown} from "react-icons/bs";
import { AiOutlinePlus} from "react-icons/ai";
import React, { useRef } from "react";

import pmayScheme from "./Pmay scheme.png";
import taxImg from "./tax.png";
import appImg from "./Appreciation.png";
import rentalImg from "./rental.png";
import rentalYield from "./appreciation.svg";
import rentalIncome from "./rental income.svg";
import pmay from "./pmay.svg";
import tax from "./tax.svg";
import { useInView } from "framer-motion";


const Advantages =()=>{
    const advRef = useRef(null);
  const advInView = useInView(advRef, {
    once: true,
    margin: "0px 100px -50px 0px",
  });
      return (
      <>
      <Flex w="100%" px="1rem" direction="column" overflow="hidden" ref={advRef} pb="3.125rem">
      <Text textAlign="center" pt="3.125rem" pb="1.563rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="1.5rem">ADVANTAGES OF INVESTING IN ASSURED RENTAL INCOME</Text>
      <Flex
          mx="25%"
          overflow="hidden"
            w="100%"
            h="100%"
            fontFamily="avenir"
            align="center"
            direction="column"
            gap="1.875rem"
          >
            <Flex w="100%" align="center" justify="flex-start" opacity={advInView?1:0} transitionDelay={"1.5s"}>
              {" "}
              <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalIncome}
                mr="0.625rem"
              />
              <Heading color="#D4AD4B" fontSize="1.25rem" fontFamily="avenir">
                RENTAL INCOME
              </Heading>
            </Flex>
            <Flex w="100%" align="center" justify="flex-start" opacity={advInView?1:0} transitionDelay={"2s"}>
            <Image
                w="3.125rem"
                h="3.125rem"
                src={rentalYield}
                mr="0.625rem"
              />
              
              <Heading color="#D4AD4B" fontSize="1.25rem">
              APPRECIATION
              </Heading>
            </Flex>
            <Flex w="100%" align="center" justify="flex-start" opacity={advInView?1:0} transitionDelay={"2.5s"}>
              <Image w="3.125rem" h="3.125rem" src={pmay} mr="0.625rem" />
              <Heading color="#D4AD4B" fontSize="1.25rem">
                PMAY SCHEME
              </Heading>
            </Flex>
            <Flex w="100%" align="center" justify="flex-start" opacity={advInView?1:0} transitionDelay={"3s"}>
              {" "}
              <Image w="3.125rem" h="3.125rem" src={tax} mr="0.625rem" />
              <Heading color="#D4AD4B" fontSize="1.25rem">
                TAX BENEFIT
              </Heading>
            </Flex>
          </Flex>
          <Text textAlign="center" color="#D4AD4B" fontWeight="bold" fontSize="3rem" opacity={advInView?1:0} transitionDelay={"3.5s"}>
          <BsArrowDown style={{height:"5rem", textAlign:"center",position: 'relative',left: '11rem',}} transitionDelay={"3.5s"}/>
            </Text>
            <Text textAlign="center" color="#D4AD4B" fontFamily="avenir" fontWeight="bold" fontSize="1.25rem" opacity={advInView?1:0} transitionDelay={"4s"}>
            INCOME GROWTH OF YOUR INVESTMENT
            </Text>
            <SimpleGrid mt="1.563rem" gap=".625rem" columns={1}>
            <Flex
            direction="column"
            className="fadein revealOnce"
            w="100%"
            h="17.5rem"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            boxShadow="2xl"
          >
            <Flex w="100%" h="100%" direction="column">
              <Heading textAlign="center" fontFamily="avenir" fontSize="1.125rem" pb="1rem">
            RENTAL INCOME
            </Heading>
            <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">The biggest advantage in rent yielding properties is that it appreciates in value over time quickly.</Text>
            </Flex>
            <Image
                justifySelf="flex-end"
                h="10rem"
                w="10rem"
                src={rentalImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
          </Flex>
          <Flex
            direction="column"
            className="fadein revealOnce"
            w="100%"
            h="19.5rem"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            boxShadow="2xl"
          >
            <Flex w="100%" h="100%" direction="column">
              <Heading  textAlign="center" fontFamily="avenir" fontSize="1.125rem" pb="1rem">
              PMAY SCHEME
            </Heading>
            <Text textAlign="center" pb="1rem" fontSize="1rem" fontFamily="varela Round">The first home buyers get additional exemption of up to 2.67 Lakhs. Thus, generating surplus income by investing in assured rental returns and owning an asset..</Text>
            </Flex>
            <Image
                mt="-1rem"
                justifySelf="flex-end"
                h="10rem"
                w="10rem"
                src={pmayScheme}
                objectFit="contain"
                objectPosition="50% 80%"
              />
          </Flex>
          <Flex
            direction="column"
            className="fadein revealOnce"
            w="100%"
            h="23rem"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            boxShadow="2xl"
          >
            <Flex w="100%" h="100%" direction="column">
              <Heading  textAlign="center" fontFamily="avenir" fontSize="1.125rem" pb="1rem">
            APPRECIATION
            </Heading>
            <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">An investment in the real estate is considered the safest and fruitful choice. The developing areas show tremendous appreciation due to increasing migration, housing developments and social fabric with in short period of time.</Text>
            </Flex>
            <Image
                mt="-10rem"
                justifySelf="flex-end"
                h="10rem"
                w="10rem"
                src={appImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
          </Flex>
          <Flex
           className="fadein revealOnce"
            w="100%"
            h="23.5rem"
            direction="column"
            pt="1.875rem"
            px="1.875rem"
            align="center"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover"
            boxShadow="2xl"
          >
            <Flex w="100%" h="100%" direction="column">
              <Heading  textAlign="center" fontFamily="avenir" fontSize="1.125rem" pb="1rem">
            TAX BENEFIT
            </Heading>
            <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">People with an income bracket above 10-12 Lakhs per annum end up paying 2 lakhs in taxes every year. Instead, if they take a home loan for rent yielding properties, they are exempted from paying taxes of up to 2 lakhs per year under section 80C, 24A.</Text>
              
            </Flex>
            <Image
                mt="-10rem"
                justifySelf="flex-end"
                h="10rem"
                w="10rem"
                src={taxImg}
                objectFit="contain"
                objectPosition="50% 80%"
              />
          </Flex>
            </SimpleGrid>
      </Flex>
      </>)
}
export default Advantages;