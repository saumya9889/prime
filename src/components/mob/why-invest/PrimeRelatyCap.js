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
      <Flex w="100%" direction="column" overflow="hidden" px="1rem" pb="3.125rem">
        <Flex direction="column" w="100%" pos="relative">
            <Flex overflow="hidden" direction="column" className="fadein revealOnce" w="100%">
            <Text textTransform="uppercase" textAlign="center" fontFamily="goudy" pb="1rem" fontSize="1.5rem">
                    Factors to look at <br/> while choosing a <br/> residential property for<br/>investment
            </Text>
            </Flex>
            <SimpleGrid mt="1.875rem" gap="2.5rem" columns={1}>
                <Flex direction="column" align="center" className="fadein revealOnce">
                    <Image mb="0.625rem" src={supreturn} w="5rem" h="5rem"/>
                    <Heading textAlign="center" fontSize="1.25rem" fontFamily="avenir">PROJECT DEVELOPERS & LEGAL DOCUMENTATION</Heading>
                </Flex>
                <Flex direction="column" align="center" className="fadein revealOnce">
                    <Image mb="0.625rem" src={portfolio} w="5rem" h="5rem"/>
                    <Heading textAlign="center" fontSize="1.25rem" fontFamily="avenir">PROJECT STATUS, SIZE, QUALITY & AMENITIES</Heading>
                </Flex>
                <Flex direction="column" align="center" className="fadein revealOnce">
                    <Image mb="0.625rem" src={profitinvest} w="5rem" h="5rem"/>
                    <Heading textAlign="center" fontSize="1.25rem" fontFamily="avenir">LOCATION & MIGRATION</Heading>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
      </>)
}
export default PrimeRealtyCap;