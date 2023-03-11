import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import portfolio from "./factors affecting2.svg";
import supreturn from "./factors affecting1.svg";
import profitinvest from "./factors affecting3.svg";
import strongnet from "./STRONG NETWORK.svg";

const PrimeRealtyCap =()=>{
      return (
      <>
      <Flex w="100%" direction="column" overflow="hidden" px="100px" mt="5rem">
        <Flex w="100%" pos="relative" pb="3.125rem">
            <Flex overflow="hidden" direction="column" className="fadein revealOnce" w="45%">
                    <Text textTransform="capitalize" fontFamily="goudy" pb="1rem" fontSize="2rem">
                    Factors to look at while choosing a residential property for investment
                    </Text>
                    <Flex
            w="100%"
            align="center"
            pb="0.313rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="78%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              mr="0.15rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
            </Flex>
            <SimpleGrid pl="5rem" gap="2.5rem" columns={3}>
                <Flex direction="column" align="center" className="fadein revealOnce">
                    <Image mt="1.875rem" src={supreturn} w="5rem" h="5rem"/>
                    <Heading lineHeight="1.5rem" pt="0.625rem" pb="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">PROJECT DEVELOPERS & LEGAL DOCUMENTATION</Heading>
                </Flex>
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                    <Image mt="1.875rem" src={portfolio} w="5rem" h="5rem"/>
                    <Heading lineHeight="1.5rem" pt="0.625rem" pb="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">PROJECT STATUS, SIZE, QUALITY & AMENITIES</Heading>
                </Flex>
                <Flex direction="column" align="center" className="fadein-4sdelay revealOnce">
                    <Image mt="1.875rem" src={profitinvest} w="5rem" h="5rem"/>
                    <Heading lineHeight="1.5rem" pt="0.625rem" pb="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">LOCATION & MIGRATION</Heading>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
      </>)
}
export default PrimeRealtyCap;