import { Box, Center, Divider, Flex, Heading, Icon,Image, Spacer, Text } from "@chakra-ui/react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import React from "react";
import rajeev from "./rajeev1.jpeg"
import missionSvg from "./MISSION.svg";
import visionSvg from "./VISION.svg"

const Whoweare =()=>{
      return (<>
 <Flex mt="1rem" px="1rem" w="100%" direction="column" className="about-whowe-wrapper">
      <Flex w="100%" direction="column" pt="2.5rem">
        <Flex w="100%" direction="column" pos="relative" pb="3.125rem">
            <Flex mt="-7rem" pt="1rem" direction="column" className="fadein-2sdelay revealOnce" w="100%" bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")' boxShadow="2xl"
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">        
            <Center pb="1.563rem"
           pt="1.875rem" bgImage="inherit" zIndex="5"
          className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.125rem" px="1rem">WHO WE ARE</Center>
        <Center px="1rem" textAlign="center" className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1rem">Prime LifeSpace, as the name suggests, is a pre-eminent real estate consultancy & development firm, with 30+ years of experience in the industry.<br/>
            <br/>Our brand is built on trust, transparency & quality in the real estate industry. We have established credentials in development of residential integrated townships & consulting services. Both these segments are equally important to us.<br/>
            <br/>Our consultancy firm offers an end to end solution in real estate space and development firm is renowned creators of smart integrated townships that provide more than just spaces to live in.</Center>
       </Flex>
       <Flex direction="column" overflow="hidden" pt="1.875rem">
            <Flex direction="column" mt="1rem" w="100%" className="fadein-2sdelay revealOnce" 
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Center><Text pt="1.875rem" pb="1rem" fontFamily="goudy" fontSize="2.125rem" px="1rem">MISSION</Text></Center>
                <Center><Image h="5rem" w="5rem" src={missionSvg} pb="1.125rem" /></Center>
                <Flex direction="column">
                    <Heading px="1rem" pb="0.625rem" fontFamily="avenir" fontSize="1.125rem" textAlign="center">
                    BRIGHT IDEAS,<br/> SMART SOLUTIONS</Heading>
                    <Text pb="1.875rem" px="1rem" fontFamily="varela round" fontSize="1rem" textAlign="center">
                    Our motto to fulfill your needs through modern and
                    innovative ideas. Further, transform potential opportunities
                    into high yielding investments
                    </Text>
                </Flex>
            </Flex>
            <Flex className="fadein-2sdelay revealOnce" direction="column" w="100%" pt="1.875rem" bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Center><Text t="1.875rem" pb="1rem" fontFamily="goudy" fontSize="2.125rem" px="1rem">VISION</Text></Center>
                <Center><Image h="5rem" w="5rem" src={visionSvg} pb="1.125rem" /></Center>
                <Flex direction="column">
                    <Heading pb="0.625rem" fontFamily="avenir" fontSize="1.125rem" textAlign="center" px="1rem">INDIA'S MOST ADMIRED &<br/> IMPACTFUL
                    REAL ESTATE<br/> COMPANY.</Heading>
                    <Text pb="1.875rem" px="1.5rem" fontFamily="varela round" fontSize="1rem" textAlign="center">
                    We aim to make a positive difference through our work,
                    with a vision of creating self-reliant townships where
                    people experience excellence, happiness and prosperity.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        <Flex mt="9.375rem" direction="column" pos="relative" pb="3.125rem" bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
        <Image boxShadow="2xl" mt="-6.25rem" alignSelf="center" className="expandcar reveal" src={rajeev} w="15rem" h="14rem" alt="IMAGE" objectFit="cover" filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
            <Flex direction="column" className="fadein-2sdelay revealOnce" w="100%">
            <Text  pt="1.563rem" pb=".625rem" fontFamily="goudy" fontSize="1.5rem" textAlign="center">MR. RAJEEV AJMERA</Text>
            <Heading pb="1rem" fontFamily="avenir" fontSize="1.125rem" textAlign="center" px="1rem">CHAIRMAN & MANAGING DIRECTOR</Heading>    
                    <Text mt="2rem" pos="relative" fontSize="1rem" textAlign="center" mb="1.875rem">
                    <Icon
                        pos="absolute"
                        left="0"
                        top="-50%"
                        as={ImQuotesLeft}
                        w="4.375rem"
                        h="3.125rem"
                        color="#DFBD69" />
                    <Flex h=".625rem" ></Flex>
                    We EXCEL in boosting livability quotient,<br/>
                    attract global fund & investors & create<br/>
                    positive impact on society that endeavors
                    <Flex h=".625rem" ></Flex>
                    <Icon
                        pos="absolute"
                        right="0"
                        bottom="-50%"
                        color="#DFBD69"
                        w="4.375rem"
                        h="3.125rem"
                        as={ImQuotesRight} />
                    </Text>
            </Flex>
            </Flex>
        </Flex>
        </Flex>
        </Flex>
      </>)
}
export default Whoweare;