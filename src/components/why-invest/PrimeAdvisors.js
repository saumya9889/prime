import { Box, Center, Divider, Flex, GridItem, Heading, Icon,Image, SimpleGrid, Spacer, Text } from "@chakra-ui/react";
import React from "react"
import cons from "./CONSTRUCTION.jpg";
import market from "./MARKETING.jpg";
import manage from "./MANAGEMENT.jpg";
import merge from "./MERGERS.jpg";
import joint from "./JOINT VENTURE.jpg";

const PrimeAdvisors=()=>{
return (
    <><Flex direction="column" w="100%" mt="3.125rem" px="100px" pb="3.125rem" >
        <Text textAlign="center" pb="3.125rem" fontSize="2.5rem" fontFamily="goudy" >PRIME ADVISORS</Text>
        <Heading textAlign="center" pb="3.125rem" fontSize="2.125rem" fontFamily="avenir" >WE COMPLETE YOUR NEEDS</Heading>
        <Flex overflow="hidden">
        <Flex direction="column" h="100%" w="640px" overflow="hidden">
                <SimpleGrid
                        columns={3}
                        w="640px"
                        overflow="hidden"
                        spacing="0.938rem">
                            <GridItem pos="relative" w="200px" h="248px" bgColor="red" rowSpan={2} className="image-slieddown reveal">
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
                                opacity="0"
                                bgColor="rgba(0,0,0,0.6)"
                                transition="all .3s"
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    textAlign="center"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    ORGANIZATION MANAGEMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="426px" h="119px" bgColor="red" colSpan={2} className="image-sliedright reveal">
                            <Image
                            h="100%" w="100%"
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
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pl="4rem"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    textAlign="center"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    SOCIALLY RESPONSIBLE<br/>
                                    CONSTRUCTION MANAGEMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="200px" h="119px" bgColor="red" className="fadein reveal">
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
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    pl="1rem"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    textAlign="center"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    JOINT VENTURES
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="200px" h="248px" bgColor="red"  rowSpan={2} className="image-sliedup reveal">
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
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    textAlign="center"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
                                >
                                    MERGER & ACQUISITIONS
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="426px" h="119px" bgColor="red" colSpan={2} className="image-sliedleft reveal">
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
                                _hover={{ opacity: "1" }}
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="40%"
                                    left="50%"
                                    transform="translate(-50%)"
                                />
                                <Heading
                                    pl="2rem"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    textAlign="center"
                                    fontSize="1.25rem"
                                    color="#DFBD69"
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
            h="6.5rem"
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
           <Flex justify="center" direction="column"  w="50%" overflow="hidden">
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