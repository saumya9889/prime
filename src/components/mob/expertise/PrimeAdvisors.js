import { Box, Center, Divider, Flex, GridItem, Heading, Icon, Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react"
import cons from "./CONSTRUCTION.jpg";
import market from "./MARKETING.jpg";
import manage from "./MANAGEMENT.jpg";
import merge from "./MERGERS.jpg";
import joint from "./JOINT VENTURE.jpg";
import consIcon from "../expertise/CONSTRUCTION MANAGEMENT.svg"
import organIcon from "../expertise/ORGANISATION.svg"
import jointIcon from "../expertise/JOINT VENTURE.svg"
import marketIcon from "../expertise/MARKETING.svg"
import mergeIcon from "../expertise/MERGERS ICON.svg"

const PrimeAdvisors = () => {
    return (
        <>
            <Flex direction="column" w="100%" pt="1.875rem" px="1rem" pb="3.125rem"
                bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
                bgRepeat="no-repeat"
                bgPos="center"
                bgSize="cover">
                <Text textAlign="center" pb="1.563rem" fontSize="2.125rem" fontFamily="goudy" >PRIME ADVISORS</Text>
                <Heading textAlign="center" pb="1.563rem" fontSize="1.5rem" fontFamily="avenir" >WE COMPLETE YOUR NEEDS</Heading>
                <Flex direction="column" overflow="hidden">
                    <Flex textAlign="center" justify="center" direction="column" w="100%" overflow="hidden">
                        <Text fontFamily="varela round" fontSize="1rem">Prime LifeSpace consultancy firm offers an end-to-end solution in the Real Estate Space.
                            We have an experienced and expert team to lead Prime LifeSpace and give our customers pioneering vision in the ever-dynamic real estate sphere. Our clients have varied from sectors such as Education, Solar, Real Estate, Finance etc. With a strong network across the globe, we are able to provide the best possible solution to our clients.
                            We align traditional business knowledge and modern analytics to deliver a new and intelligent approach to the real estate landscape.
                            Prime LifeSpace has struck a number of high value deals with renowned entities in the real estate business, owing to which we have been able to build substantial and wide portfolio offerings.</Text>
                    </Flex>
                    <Flex mt="1.125rem" direction="column" h="100%" w="100%" overflow="hidden" className="prime-grid-gallery">
                        <SimpleGrid
                            px="1rem"
                            columns={3}
                            w="100%"
                            overflow="hidden"
                            spacing=".312rem">
                            <GridItem pos="relative" w="100%" h="225px" rowSpan={2} className="image-slieddown reveal cmn-card">
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
                                    bgColor="rgba(0,0,0,0.6)"
                                    transition="all .3s">
                                    <Image
                                        alt="IMAGE"
                                        pos="absolute"
                                        bottom="50%"
                                        left="50%"
                                        w="1.875rem"
                                        transform="translate(-50%)"
                                        src={organIcon}
                                    />
                                    <Heading
                                        pos="absolute"
                                        fontFamily="avenir"
                                        bottom="30%"
                                        left="50%"
                                        transform="translate(-50%)"
                                        fontSize=".75rem"
                                        color="#DFBD69"
                                    >
                                        ORGANIZATION MANAGEMENT
                                    </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="226px" h="110px" colSpan={2} className="image-sliedright reveal cmn-card">
                                <Image
                                    w="100%"
                                    h="100%"
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
                                    bgColor="rgba(0,0,0,0.6)"
                                    transition="all .3s"
                                >
                                    <Image
                                        w="1.875rem"
                                        alt="IMAGE"
                                        pos="absolute"
                                        bottom="50%"
                                        left="50%"
                                        transform="translate(-50%)"
                                        src={consIcon}
                                    />
                                    <Heading

                                        pos="relative"
                                        fontFamily="avenir"
                                        left="52%"
                                        top="60%"
                                        textAlign="center"
                                        transform="translate(-50%)"
                                        fontSize=".75rem"
                                        color="#DFBD69"

                                    >
                                        SOCIALLY RESPONSIBLE <br />CONSTRUCTION MANAGEMENT
                                    </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="110px" h="110px" className="fadein reveal cmn-card">
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
                                    bgColor="rgba(0,0,0,0.6)"
                                    transition="all .3s"
                                >
                                    <Image
                                        w="1.875rem"
                                        alt="IMAGE"
                                        pos="absolute"
                                        bottom="60%"
                                        left="50%"
                                        transform="translate(-50%)"
                                        src={jointIcon}
                                    />
                                    <Heading
                                        textAlign="center"
                                        pos="absolute"
                                        fontFamily="avenir"
                                        bottom="1.562rem"
                                        left="50%"
                                        transform="translate(-50%)"
                                        fontSize=".75rem"
                                        color="#DFBD69"
                                    >
                                        JOINT VENTURES
                                    </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" right="0.2rem" w="100%" h="225px" rowSpan={2} className="image-sliedup reveal cmn-card">
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
                                    bgColor="rgba(0,0,0,0.6)"
                                    transition="all .3s"
                                >
                                    <Image
                                        w="1.857rem"
                                        alt="IMAGE"
                                        pos="absolute"
                                        bottom="57%"
                                        left="50%"
                                        transform="translate(-50%)"
                                        src={mergeIcon}
                                    />
                                    <Heading
                                        textAlign="center"
                                        pos="absolute"
                                        fontFamily="avenir"
                                        bottom="37%"
                                        left="50%"
                                        transform="translate(-50%)"
                                        fontSize=".75rem"
                                        color="#DFBD69"
                                    >
                                        MERGER & ACQUISITIONS
                                    </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="228px" h="110px" colSpan={2} className="image-sliedleft reveal cmn-card">
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
                                    bgColor="rgba(0,0,0,0.6)"
                                    transition="all .3s"
                                >
                                    <Image
                                        w="1.875rem"
                                        alt="IMAGE"
                                        pos="absolute"
                                        bottom="50%"
                                        left="50%"
                                        transform="translate(-50%)"
                                        src={marketIcon}
                                    />
                                    <Heading
                                        w="100%"
                                        pos="absolute"
                                        fontFamily="avenir"
                                        bottom="18%"
                                        left="50%"
                                        textAlign="center"
                                        transform="translate(-50%)"
                                        fontSize=".75rem"
                                        color="#DFBD69"
                                    >
                                        MARKETING & BRAND MANAGEMENT
                                    </Heading>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Flex>

        </>)
}
export default PrimeAdvisors;