import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import real from "./REAL ESTATE CONSULTATION.svg";
import proj from "./PROJECT DEVELOPEMNT.svg";
import primereal from "./PRIME CAPITAL.svg";
import advi from "./PRIME ADVISORS.svg";


const Whoweare =()=>{
      return (
      <>
      <Flex direction="column">
      <Flex><Image opacity="0" h="2.5rem" w="100%" /></Flex>
      <Flex direction="column" px="100px" pt="0.625rem">
        <Flex pos="relative">
            <Flex direction="column" className="fadein revealOnce" w="50%"  bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover" 
            filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))">
                    <Text pos="relative" fontSize="1.25rem" textAlign="center" >
                    <Icon
                        pos="absolute"
                        left="1.563rem"
                        top="5%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                        <Icon
                        opacity={0}
                        left="-3rem"
                        top="-50%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                    <Heading fontSize="1.25rem" px="5rem">We are deal experts who understand how to mitigate risks, maximize value and moderate human capital costs to achieve sustainable value. Hundreds of clients have benefited from our holistic and practical approach to translating people risks into measurable outcomes.
                    </Heading>
                    <Icon
                        pos="absolute"
                        right="1.563rem"
                        bottom="5%"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        as={ImQuotesRight} />
                        <Icon
                        opacity={0}
                        color="#DFBD69"
                        w="4.375rem"
                        h="1.875rem"
                        as={ImQuotesRight} />
                    </Text>
            </Flex>
            <SimpleGrid className="fadein revealOnce" pl="5rem" gap="3.125rem" columns={2}>
                <Flex direction="column" align="center">
                    <Image h="3.75rem" w="3.75rem" mb="1rem" src={real} />
                    <Heading fontSize="1.125rem" textAlign="center" fontFamily="avenir">REAL ESTATE CONSULTATION</Heading>
                </Flex>
                <Flex direction="column" align="center">
                    <Image h="3.75rem" w="3.75rem" mb="1rem" src={proj} />
                    <Heading fontSize="1.125rem" textAlign="center" fontFamily="avenir">PROJECT DEVELOPMENT</Heading>
                </Flex>
                <Flex direction="column" align="center">
                    <Image h="3.75rem" w="3.75rem" mb="1rem" src={primereal} />
                    <Heading fontSize="1.125rem" textAlign="center" fontFamily="avenir">PRIME REALTY CAPITAL</Heading>
                </Flex>
                <Flex direction="column" align="center">
                    <Image h="3.75rem" w="3.75rem" mb="1rem" src={advi} />
                    <Heading fontSize="1.125rem" textAlign="center" fontFamily="avenir">PRIME ADVISORS</Heading>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;