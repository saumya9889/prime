import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React, { useRef } from "react"
import cons from "./CONSTRUCTION.jpg";
import market from "./MARKETING.jpg";
import manage from "./MANAGEMENT.jpg";
import merge from "./MERGERS.jpg";
import joint from "./JOINT VENTURE.jpg";
import consIcon from "./CONSTRUCTION MANAGEMENT.svg";
import organIcon from "./ORGANISATION.svg";
import jointIcon from "./JOINT VENTURE.svg";
import marketIcon from "./MARKETING.svg";
import mergeIcon from "./MERGERS ICON.svg";
import { useInView } from "framer-motion";

const PrimeAdvisors=()=>{
    const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
return (
    <><Flex overflow="hidden" ref={ref} direction="column" w="100%" px="100px" pb="5rem"  bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
    bgRepeat="no-repeat"
    bgPos="center"
    bgSize="cover">
        <Text textAlign="center" pb="1.563rem" pt="1.875rem" fontSize="2.5rem" fontFamily="goudy"className="slidein-top revealOnce">PRIME ADVISORS</Text>
        <Heading textAlign="center" pb="1.563rem" fontSize="2.125rem" fontFamily="avenir" className="fadein revealOnce">WE COMPLETE YOUR NEEDS</Heading>
        <Flex overflow="hidden">
        <Flex direction="column" h="100%" w="640px" overflow="hidden">
        <SimpleGrid

                        columns={3}
                        w="100%"
                        overflow="hidden"
                        spacing="0.625rem">
                            <GridItem opacity={isInView?1:0} transition={"all 2s 2s"} pos="relative" minW="9.375rem" h="15.625rem" rowSpan={2} >
                            <Image
                            h="100%" w="100%"
                             src={manage}
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="1"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="60%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    h="1.875rem"
                                    w="100%"
                                    src={organIcon}
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    left="50%"
                                    bottom="38%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                >
                               ORGANIZATION MANAGEMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s 4s"} pos="relative" minW="18.75rem" h="7.5rem" bgColor="red" colSpan={2}>
                            <Image h="100%" w="100%"
                             src={cons}
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                opacity="1"
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="60%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    h="1.875rem"
                                    w="100%"
                                    src={consIcon}
                                />
                                <Heading
                                    w="100%"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="15%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                    textAlign="center"
                                >
                                SOCIALLY RESPONSIBLE<br/>
                                CONSTRUCTION MANAGEMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s"} pos="relative" minW="9.375rem" h="7.5rem" bgColor="red">
                            <Image
                            h="100%" w="100%"
                             src={joint}
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                opacity="1"
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="55%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    h="1.875rem"
                                    w="100%"
                                    src={jointIcon}
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="12%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                    textAlign="center"
                                >
                                JOINT VENTURES
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s 6s"} pos="relative" minW="9.375rem" h="15.625rem" bgColor="red"  rowSpan={2}>
                            <Image
                            h="100%" w="100%"
                             src={merge}
                                />
                            <Box
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                opacity="1"
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="50%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    h="1.875rem"
                                    w="100%"
                                    src={mergeIcon}
                                />
                                <Heading
                                    textAlign="center"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                    bottom="30%"                                    
                                >
                                   MERGER & ACQUISITIONS
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem opacity={isInView?1:0} transition={"all 2s 8s"} pos="relative" minW="18.75rem" h="7.5rem" bgColor="red" colSpan={2}>
                            <Image
                            h="100%" w="100%"
                             src={market}
                                />
                            <Box
                                
                                w="100%"
                                h="100%"
                                pos="absolute"
                                top="0"
                                bottom="0"
                                left="0"
                                right="0"
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                opacity="1"
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="60%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    h="1.875rem"
                                    w="100%"
                                    src={marketIcon}
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="15%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                    textAlign="center"
                                >
                                MARKETING & BRAND MANAGEMENT
                                </Heading>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
        </Flex>
        <Flex
          w="5rem"
          h="100%"
          className="slidein-top reveal"
          direction="column"
          align="center"
          justify="flex-start"
          px="1.563rem"
        >
          <Divider
            h="3rem"
            orientation="vertical"
            border="3px solid"
            borderColor="#DFBD69"
            bgColor="#DFBD69"
          />{" "}
          <Box
            height="30px"
            width="30px"
            backgroundColor="#DFBD69"
            border="3px solid white"
            boxShadow="0px 0px 0px 3px #B88746"
            borderRadius="50%"
            my="1"
          />
        </Flex>
           <Flex opacity={isInView?1:0} transition={"all 2s"} pt="3.5rem" direction="column"  w="50%" overflow="hidden">
                <Text fontFamily="varela round" fontSize="1rem">Prime LifeSpace consultancy firm offers an end-to-end solution in the Real Estate Space.
                We have an experienced and expert team to lead Prime LifeSpace and give our customers pioneering vision in the ever-dynamic real estate sphere. Our clients have varied from sectors such as Education, Solar, Real Estate, Finance etc. With a strong network across the globe, we are able to provide the best possible solution to our clients.
                We align traditional business knowledge and modern analytics to deliver a new and intelligent approach to the real estate landscape.
                Prime LifeSpace has struck a number of high value deals with renowned entities in the real estate business, owing to which we have been able to build substantial and wide portfolio offerings.</Text>
            </Flex>
        </Flex>
    </Flex>
    </>)
    }
export default PrimeAdvisors;    