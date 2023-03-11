import { Center, Flex, Text, Icon, Image, SimpleGrid, HStack, Heading, GridItem, Box, Divider } from "@chakra-ui/react";
import React, { useRef } from "react";
import consultingSVG from "./CONSULTING.svg";
import realEstateSVG from "./REAL ESTATE DEVELOPMENT.svg";
import financeSVG from "./FINANCE.svg";
import renewableSVG from "./RENEWABLE ENERGY.svg";
import con from "./const.jpg";
import icLegacy from "./LEGACY.svg";
import icMarket from "./MARKETING TEAM.svg";
import icSales from "./SALES.svg";
import icBusiness from "./BUSINESS DEV.svg";
import icStrong from "./STRONG NETWORK.svg";
import legacyImg from "./LEGACY.jpg";
import marketImg from "./MARKETING.jpg";
import salesImg from "./SALES.jpg";
import networkImg from "./NETWORK.jpg";
import businessImg from "./BUSINESS.jpg"
import { useInView } from "framer-motion";

const Passionatwork =()=>{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
      return (<>
        <Flex direction="column" h="100%" overflow="hidden"  px="100px" mt="1.825rem" mb="5rem">
        <Center  className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem" textAlign="center">PASSION AT WORK</Center>
        <Flex pt="1.875rem">
            <Image className="expandcar reveal" src={con} w="50%" h="468px" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))" objectFit="cover" alt="IMAGE"/>
            <Flex
            className="slidein-top reveal"
            transition="all 2s 2s"
            direction="column"
            align="center"
            px="1.562rem"
          >
            <Divider
              orientation="vertical"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
              h="4rem"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
            />
          </Flex>
            <Text className="fadein-2sdelay revealOnce" pt="4.50rem" fontFamily="varela Round" fontSize="1rem" textAlign="left">
                Prime LifeSpace group luxuriates the highest brand esteem 
                in Mumbai & chennai for its fusion of luxuries & affordability 
                in the projects of exceptional quality with a passion for 
                delivering finest homes.<br/>
                <br/>
                Our projects are stategized acccording to the market demand &
                executed with the new requirements of the home buyers providing
                them with beautiful holistic living.<br/>
                <br/>
                Our team stands by the motto to deliver timely, as promised &
                will continue doing so. Being technically capable & equipped with
                right resources we set gold standards for customer centric design,
                quality and safety"
            </Text>
        </Flex>
        <Flex mt="3.125rem">
           <Flex direction="column"  w="50%" overflow="hidden">
                <Center><Heading  mb="1.875rem" className="slidein-top revealOnce" fontFamily="avenir" fontSize="2.125rem">KEY SERVICES</Heading></Center>
                <Flex gap="2%">
                    <Flex direction="column" w="49%" className="fadein-2sdelay revealOnce">
                        <Flex gap="0.938rem"><Image h="3.125rem" w="3.125rem" src={consultingSVG}/><Heading fontFamily="avenir" fontSize="1.125rem" pt="0.625rem">CONSULTING</Heading></Flex>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem" pt="1rem"><li>Merger & Aqusition</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"><li>Art & Architecture</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"><li>Structured Transaction</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"><li>Joint Ventures</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"><li>Contracts</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem"><li>Broking</li></Text>
                    </Flex>
                    <Flex direction="column" w="49%" className="fadein-2sdelay revealOnce">
                        <Flex gap="0.938rem"><Image h="3.125rem" w="3.125rem" src={realEstateSVG}/><Heading fontFamily="avenir" fontSize="1.125rem">REAL ESTATE<br/>DEVELOPMENTS</Heading></Flex>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"  pt="1rem"><li>Mumbai</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"><li>Chennai</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem" pb="0.625rem"><li>Pune</li></Text>
                        <Text fontFamily="varela round" fontSize="1rem"><li>Indore</li></Text>
                    </Flex>
                </Flex>
                <Flex  gap="2%" pt="2rem">
                    <Flex direction="column" w="49%" className="fadein-2sdelay revealOnce">
                        <Flex gap="0.938rem"><Image h="3.125rem" w="3.125rem" src={financeSVG}/><Heading fontFamily="avenir" fontSize="1.125rem"  pt="0.625rem">FINANCE</Heading></Flex>
                        <Text fontFamily="varela round" fontSize="1rem"  pt="1rem"><li>AIF II Fund</li></Text>
                    </Flex>
                    <Flex direction="column" w="49%" className="fadein-2sdelay revealOnce">
                        <Flex gap="0.938rem"><Image h="3.125rem" w="3.125rem" src={renewableSVG}/><Heading fontFamily="avenir" fontSize="1.125rem">RENEWABLE <br/>ENERGY</Heading></Flex>
                        <Text fontFamily="varela round" fontSize="1rem"  pt="1rem"><li>Solar Power</li></Text>
                    </Flex>
                </Flex>
           </Flex>
           <Flex ref={ref} direction="column" h="100%" w="50%" overflow="hidden">
                <Center><Heading mb="1.875rem" className="slidein-top revealOnce" fontFamily="avenir" fontSize="2.125rem">OUR CORE STRENGTHS</Heading></Center>
                <SimpleGrid
                        columns={3}
                        w="100%"
                        overflow="hidden"
                        spacing="0.625rem">
                            <GridItem pos="relative" minW="9.375rem" h="15.625rem" bgColor="red" rowSpan={2} opacity={isInView?1:0} transition={"all 2s 2s"}>
                            <Image h="100%" w="100%" src={legacyImg} />
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
                                    src={icLegacy}
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
                                    LEGACY
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="18.75rem" h="7.5rem" bgColor="red" colSpan={2} opacity={isInView?1:0} transition={"all 2s 4s"}>
                            <Image h="100%" w="100%" src={marketImg} />
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
                                    src={icMarket}
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                >
                                MARKETING TEAM
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="9.375rem" h="7.5rem" bgColor="red" opacity={isInView?1:0} transition={"all 2s"}>
                            <Image h="100%" w="100%" src={salesImg} />
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
                                    src={icSales}
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
                                    SALES SERVICE
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="9.375rem" h="15.625rem" bgColor="red"  rowSpan={2} opacity={isInView?1:0} transition={"all 2s 6s"}>
                            <Image h="100%" w="100%" src={businessImg} />
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
                                    src={icBusiness}
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
                                    BUSINESS DEVELOPMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="18.75rem" h="7.5rem" bgColor="red" colSpan={2} opacity={isInView?1:0} transition={"all 2s 8s"}>
                            <Image h="100%" w="100%" src={networkImg} />
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
                                    src={icStrong}
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="1.562rem"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize="1rem"
                                    color="#DFBD69"
                                >
                                    STRONG NETWORK
                                </Heading>
                                </Box>
                            </GridItem>
                        </SimpleGrid>
           </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Passionatwork;