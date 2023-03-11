import { Center, Flex, Text, Icon, Image, SimpleGrid, HStack, Heading, GridItem, Box, Divider } from "@chakra-ui/react";
import React from "react";
const Consultation =()=>{
      return (<>
        <Flex direction="column" h="100%" overflow="hidden"  px="1rem" py="1.875rem" mb="3.125rem" 
            bgImage='linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
        <Center pb="1.125rem" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.125rem" textAlign="center">REAL ESTATE CONSULTATION</Center>
        <Center  className="fadein revealOnce" fontFamily="avenir" fontSize="1.5rem" textAlign="center">OUR EXPERTISE, OUR PROSPERITY</Center>
        <Flex pt="1.125rem"> 
            <Text textAlign="center" className="fadein-2sdelay revealOnce" fontSize="1rem">
            We are specialized in real estate advisory and development and offer all kinds of solutions under one roof. We provide an unmatched depth to the real estate sector, with deep expertise across the broad spectrum of management disciplines, technical intelligence, corporate strategy, architecture, cost transformation, structuring finance and customer experience and loyalty.
            <br/>
            Our integrated team of specialists can assist you make the right decisions throughout the process. We believe in making relationships and not transactions.
            </Text>
        </Flex>
        </Flex>
      </>)
}
export default Consultation;