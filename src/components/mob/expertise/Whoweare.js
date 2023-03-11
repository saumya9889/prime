import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import rajeev from "./rajeev1.jpeg"
import real from "./REAL ESTATE CONSULTATION.svg";
import proj from "./PROJECT DEVELOPEMNT.svg";
import primereal from "./PRIME CAPITAL.svg";
import advi from "./PRIME ADVISORS.svg";

const Whoweare =()=>{
      return (
      <>
      <Flex mt="1rem" px="1rem" w="100%" direction="column" className="ourexpetise-wrapper">
      <Flex w="100%" direction="column" pt="2.5rem">
        <Flex w="100%" direction="column" pos="relative" pb="3.125rem">
            <Flex mt="-6rem" pt="1rem" direction="column" className="fadein-2sdelay revealOnce" w="100%" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"
            >
                    <Text pos="relative" fontSize="1rem" textAlign="center" >
                    <Icon
                        pos="absolute"
                        left="0"
                        top="0"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                    <Icon
                        opacity={0}
                        left="0"
                        top="-27%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                    <Flex h="0.625rem"/>
                    We are deal experts who understand how to mitigate risks, maximize value and moderate human capital costs to achieve sustainable value. Hundreds of clients have benefited from our holistic and practical approach to translating people risks into measurable outcomes.
                    <Flex h="0.625rem"/>
                    <Icon
                        pos="absolute"
                        right="0"
                        bottom="-27%"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        as={ImQuotesRight} />
                    </Text>
                    <Icon
                        opacity="0"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        as={ImQuotesRight} />
            </Flex>
            <SimpleGrid className="fadein revealOnce" mt="3rem" gap="2.5rem" columns={2}>
                <Flex direction="column" align="center">
                <Image pb="0.625rem" h="5rem" w="5rem" src={real} />
                    <Text textAlign="center"  fontSize="1.125rem" fontFamily="avenir">REAL ESTATE CONSULTATION</Text>
                </Flex>
                <Flex direction="column" align="center">
                <Image pb="0.625rem" h="5rem" w="5rem" src={proj} />
                    <Text textAlign="center"  fontSize="1.125rem" fontFamily="avenir">PROJECT DEVELOPMENT</Text>
                </Flex>
                <Flex direction="column" align="center">
                <Image pb="0.625rem" h="5rem" w="5rem" src={primereal} />
                    <Text textAlign="center"  fontSize="1.125rem" fontFamily="avenir">PRIME REALTY CAPITAL</Text>
                </Flex>
                <Flex direction="column" align="center">
                <Image pb="0.625rem" h="5rem" w="5rem" src={advi} />
                    <Text textAlign="center"  fontSize="1.125rem" fontFamily="avenir">PRIME ADVISORS</Text>
                </Flex>
            </SimpleGrid>
        </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;