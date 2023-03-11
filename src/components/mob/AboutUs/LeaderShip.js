import { Box, Center, Divider, Flex, Heading, Icon,Image, Text } from "@chakra-ui/react";
import React from "react";
import { GrLinkedinOption } from "react-icons/gr";

import krunal from "./KRUNAL SHAH.JPG"
import johny from "./JOHNY.JPG"
import pramod from "./PRAMOD.JPG"
import ravi from "./RAVI.JPG"

const LeaderShip =()=>{
    const leaders =[
        {img:krunal, name:"MR. KRUNAL SHAH",team:"Financial Head"},
        {img:pramod, name:"MR. PRAMOD KUMAR",team:"Project Head"},
        {img:johny, name:"MR. JOHNY RAMAN",team:"Technical Head"},
        {img:ravi, name:"MR. RAVI",team:"Design Head"},
    ];
    return (<>
        <Flex direction="column" h="100%" overflow="hidden"  px="1rem">
        <Center pb="1.563rem" textAlign="center" className="slidein-top revealOnce" fontFamily="goudy" fontSize="2.125rem">LEADERSHIP TEAM</Center>
        <Flex direction="column" gap="1rem" mb="3.125rem">
            <Flex p="1rem" boxShadow="xl"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Image w="160px" h="164px" src={leaders[0].img} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
            <Flex direction="column" w="160px" pl="0.8rem">
                <Text pb=".625rem"  fontFamily="avenir" fontWeight="bold" textAlign="left" fontSize="1rem">MR. KRUNAL<br/>SHAH</Text>
                <Text pb=".625rem" fontFamily="varela Round" textAlign="left" fontSize="1rem">{leaders[0].team}</Text>
                <Icon
                  h="3.125rem"
                  w="3.125rem"
                  alignSelf="left"
                  bgColor="#0A66C2"
                  color="#fff"
                  p="0.313rem"
                  as={GrLinkedinOption}
                />
                </Flex>
            </Flex>
            <Flex p="1rem" boxShadow="xl"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Image w="160px" h="164px" src={leaders[1].img} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
            <Flex direction="column" w="160px" pl="0.8rem">
                <Text pb=".625rem" fontFamily="avenir" fontWeight="bold" textAlign="left" fontSize="1rem">{leaders[1].name}</Text>
                <Text pb=".625rem" fontFamily="varela Round" textAlign="left" fontSize="1rem">{leaders[1].team}</Text>
                <Icon
                  h="3.125rem"
                  w="3.125rem"
                  alignSelf="left"
                  bgColor="#0A66C2"
                  color="#fff"
                  p="0.313rem"
                  as={GrLinkedinOption}
                />
                </Flex>
            </Flex>
            <Flex p="1rem" boxShadow="xl"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Image w="160px" h="164px" src={leaders[2].img} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
            <Flex direction="column" w="160px" pl="0.8rem">
                <Text pb=".625rem" fontFamily="avenir" fontWeight="bold" textAlign="left" fontSize="1rem">MR. JOHNY<br/>RAMAN</Text>
                <Text pb=".625rem" fontFamily="varela Round" textAlign="left" fontSize="1rem">{leaders[2].team}</Text>
                <Icon
                  h="3.125rem"
                  w="3.125rem"
                  alignSelf="left"
                  bgColor="#0A66C2"
                  color="#fff"
                  p="0.313rem"
                  as={GrLinkedinOption}
                />
                </Flex>
            </Flex>
            <Flex p="1rem" boxShadow="xl"
            bgImage='linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("/images/bg-box.jpg")'
            bgRepeat="no-repeat"
            bgPos="center"
            bgSize="cover">
                <Image w="160px" h="164px" src={leaders[3].img} filter="drop-shadow(0px 10px 20px rgba(0, 0, 0, 0.25))"/>
            <Flex direction="column" w="160px" pl="0.8rem">
                <Text pb=".625rem" fontFamily="avenir" fontWeight="bold" textAlign="left" fontSize="1rem">{leaders[3].name}</Text>
                <Text pb=".625rem" fontFamily="varela Round" textAlign="left" fontSize="1rem">{leaders[3].team}</Text>
                <Icon
                  h="3.125rem"
                  w="3.125rem"
                  alignSelf="left"
                  bgColor="#0A66C2"
                  color="#fff"
                  p="0.313rem"
                  as={GrLinkedinOption}
                />
                </Flex>
            </Flex>
        </Flex>
        </Flex>
    </>); 
}
export default LeaderShip;