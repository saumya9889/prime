import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import portfolio from "./STRONG PORTFOLIO.svg";
import supreturn from "./SUPERIOR RETURNS.svg";
import profitinvest from "./PROFITABLE INVESTMENT.svg";
import strongnet from "./STRONG NETWORK.svg";

const PrimeRealtyCap =()=>{
      return (
      <>
      <Flex w="100%" direction="column" overflow="hidden" px="1rem" mt="3.125rem">
        <Text fontSize="2.125rem" className="slidein-top revealOnce" textAlign="center" pb="1.125rem" fontFamily="goudy">PRIME REALTY CAPITAL</Text>
        <Flex direction="column" w="100%" pos="relative" pb="3.125rem">
            <Flex overflow="hidden" direction="column" className="fadein revealOnce" w="100%">
                    <Text textAlign="center" pb="1rem" fontSize="1.5rem" fontFamily="avenir">
                    TURN YOUR MONEY INTO WEALTH
                    </Text>
                    <Text textAlign="center" pb="3.125rem" fontSize="1rem" >
                    If you are looking to prosper & protect your wealth, you have come to the right place.
                    </Text>
            </Flex>
            <SimpleGrid gap="3.125rem" columns={1}>
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                <Image mb="1rem" src={supreturn} w="3.125rem" h="3.125rem"/>
                    <Text pb=".625rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">SUPERIOR RETURNS</Text>
                    <Text textAlign="center" fontSize="1rem" fontFamily="avenir">It is our commitment to generate superior returns which is based on a balanced risk return strategy.</Text>
                </Flex>
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                <Image mb="1rem" src={portfolio} w="3.125rem" h="3.125rem"/>
                    <Text pb=".625rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">STRONG PORTFOLIO</Text>
                    <Text textAlign="center" fontSize="1rem" fontFamily="avenir">We focus on building a strong portfolio by focusing on existing and new projects.</Text>
                </Flex>
                <Flex direction="column" align="center" className="fadein-4sdelay revealOnce">
                <Image mb="1rem" src={profitinvest} w="3.125rem" h="3.125rem"/>
                    <Text pb=".625rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">PROFITABLE INVESTMENT PLANS</Text>
                    <Text textAlign="center" fontSize="1rem" fontFamily="avenir">Our flexibility allows real estate developers to plan their investments and turn them into wealth.</Text>
                </Flex>
                <Flex direction="column" align="center" className="fadein-4sdelay revealOnce">
                <Image mb="1rem" src={strongnet} w="3.125rem" h="3.125rem"/>
                    <Text pb=".625rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">STRONG NETWORK</Text>
                    <Text textAlign="center" fontSize="1rem" fontFamily="avenir">We have the ability to utilize our highly skilled team and vast network to perform thorough research in a timely manner to efficiently and professionally execute profitable investment plans.</Text>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
      </>)
}
export default PrimeRealtyCap;