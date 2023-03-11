import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";

import rajeev from "./rajeev2.jpeg"
import punit from "./punit-chopraa.jpg"
import arvinnd from "./arvinnd-agarwal.jpg"
import rajesh from "./rajesh-manghnani.jpg"

const BoardofDirectors =()=>{

    return (<>
        <Flex direction="column" h="100%" w="100%" overflow="hidden" pt="3.125rem" px="1rem">
        <Center textAlign="center" pb="1.875rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="1.5rem">BOARD OF DIRECTORS</Center>
        <Flex direction="column" w="100%">
            <Flex direction="column" w="100%">
            <Text textAlign="center" fontFamily="goudy" pb=".625rem" fontSize="1.25rem" className="fadein-2sdelay revealOnce">MR. RAJEEV AJMERA</Text>
            <Heading textAlign="center" fontFamily="avenir" pb="1rem" fontSize="1.125rem" className="fadein-2sdelay revealOnce">CHAIRMAN & MANAGING DIRECTOR</Heading>
            <Image boxShadow="2xl" mb="1.563rem" className="fadein reveal" src={rajeev} w="100%" h="18.75rem" alt="IMAGE" objectFit="cover"/>
            <Text textAlign="left" fontFamily="varela round" fontSize="1rem" className="fadein-2sdelay revealOnce">A Civil Engineer and MBA with over 30 Years of 
                Experience in real estate marketing, strategic alliances, 
                construction, development and advisory Services. He has 
                been instrumental in procuring over 400 apartments for the 
                L&T employees. His leadership ensures maintenance of the 
                highest level of management and financial integrity, keeping 
                with international best practices in the property services 
                business.</Text>
            </Flex>
        </Flex>
        <Flex direction="column" gap="3.125rem" overflow="hidden" pt="3.125rem" pb="3.125rem">
            <Flex direction="column" w="100%">
                <Heading textAlign="center" fontFamily="avenir" pb=".625rem" fontSize="1.25rem">MR. PUNIT CHOPRA</Heading>
                <Heading textAlign="center" fontFamily="varela round" pb="1rem" fontSize="1.125rem">Director</Heading>
                <Flex overflow="hidden">
                    <Image mb="1.563rem" boxShadow="xl" src={punit} w="100%" h="18.75rem" className="image-slieddown reveal" objectFit="cover"/>
                </Flex>
                <Text textAlign="left" fontFamily="varela round" fontSize="1rem">
                BE, MBA (USA) has worked in India & USA in a responsible position for Software & technological development. He was regional head at multinational I.T company. Possesses excellent networking skills & presently engaged in business development for large corporates & State / Central Governments.
                </Text>
            </Flex>
            <Flex direction="column" w="100%">
                <Heading textAlign="center" fontFamily="avenir" pb=".625rem" fontSize="1.25rem">MR. ARVINND AGARWAL</Heading>
                <Heading textAlign="center" fontFamily="varela round" pb="1rem" fontSize="1.125rem">Director</Heading>
                <Flex overflow="hidden">
                    <Image mb="1.563rem" boxShadow="xl" src={arvinnd} w="100%" h="18.75rem" className="image-slieddown reveal" objectFit="cover"/>
                </Flex>
                <Text textAlign="left" fontFamily="varela round" fontSize="1rem">
                Chartered accountant with expertise in commercial & 
                Financial practices. He has been associated with 
                leading corporate brands such as Welspun, Birla 
                Group of companies etc at the top management level.
                </Text>
            </Flex>
            <Flex direction="column" w="100%">
                <Heading textAlign="center" className="fadein-2sdelay revealOnce" pb=".625rem" fontFamily="avenir" fontSize="1.25rem">MR. RAJESH MANGHNANI</Heading>
                <Heading textAlign="center" className="fadein-2sdelay revealOnce" pb="1rem" fontFamily="varela round" fontSize="1.125rem">Director</Heading>
                <Flex overflow="hidden">
                    <Image mb="1.563rem" boxShadow="xl" src={rajesh} w="100%" h="18.75rem" className="image-slieddown reveal" objectFit="cover"/>
                </Flex>
                <Text textAlign="left" className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1rem">
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