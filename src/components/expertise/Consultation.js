import { Center, Flex, Text, Icon, Image, SimpleGrid, HStack, Heading, GridItem, Box, Divider } from "@chakra-ui/react";
import React from "react";
const Consultation =()=>{
      return (<>
        <Flex direction="column" h="100%" overflow="hidden"  px="100px" mt="5rem" mb="3.125rem">
        <Text pb="1.563rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.5rem" textAlign="center">REAL ESTATE CONSULTATION</Text>
        <Heading pb="1.563rem" className="fadein revealOnce" fontFamily="avenir" fontSize="1.875em" textAlign="center">OUR EXPERTISE, OUR PROSPERITY</Heading>
        <Flex> 
            <Text className="fadein-2sdelay revealOnce" fontFamily="varela round" fontSize="1rem" textAlign="center">
            We are specialized in real estate advisory and development and offer all kinds of solutions under one roof. We provide an unmatched depth to the real estate sector, with deep expertise across the broad spectrum of management disciplines, technical intelligence, corporate strategy, architecture, cost transformation, structuring finance and customer experience and loyalty.
            
            Our integrated team of specialists can assist you make the right decisions throughout the process. We believe in making relationships and not transactions.
            </Text>
        </Flex>
        </Flex>
      </>)
}
export default Consultation;