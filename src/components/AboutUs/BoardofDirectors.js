import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";

import rajeev from "./rajeev2.jpeg"
import punit from "./punit-chopraa.jpg"
import arvinnd from "./arvinnd-agarwal.jpg"
import rajesh from "./rajesh-manghnani.jpg"

const BoardofDirectors =()=>{

    return (<>
        <Flex direction="column" h="100%"overflow="hidden"  px="100px" mb="5rem">
        <Center pb="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem">BOARD OF DIRECTORS</Center>
        <Flex >
            <Flex direction="column" w="50%" overflow="hidden">
            <Text fontFamily="goudy" pb=".625rem" fontSize="2.125rem" className="fadein-2sdelay revealOnce">MR. RAJEEV AJMERA</Text>
            <Heading fontFamily="avenir" pb="1rem" fontSize="1.125rem" className="fadein-2sdelay revealOnce">CHAIRMAN & MANAGING DIRECTOR</Heading>
            <Flex
            w="100%"
            align="center"
            pb="1rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="97%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              mr="1rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
              
              
            />
          </Flex>
            <Text fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce" paddingRight="2rem">A Civil Engineer and MBA with over 30 Years of 
                Experience in real estate marketing, strategic alliances, 
                construction, development and advisory Services. He has 
                been instrumental in procuring over 400 apartments for the 
                L&T employees. His leadership ensures maintenance of the 
                highest level of management and financial integrity, keeping 
                with international best practices in the property services 
                business.</Text>
            </Flex>
            <Image opacity={0} src={rajeev} w="37.5rem" h="25rem" alt="IMAGE"/>
            <Image pos="absolute" right="100px" className="fadein revealOnce" src={rajeev} w="600px" h="400px" alt="IMAGE"/>
        </Flex>
        <Flex gap="1.25rem" overflow="hidden" pt="2.125rem">
            <Flex direction="column" w="33%"  overflow="hidden">
                <Image src={punit} w="100%" h="350px" objectFit="cover" className="image-slieddown revealOnce"/>
                <Heading fontFamily="avenir" pb=".625rem" fontSize="1.5rem" pt="1.563rem">MR. PUNIT CHOPRA</Heading>
                <Heading fontFamily="varela round" pb="1rem" fontSize="1.5rem">Director</Heading>
                <Flex
            w="100%"
            align="center"
            pb="1rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="97%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              mr="1rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
                <Text fontFamily="varela round" fontSize="1rem" pr=".625rem">
                BE, MBA (USA) has worked in India & USA in a responsible position for Software & technological development. He was regional head at multinational I.T company. Possesses excellent networking skills & presently engaged in business development for large corporates & State / Central Governments.
                </Text>
            </Flex>
            <Flex direction="column" w="33%"  overflow="hidden">
                <Image src={arvinnd} w="100%" h="350px" objectFit="cover" className="image-slieddown revealOnce"/>
                <Heading fontFamily="avenir" pb=".625rem" fontSize="1.5rem" pt="1.563rem">MR. ARVINND AGARWAL</Heading>
                <Heading fontFamily="varela round" pb="1rem" fontSize="1.5rem">Director</Heading>
                <Flex
            w="100%"
            align="center"
            pb="1rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="99%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              mr="1rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
                <Text fontFamily="varela round" fontSize="1rem" pr=".625rem">
                Chartered accountant with expertise in commercial & 
                Financial practices. He has been associated with 
                leading corporate brands such as Welspun, Birla 
                Group of companies etc at the top management level.
                </Text>
            </Flex>
            <Flex direction="column" w="33%" overflow="hidden">
                <Image src={rajesh} w="100%" h="350px" objectFit="cover" className="image-slieddown revealOnce"/>
                <Heading className="fadein revealOnce" pb=".625rem" fontFamily="avenir" fontSize="1.5rem" pt="1.563rem">MR. RAJESH MANGHNANI</Heading>
                <Heading className="fadein revealOnce" pb="1rem" fontFamily="varela round" fontSize="1.5rem">Director</Heading>
                <Flex
            w="100%"
            align="center"
            pb="1rem"
            className="sliderightdisco reveal"
          >
            <Divider
              w="97%"
              orientation="horizontal"
              border="3px solid"
              borderColor="#DFBD69"
              bgColor="#DFBD69"
            />{" "}
            <Box
              height="1.875rem"
              width="1.875rem"
              mr="1rem"
              backgroundColor="#DFBD69"
              border="3px solid white"
              boxShadow="0px 0px 0px 3px #B88746"
              borderRadius="50%"
              my="1"
            />
          </Flex>
                <Text className="fadein revealOnce" fontFamily="varela round" fontSize="1rem" pr=".625rem">
                Commerce Graduate with years of experience in real 
                estate transaction in domestic market and middle 
                east. Since 2005 actively associated with Dubai real 
                estate.
                </Text>
            </Flex>
        </Flex>
        </Flex>
    </>); 
}
export default BoardofDirectors;