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
      <Flex w="100%" direction="column" overflow="hidden" px="100px" mt="3.125rem">
        <Text fontSize="2.5rem" className="slidein-top revealOnce" textAlign="center" pb="1.875rem" fontFamily="goudy">PRIME REALTY CAPITAL</Text>
        <Flex w="100%" pos="relative" pb="5rem">
            <Flex overflow="hidden" direction="column" className="fadein revealOnce" w="40%" >
                    <Heading pb=".625rem" fontFamily="avenir" fontSize="1.875rem">
                    TURN YOUR MONEY INTO WEALTH
                    </Heading>
                    <Text pb=".625rem" fontFamily="varela Round" fontSize="1.25rem" >
                    If you are looking to prosper & protect your wealth, you have come to the right place.
                    </Text>
          <Flex
            w="100%"
            align="center"
            pb="0.313rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="90%"
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
            <SimpleGrid pl="5rem" gap="2.5rem" columns={2} w="75%">
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                    <Image src={supreturn} w="5rem" h="5rem"/>
                    <Heading pb=".625rem" pt="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">SUPERIOR RETURNS</Heading>
                    <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">It is our commitment to generate superior returns which is based on a balanced risk return strategy.</Text>
                </Flex>
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                    <Image src={portfolio} w="5rem" h="5rem"/>
                    <Heading pb=".625rem" pt="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">STRONG PORTFOLIO</Heading>
                    <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">We focus on building a strong portfolio by focusing on existing and new projects.</Text>
                </Flex>
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                    <Image src={profitinvest} w="5rem" h="5rem"/>
                    <Heading pb=".625rem" pt="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">PROFITABLE INVESTMENT <br/>PLANS</Heading>
                    <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">Our flexibility allows real estate developers to plan their investments and turn them into wealth.</Text>
                </Flex>
                <Flex direction="column" align="center" className="fadein-2sdelay revealOnce">
                    <Image src={strongnet} w="5rem" h="5rem"/>
                    <Heading pb=".625rem" pt="1rem" textAlign="center" fontSize="1.125rem" fontFamily="avenir">STRONG NETWORK</Heading>
                    <Text textAlign="center" fontSize="1rem" fontFamily="varela Round">We have the ability to utilize our highly skilled team and vast network to perform thorough research in a timely manner to efficiently and professionally execute profitable investment plans.</Text>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
      </>)
}
export default PrimeRealtyCap;