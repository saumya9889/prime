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
        <Flex direction="column" h="100%" w="100%" overflow="hidden" mt="2.125rem">
        <Center  className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.125rem" textAlign="center">PASSION AT WORK</Center>
        <Flex wrap="wrap" direction="column" pt="1.563rem" px="1rem" >
            <Text className="fadein-2sdelay revealOnce" fontSize="1rem" textAlign="center">
                Prime LifeSpace group luxuriates the highest brand esteem 
                in Mumbai & chennai for its fusion of luxuries & affordability 
                in the projects of exceptional quality with a passion for 
                delivering finest homes.
            </Text><br/>
            <Text className="fadein-2sdelay revealOnce" fontSize="1rem" textAlign="center">
                Our projects are stategized acccording to the market demand &
                executed with the new requirements of the home buyers providing
                them with beautiful holistic living.
            </Text><br/>
            <Text className="fadein-2sdelay revealOnce" fontSize="1rem" textAlign="center">
                Our team stands by the motto to deliver timely, as promised &
                will continue doing so. Being technically capable & equipped with
                right resources we set gold standards for customer centric design,
                quality and safety.
            </Text>
            <Image mt="2rem" src={con} className="expandcar reveal" h="18.75rem" objectFit="cover" alt="IMAGE"/>
        </Flex>
        <Flex direction="column" pb="1.875rem" mt="3.125rem" bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover" className="consulting-wrap">
           <Flex direction="column"  w="100%" overflow="hidden">
                <Center><Text mb="1.563rem" pt="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="1.125rem">KEY SERVICES</Text></Center>
                <Flex direction="column" gap="2%">
                    <Flex mb="1.875rem" align="center" direction="column" w="100%" className="fadein revealOnce">
                        <Heading fontFamily="varela round" fontSize="1rem">CONSULTING</Heading>
                        <Image my=".625rem" h="3.125rem" w="3.125rem" src={consultingSVG}/>
                        <Flex w="100%" ml="8rem" fontFamily="varela round" className="unorder-wrapper">
                                <ul style={{listStylePosition:"inside",width:"20rem",textAlign:"center"}}>
                                <li style={{float:"left"}}>Merger & Acquisition</li>
                                <li style={{float:"right", marginRight:"2rem"}}>Contracts</li>
                                <li style={{float:"left", marginLeft:"-0.3"}}>Art & Architecture</li>
                                <li style={{float:"right", marginRight:"1.5rem" }}>Joint Ventures</li>
                                <li style={{float:"left"}}>Broking</li>
                                <li style={{float:"right",marginRight:"2rem" }}>Structured Transaction</li>
                                </ul>                        
                        </Flex>
                    </Flex>
                    <Flex  mb="1.875rem" direction="column" align="center" w="100%" className="fadein revealOnce">
                        <Heading textAlign="center" fontFamily="avenir" fontSize="1.125rem">REAL ESTATE<br/> DEVELOPMENTS</Heading>
                        <Image my=".625rem" h="3.125rem" w="3.125rem" src={realEstateSVG}/>
                        <Flex >
                            <Flex direction="column" >
                                <Text fontFamily="varela round"><li>Mumbai</li></Text>
                                                                
                            </Flex>
                            <Flex direction="column" pl="1rem">
                                <Text fontFamily="varela round"><li>Pune</li></Text>
                                <Text fontFamily="varela round" ml="-1rem"><li>Chennai</li></Text>
                            </Flex>  
                            <Flex direction="column" pl="1rem">
                                <Text fontFamily="varela round"><li>Indore</li></Text>
                              
                            </Flex>                          
                        </Flex>                        
                    </Flex>
                </Flex>
                <Flex direction="column" gap="2%">
                    <Flex  mb="1.875rem" align="center" direction="column" w="100%" className="fadein revealOnce">
                        <Heading fontFamily="avenir" fontSize="1.125rem">FINANCE</Heading>
                        <Image my=".625rem" h="3.125rem" w="3.125rem" src={financeSVG}/>
                        <Text fontFamily="varela round"><li>AIF II Fund</li></Text>
                    </Flex>
                    <Flex direction="column" align="center" w="100%" className="fadein revealOnce">
                        <Heading w="100%" textAlign="center" fontFamily="avenir" fontSize="1.125rem">RENEWABLE ENERGY<br/>DEVELOPMENTS</Heading>
                        <Image my=".625rem" h="3.125rem" w="3.125rem" src={renewableSVG}/>
                        <Text fontFamily="varela round"><li>Solar Power</li></Text>
                    </Flex>
                </Flex>
           </Flex>
           <Flex ref={ref} mt="3.125rem" direction="column" h="100%" w="100%" overflow="hidden">
                <Center><Text textAlign="center" mb="1.563rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="1.5rem" px="1rem">OUR CORE STRENGTHS</Text></Center>
                <SimpleGrid
                        px="1rem"
                        columns={3}
                        w="100%"
                        overflow="hidden"
                        spacing=".312rem">
                            <GridItem pos="relative" w="100%" h="225px" bgColor="red" rowSpan={2} opacity={isInView?1:0} transition={"all 2s 2s"}>
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
                                >
                                <Image
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="50%"
                                    left="50%"
                                    w="1.875rem"
                                    transform="translate(-50%)"
                                    src={icLegacy}
                                    
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="37%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize=".75rem"
                                    color="#DFBD69"
                                >
                                    LEGACY
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="226px" h="110px" bgColor="red" colSpan={2} opacity={isInView?1:0} transition={"all 2s 4s"}>
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
                                >
                                <Image
                                    w="1.875rem"
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="50%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    src={icMarket}
                                />
                                <Heading
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="28%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    fontSize=".75rem"
                                    color="#DFBD69"
                                >
                                    MARKETING TEAM
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="110px" h="110px" bgColor="red" opacity={isInView?1:0} transition={"all 2s"}>
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
                                >
                                <Image
                                    w="1.875rem"
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="60%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    src={icSales}
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
                                    SALES SERVICE
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" w="100%" h="225px" bgColor="red"  rowSpan={2} opacity={isInView?1:0} transition={"all 2s 6s"}>
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
                                >
                                <Image
                                    w="1.857rem"
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="57%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    src={icBusiness}
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
                                    BUSINESS DEVELOPMENT
                                </Heading>
                                </Box>
                            </GridItem>
                            <GridItem pos="relative" minW="226px" h="110px" bgColor="red" colSpan={2} opacity={isInView?1:0} transition={"all 2s 8s"}>
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
                                >
                                <Image
                                    w="1.875rem"
                                    alt="IMAGE"
                                    pos="absolute"
                                    bottom="50%"
                                    left="50%"
                                    transform="translate(-50%)"
                                    src={icStrong}
                                />
                                <Heading
                                    w="100%"
                                    pos="absolute"
                                    fontFamily="avenir"
                                    bottom="28%"
                                    left="50%"
                                    textAlign="center"
                                    transform="translate(-50%)"
                                    fontSize=".75rem"
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